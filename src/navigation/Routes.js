import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignupScreen from '../screens/signup_screen/SignupScreen';
import VerificationScreen from '../screens/verification_screen/VerificationScreen';
import PasswordScreen from '../screens/password_screen/PasswordScreen';
import { color } from '../color';

const appStack = createStackNavigator(
  {
    signup: SignupScreen,
    verify: VerificationScreen,
    password: PasswordScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: color.blue
        },
        headerRight: (
          <Text
            style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}
            onPress={() => navigation.navigate('signup')}
          >
            Cancel
          </Text>
        ),
        headerLeftContainerStyle: { marginLeft: 16 },
        headerRightContainerStyle: { marginRight: 16 },
        headerBackTitleStyle: { color: color.white, fontWeight: 'bold', fontSize: 20 },
        headerTintColor: color.white
      };
    }
  }
);

export default createAppContainer(appStack);
