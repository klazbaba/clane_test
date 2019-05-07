import React from 'react';
import { View } from 'react-native';

import { passwordScreenStyle } from './passwordScreenStyle';
import CustomText from '../../components/customText';

export default class PasswordScreen extends Component {
  render() {
    return (
      <View style={passwordScreenStyle.container}>
        <CustomText text="Please set a password for your Clane account." />
      </View>
    );
  }
}
