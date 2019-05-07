import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignupScreen from '../screens/signup_screen/SignupScreen';
import VerificationScreen from '../screens/verification_screen/VerificationScreen';
import { color } from '../color';

const appStack = createStackNavigator(
  {
    signup: SignupScreen,
    verify: VerificationScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: color.blue
      },
      headerRight: <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Cancel</Text>,
      headerLeftContainerStyle: { marginLeft: 16 },
      headerRightContainerStyle: { marginRight: 16 }
    }
  }
);

export default createAppContainer(appStack);
