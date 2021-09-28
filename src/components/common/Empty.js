import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Empty() {
  return <Text style={styles.empty} />;
}

const styles = StyleSheet.create({
  empty: {
    width: 0,
    height: 0,
    opacity: 0,
    display: 'none',
  },
});

export default Empty;
