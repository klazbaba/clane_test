import React, { Component } from 'react';
import { View } from 'react-native';

import { verificationStyle } from './verificationStyle';
import CustomText from '../../components/customText/CustomText';
import KeyboardItem from '../../components/keyboard_item/KeyboardItem';

export default class VerificationScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Verify',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    }
  };

  state = {
    code: []
  };

  render() {
    const { getParam } = this.props.navigation;
    const { code } = this.state;

    return (
      <View style={verificationStyle.container}>
        <CustomText
          text="Please enter the code we sent you to verify your phone number."
          style={verificationStyle.text}
        />

        <CustomText
          text={`Sent to +234 ${getParam('phoneNumber')}`}
          style={verificationStyle.phoneNumber}
        />

        <View style={verificationStyle.inputRow}>
          <View style={verificationStyle.input}>
            <CustomText text={code[0]} />
          </View>

          <View style={verificationStyle.input}>
            <CustomText text={code[1]} />
          </View>

          <View style={verificationStyle.input}>
            <CustomText text={code[2]} />
          </View>

          <View style={verificationStyle.input}>
            <CustomText text={code[3]} />
          </View>
        </View>

        <CustomText
          text={'I did not receive a code!\nResend'}
          style={[verificationStyle.text, { marginVertical: 32 }]}
        />

        <View style={verificationStyle.keyboardRow}>{this.renderKeyboardFirstRow()}</View>
        <View style={verificationStyle.keyboardRow}>{this.renderKeyboardSecondRow()}</View>
        <View style={verificationStyle.keyboardRow}>{this.renderKeyboardThirdRow()}</View>
        <View style={verificationStyle.keyboardRow}>{this.renderKeyboardFourthRow()}</View>
      </View>
    );
  }

  handleKeyPress = item => {
    const { code } = this.state;

    try {
      // This handles when null is entered
      if (item === '') return;

      if (item === '\u232B') {
        code.pop();
        this.setState({ code });
        return;
      }

      if (code.length > 3) throw 'Code length surpassed!';
      this.state.code.push(item);
      this.setState({ code });
    } catch (error) {
      console.error(error);
    }
  };

  renderKeyboardFirstRow = () => {
    return ['1', '2', '3'].map((item, index) => {
      return <KeyboardItem text={item} key={index} onPress={() => this.handleKeyPress(item)} />;
    });
  };

  renderKeyboardSecondRow = () => {
    return ['4', '5', '6'].map((item, index) => {
      return <KeyboardItem text={item} key={index} onPress={() => this.handleKeyPress(item)} />;
    });
  };

  renderKeyboardThirdRow = () => {
    return ['7', '8', '9'].map((item, index) => {
      return <KeyboardItem text={item} key={index} onPress={() => this.handleKeyPress(item)} />;
    });
  };

  renderKeyboardFourthRow = () => {
    return ['', '0', '\u232B'].map((item, index) => {
      return <KeyboardItem text={item} key={index} onPress={() => this.handleKeyPress(item)} />;
    });
  };
}
