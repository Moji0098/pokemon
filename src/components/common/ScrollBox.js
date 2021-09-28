import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

function ScrollBox({children, paddingHorizontal = 0, paddingBottom = 64}) {
  const styles = StyleSheet.create({
    childrenStyle: {
      paddingBottom,
      paddingHorizontal,
      width: '100%',
      flex: 1,
    },
  });
  const {childrenStyle} = styles;
  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={childrenStyle}>{children}</View>
    </ScrollView>
  );
}

export default ScrollBox;
