import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// redux
import {useDispatch} from 'react-redux';
import {AddFavorite} from './../../redux/actions/favorites';
//---color font
import {COLORS, ROUTES} from '../../utils/variables';
// icon
import {BookmarkEmpty, BookmarkFill, PokeballWhite} from '../../assets/icons';

const PokeListItem = ({name = '', url = '', booked = false}) => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const goDetails = () => {
    console.log('URL ', url);
    navigate({
      name: ROUTES.POKE_DETAILS,
      params: {url},
    });
  };

  const addBookMark = () => {
    dispatch(AddFavorite({name, url}));
  };

  const {parent, child, titleValue, textBox, bookIcon} = styles;
  return (
    <View style={parent}>
      <TouchableOpacity style={child} onPress={goDetails}>
        <View style={textBox}>
          <PokeballWhite width={16} height={16} />
          <Text style={titleValue}>{name}</Text>
        </View>
        <TouchableOpacity style={bookIcon} onPress={addBookMark}>
          {booked ? (
            <BookmarkFill width={24} height={24} />
          ) : (
            <BookmarkEmpty width={24} height={24} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    height: 90,
    paddingBottom: 0,
  },
  child: {
    elevation: 5,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
    position: 'relative',
  },
  titleStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.c393939,
  },
  titleValue: {
    fontSize: 16,
    color: COLORS.c393939,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    marginLeft: 8,
    height: '100%',
  },
  bookIcon: {
    position: 'absolute',
    top: 0,
    right: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
  },
});

export default PokeListItem;
