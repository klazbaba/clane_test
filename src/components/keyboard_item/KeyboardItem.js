import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../customText/CustomText';
import { keyStyle } from './keyStyle';

export default function KeyboardItem(props) {
  return (
    <TouchableOpacity style={keyStyle.wrapper} onPress={props.onPress}>
      <CustomText text={props.text} style={keyStyle.text} />
    </TouchableOpacity>
  );
}

KeyboardItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
