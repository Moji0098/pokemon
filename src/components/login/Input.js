import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
//---com
import ErrorBottom from './../common/ErrorBottom';
import Empty from './../common/Empty';
//---utils
import {COLORS} from '../../utils/variables';

const Input = ({
  change,
  error,
  title = '',
  textAlign = 'left',
  marginTop = 16,
  keyboardType = 'default',
  placeColor = COLORS.c70,
  inputAlign = 'left',
  titleFontSize = 12,
  titleColor = COLORS.c97,
  borderColor = COLORS.ce8e8e8,
  ...inputProps
}) => {
  const styles = StyleSheet.create({
    inputBox: {
      width: '100%',
      marginTop,
    },
    child: {
      width: '100%',
      position: 'relative',
      borderColor: COLORS.cf6,
      flexDirection: 'column',
    },
    input: {
      height: 56,
      color: COLORS.c393939,
      paddingHorizontal: 16,
      fontSize: 14,
      borderRadius: 16,
      borderWidth: 1,
      width: '100%',
      borderColor,
      textAlign: inputAlign,
      backgroundColor: COLORS.ce8e8e8,
    },
    inputTitle: {
      fontSize: titleFontSize,
      textAlign,
      color: titleColor,
      marginBottom: 8,
    },
    secondIconBoxStyle: {
      position: 'absolute',
      left: 48,
      top: 12,
      zIndex: 1,
    },
    errorBorder: {
      borderColor: COLORS.cfe363d,
    },
  });

  const {inputBox, inputTitle, input, child, errorBorder} = styles;

  return (
    <View style={inputBox}>
      <View style={child}>
        {title ? <Text style={inputTitle}>{title}</Text> : <Empty />}
        <TextInput
          style={[input, error ? errorBorder : null]}
          onChange={change}
          keyboardType={keyboardType}
          placeholderTextColor={placeColor}
          {...inputProps}
        />
      </View>
      <ErrorBottom error={error} />
    </View>
  );
};

export default Input;
