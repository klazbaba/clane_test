import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { customTextStyle } from './customTextStyle';

export default function CustomText(props) {
  return <Text style={[customTextStyle.text, props.style]}>{props.text}</Text>;
}

CustomText.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object
};
