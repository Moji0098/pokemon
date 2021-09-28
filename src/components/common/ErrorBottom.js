import React from 'react';
import {Text, StyleSheet} from 'react-native';
//---empty
import Empty from './Empty';
//---color
import {COLORS} from '../../utils/variables';

function ErrorBottom({error, marginTop = 4}) {
  const styles = StyleSheet.create({
    text: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      color: COLORS.error,
      fontSize: 10,
      marginTop,
    },
  });
  return <>{error ? <Text style={styles.text}>{error}</Text> : <Empty />}</>;
}

export default ErrorBottom;
