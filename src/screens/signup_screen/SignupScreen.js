import React, { Component } from 'react';
import { View, Image, SafeAreaView } from 'react-native';

import { signupStyle } from './signupStyle';
import CustomText from '../../components/customText/CustomText';
import { CustomInput } from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import { color } from '../../color';

export default class SignupScreen extends Component {
  state = {
    phoneNumber: ''
  };

  render() {
    const { navigate } = this.props.navigation;
    const { phoneNumber } = this.state;

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
            <CustomInput
              placeholder="Enter mobile number"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={text => this.setState({ phoneNumber: text })}
              value={phoneNumber}
            />
          </View>

          <CustomButton
            buttonText="Continue"
            style={signupStyle.button}
            onPress={() => navigate('verify', { phoneNumber })}
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
