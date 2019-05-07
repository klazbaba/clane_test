import React, { Component } from 'react';
import { View, Alert } from 'react-native';

import { passwordScreenStyle } from './passwordScreenStyle';
import CustomText from '../../components/customText/CustomText';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';

export default class PasswordScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Password',
    headerLeft: null,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    }
  };

  render() {
    return (
      <View style={passwordScreenStyle.container}>
        <CustomText
          text={'Please set a password for your Clane\naccount.'}
          style={passwordScreenStyle.headerText}
        />

        <CustomInput
          placeholder="Password"
          style={[passwordScreenStyle.input, { marginTop: 62, paddingBottom: 32 }]}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          style={[passwordScreenStyle.input, { marginTop: 24, borderBottomWidth: 0 }]}
          secureTextEntry={true}
        />

        <CustomButton
          buttonText="Sign Up"
          onPress={() => Alert.alert('Sure to continue?', '', [{ text: 'No' }, { text: 'Yes' }])}
        />
      </View>
    );
  }
}
