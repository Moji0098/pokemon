import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
//---empty
import Empty from './Empty';

const SmallLoading = ({loading}) => {
  return (
    <>
      {loading ? (
        <View style={styles.parent}>
          <ActivityIndicator color="#0c4ea2" size="small" />
        </View>
      ) : (
        <Empty />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },
});

export default SmallLoading;
