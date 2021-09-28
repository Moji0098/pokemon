import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
//---color font
import {COLORS} from './../../utils/variables';

function NoItem({msg = 'no results', height = '100%'}) {
  const styles = StyleSheet.create({
    parent: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      flex: 1,
      height,
    },
    text: {
      color: COLORS.c97,
      fontSize: 13,
    },
  });
  const {parent, text} = styles;
  return (
    <View style={parent}>
      <Text style={text}>{msg}</Text>
    </View>
  );
}

export default NoItem;
