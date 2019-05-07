import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import { customInputStyle } from './customInputStyle';
import { color } from '../../color';

export default function CustomInput(props) {
  return (
    <View style={[customInputStyle.wrapper, props.style]}>
      <TextInput {...props} style={customInputStyle.input} placeholderTextColor={color.white} />
    </View>
  );
}

CustomInput.propTypes = {
  style: PropTypes.oneOf([PropTypes.object, PropTypes.arrayOf(PropTypes.object)])
};
