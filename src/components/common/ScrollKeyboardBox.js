import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

function ScrollKeyboardBox({children}) {
  const {body} = styles;
  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}>
      <View style={body}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, width: '100%', height: '100%'},
});

export default ScrollKeyboardBox;
