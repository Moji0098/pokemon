import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute, useIsFocused} from '@react-navigation/native';
import axios from 'axios';
// com
import Header from '../components/common/Header';
import SmallLoading from '../components/common/SmallLoading';
import PokeDetailsItem from '../components/poke-details/PokeDetailsItem';
import ScrollBox from '../components/common/ScrollBox';

const PokeDetailsScreen = () => {
  const [details, setDetails] = useState({
    abilities: [],
    base_experience: '',
    height: 7,
    is_default: true,
    moves: [],
    name: '',
    order: 0,
    weight: 0,
    sprites: {},
    types: [],
  });
  const [loading, setLoading] = useState(true);

  const {params} = useRoute();
  const isFocus = useIsFocused();

  const source = axios.CancelToken.source();
  const axiosConfig = {
    cancelToken: source.token,
  };

  useEffect(() => {
    const {url} = params || {url: ''};
    const _getDetails = path => {
      axios
        .get(path, {}, axiosConfig)
        .then(res => {
          const {data} = res;
          setDetails(data);
          setLoading(false);
        })
        .catch(err => {
          console.log('Error : ', err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    _getDetails(url);
    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, []);

  const styles = StyleSheet.create({
    parent: {
      flex: 1,
    },
    body: {
      width: '100%',
      flex: 1,
    },
  });
  const {parent, body} = styles;
  return (
    <View style={parent}>
      <Header backBtn={true} />
      <View style={body}>
        <ScrollBox>
          {loading ? (
            <SmallLoading loading={loading} />
          ) : (
            <PokeDetailsItem details={details} />
          )}
        </ScrollBox>
      </View>
    </View>
  );
};

export default PokeDetailsScreen;
