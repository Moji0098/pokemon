import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
//---utils
import {COLORS} from '../../utils/variables';

const ButtonRegular = props => {
  const {
    title = '',
    backgroundColor = COLORS.main,
    color = '#fff',
    width = null,
    parentWidth = '100%',
    flex = null,
    activeOpacity = 0.5,
    press = () => false,
    fontSize = 16,
    height = 56,
    disabled = false,
    marginTop = null,
    marginBottom = null,
    Icon = null,
    borderColor = null,
    border = false,
    alignItems = 'center',
    borderRadius = 20,
    textAlign = null,
    loading = false,
    loadingColor = COLORS.cfe367e,
    parentPadding = 0,
  } = props;

  const styles = StyleSheet.create({
    parent: {
      marginTop,
      marginBottom,
      width: parentWidth,
      alignItems,
      padding: parentPadding,
    },
    btnStyle: {
      width,
      flex,
      height,
      backgroundColor,
      borderWidth: border ? 1 : 0,
      borderColor,
      borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize,
      color,
      textAlign,
    },
    textIcon: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  const {parent, btnStyle, textIcon, text} = styles;

  return (
    <View style={parent}>
      <TouchableOpacity
        style={btnStyle}
        activeOpacity={activeOpacity}
        onPress={press}
        disabled={disabled}>
        {loading ? (
          <ActivityIndicator color={loadingColor} />
        ) : (
          <View style={textIcon}>
            <Text style={text}>{title}</Text>
            {Icon && <Icon width={24} />}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonRegular;
