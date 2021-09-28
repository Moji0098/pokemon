import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
// redux
import {useSelectorFavorites} from './../redux/selectors/selectors';

// com
import Header from '../components/common/Header';
import SmallLoading from '../components/common/SmallLoading';
import NoItem from '../components/common/NoItem';
import Empty from '../components/common/Empty';
import PokeListItem from '../components/home/PokeListItem';

import {baseURL} from '../api';

// utils
import {COLORS} from '../utils/variables';

//icons
import {Magnify, Cancel} from './../assets/icons';

const Home = () => {
  const [pokeList, setPokeList] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [delayTimer, setDelayTimer] = useState(null);

  const {favList} = useSelectorFavorites() || {favList: []};

  const source = axios.CancelToken.source();
  const axiosConfig = {
    cancelToken: source.token,
  };

  useEffect(() => {
    _getInitialPokeList();
    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, []);

  const _getInitialPokeList = () => {
    setLoading(true);
    setPokeList([]);
    const api = `${baseURL}`;
    axios
      .get(api)
      .then(res => {
        const {results, next} = res?.data;

        setPokeList(results);
        setNextPage(next || null);
        setPokeList(results);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error : ', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const _getPokeList = next_page => {
    setLoading(true);

    const api = next_page;
    axios
      .get(api, {}, axiosConfig)
      .then(res => {
        const {results, next} = res?.data;

        setPokeList(results);
        setNextPage(next || null);
        setPokeList(pokeList.concat(results));
        setLoading(false);
      })
      .catch(err => {
        console.log('Error : ', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const searchChangeHandler = e => {
    const {text} = e.nativeEvent;
    setSearchValue(text);

    clearTimeout(delayTimer);

    setDelayTimer(
      setTimeout(function () {
        setLoading(true);
        _search(text);
      }, 300),
    );
  };

  const _search = value => {
    const URL = `${baseURL}${value.toLowerCase()}`;
    setPokeList([]);
    axios
      .get(URL)
      .then(res => {
        setPokeList([
          {
            name: value,
            url: URL,
          },
        ]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const clearSearch = () => {
    setSearchValue('');
    _getInitialPokeList();
  };

  const onScroll = event => {
    const currentPosition = event?.nativeEvent?.contentOffset?.y;
    const height = event?.nativeEvent?.contentSize?.height;
    const x = event?.nativeEvent?.layoutMeasurement?.height;
    if (height - x - 1 < currentPosition && nextPage && !loading) {
      _getPokeList(nextPage);
    }
  };
  const renderItem = ({item}) => {
    const {name, url} = item;

    const check = () => {
      const checklist = [];
      for (let val in favList) {
        checklist.push(favList[val]?.name);
      }
      if (checklist.includes(name)) {
        return true;
      }
      return false;
    };

    return <PokeListItem name={name} url={url} booked={check()} />;
  };

  const {
    parent,
    body,
    searchBox,
    searchBtn,
    searchInput,
    listBody,
    clearSearchStyle,
  } = styles;

  return (
    <View style={parent}>
      <Header />
      <View style={searchBox}>
        <View style={searchBtn}>
          <TouchableOpacity onPress={() => _search(searchValue)}>
            <Magnify width={20} />
          </TouchableOpacity>
          <TextInput
            style={searchInput}
            placeholder="search"
            value={searchValue}
            onChange={searchChangeHandler}
          />
          {searchValue ? (
            <TouchableOpacity style={clearSearchStyle} onPress={clearSearch}>
              <Cancel width={15} />
            </TouchableOpacity>
          ) : (
            <Empty />
          )}
        </View>
      </View>
      <View style={body}>
        <FlatList
          style={listBody}
          onScroll={onScroll}
          data={pokeList}
          renderItem={renderItem}
          keyExtractor={item => {
            return item.name.toString();
          }}
          ListEmptyComponent={!loading ? <NoItem /> : <Empty />}
          ListFooterComponent={
            <>
              <SmallLoading loading={loading} bottom={true} />
            </>
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    width: '100%',
    flex: 1,
  },
  searchBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 0,
  },
  searchBtn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    width: '100%',
    height: 42,
    backgroundColor: COLORS.ce8e8e8,
    paddingHorizontal: 8,
  },
  searchInput: {
    color: COLORS.c97,
    flex: 1,
    textAlign: 'left',
    paddingHorizontal: 8,
  },

  listBody: {
    flexDirection: 'column',
  },
  clearSearchStyle: {
    position: 'absolute',
    right: 16,
  },
});
export default Home;
