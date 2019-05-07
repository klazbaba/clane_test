import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../customText/CustomText';
import { customButtonStyle } from './customButtonStyle';

export default function CustomButton(props) {
  return (
    <TouchableOpacity {...props} style={[customButtonStyle.wrapper, props.style]}>
      <CustomText text={props.buttonText} />
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  style: PropTypes.object
};
