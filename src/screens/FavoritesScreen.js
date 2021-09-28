import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
// redux
import {useSelectorFavorites} from './../redux/selectors/selectors';
// com
import Header from '../components/common/Header';
import NoItem from '../components/common/NoItem';
import PokeListItem from '../components/home/PokeListItem';

const FavoritesScreen = () => {
  const {favList} = useSelectorFavorites() || {favList: []};

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

  const {parent, body, listBody, footer} = styles;

  return (
    <View style={parent}>
      <Header />
      <View style={body}>
        <FlatList
          style={listBody}
          data={favList}
          renderItem={renderItem}
          keyExtractor={item => {
            return item.url.toString();
          }}
          ListEmptyComponent={<NoItem />}
          ListFooterComponent={<View style={footer} />}
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
  listBody: {
    flexDirection: 'column',
  },
  footer: {height: 16},
});
export default FavoritesScreen;
