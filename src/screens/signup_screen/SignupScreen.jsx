import React, { Component } from 'react';
import { View, Image, SafeAreaView } from 'react-native';

import { signupStyle } from './signupStyle';

export default class SignupScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={signupStyle.container}>
          <Image source={require('../../../assets/images/logo.png')} />
        </View>
      </SafeAreaView>
    );
  }
}
