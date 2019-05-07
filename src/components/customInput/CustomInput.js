import React from 'react';
import { TextInput, View } from 'react-native';

import { customInputStyle } from './customInputStyle';
import { color } from '../../color';

export const CustomInput = props => {
  return (
    <View style={customInputStyle.wrapper}>
      <TextInput {...props} style={customInputStyle.input} placeholderTextColor={color.white} />
    </View>
  );
};
