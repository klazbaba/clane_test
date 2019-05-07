import React, { Component } from 'react';
import { View, Image, SafeAreaView } from 'react-native';

import { signupStyle } from './signupStyle';
import CustomText from '../../components/customText/CustomText';
import { CustomInput } from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import { color } from '../../color';

export default class SignupScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: color.blue }}>
        <View style={signupStyle.container}>
          <Image source={require('../../../assets/images/logo.png')} style={signupStyle.logo} />
          <CustomText
            text="Which mobile number do you want to use for your Clane account?"
            style={signupStyle.numberPrompt}
          />

          <View style={signupStyle.inputCompartment}>
            <CustomText text="+234" style={signupStyle.countryCode} />
            <CustomInput placeholder="Enter mobile number" keyboardType="numeric" maxLength={10} />
          </View>

          <CustomButton
            buttonText="Continue"
            style={signupStyle.button}
            onPress={() => navigate('verify')}
          />
          <CustomText
            text={'By signing up, you agree to the \nClane Service Agreement.'}
            style={signupStyle.serviceAgreement}
          />
        </View>
      </SafeAreaView>
    );
  }
}
