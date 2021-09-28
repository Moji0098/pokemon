import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
// com
import Empty from './../common/Empty';
// utils
import {ArrowLeft, PokeballRed, Menu} from '../../assets/icons';
import {COLORS} from '../../utils/variables';

function Header({back, backBtn = false}) {
  const {goBack, openDrawer} = useNavigation();

  const {header, iconBox} = styles;
  return (
    <View style={header}>
      <View style={iconBox}>
        {backBtn ? (
          <TouchableOpacity onPress={back ? back : goBack}>
            <ArrowLeft width={24} height={24} />
          </TouchableOpacity>
        ) : (
          <Empty />
        )}
      </View>
      <PokeballRed width={24} height={24} />
      <TouchableOpacity style={iconBox} onPress={openDrawer}>
        <Menu width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.main,
    height: 48,
    paddingHorizontal: 16,
    position: 'relative',
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 24,
  },
});

export default Header;
