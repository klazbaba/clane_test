import React, { Component } from 'react';
import { View } from 'react-native';

import { verificationStyle } from './verificationStyle';

export default class VerificationScreen extends Component {
  render() {
    return (
      <View style={verificationStyle.container}>
        <CustomText text="Please enter the code we sent you to verify your phone number." />
      </View>
    );
  }
}
