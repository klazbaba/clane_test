import React, { Component } from 'react';
import { View } from 'react-native';

import { verificationStyle } from './verificationStyle';
import CustomText from '../../components/customText/CustomText';
import KeyboardItem from '../../components/keyboard_item/KeyboardItem';
import { color } from '../../color';

export default class VerificationScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Verify',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    }
  };

  state = {
    code: [],
    codeFirstInputHasFocus: false,
    codeSecondInputHasFocus: false,
    codeThirdInputHasFocus: false,
    codeFourthInputHasFocus: false
  };

  componentDidMount = () => {
    this.setState({ codeFirstInputHasFocus: true });
  };

  render() {
    const { getParam } = this.props.navigation;
    const {
      code,
      codeFirstInputHasFocus,
      codeSecondInputHasFocus,
      codeThirdInputHasFocus,
      codeFourthInputHasFocus
    } = this.state;

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
          <View
            style={[
              verificationStyle.input,
              { backgroundColor: codeFirstInputHasFocus ? color.lightblue : color.slateblue }
            ]}
          >
            <CustomText text={code[0]} style={verificationStyle.code} />
          </View>

          <View
            style={[
              verificationStyle.input,
              { backgroundColor: codeSecondInputHasFocus ? color.lightblue : color.slateblue }
            ]}
          >
            <CustomText text={code[1]} style={verificationStyle.code} />
          </View>

          <View
            style={[
              verificationStyle.input,
              { backgroundColor: codeThirdInputHasFocus ? color.lightblue : color.slateblue }
            ]}
          >
            <CustomText text={code[2]} style={verificationStyle.code} />
          </View>

          <View
            style={[
              verificationStyle.input,
              { backgroundColor: codeFourthInputHasFocus ? color.lightblue : color.slateblue }
            ]}
          >
            <CustomText text={code[3]} style={verificationStyle.code} />
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

  focusNextInput = () => {
    const { code } = this.state;

    if (code.length === 0)
      this.setState({
        codeFirstInputHasFocus: true,
        codeSecondInputHasFocus: false,
        codeThirdInputHasFocus: false,
        codeFourthInputHasFocus: false
      });
    else if (code.length === 1)
      this.setState({
        codeFirstInputHasFocus: false,
        codeSecondInputHasFocus: true,
        codeThirdInputHasFocus: false,
        codeFourthInputHasFocus: false
      });
    else if (code.length === 2)
      this.setState({
        codeFirstInputHasFocus: false,
        codeSecondInputHasFocus: false,
        codeThirdInputHasFocus: true,
        codeFourthInputHasFocus: false
      });
    else
      this.setState({
        codeFirstInputHasFocus: false,
        codeSecondInputHasFocus: false,
        codeThirdInputHasFocus: false,
        codeFourthInputHasFocus: true
      });
  };

  handleKeyPress = item => {
    const { code } = this.state;
    const { navigate } = this.props.navigation;

    try {
      // This handles when null is entered
      if (item === '') return;

      if (item === '\u232B') {
        code.pop();
        this.setState({ code });
        this.focusNextInput();
        return;
      }

      this.state.code.push(item);
      this.setState({ code });
      this.focusNextInput();
      if (code.length > 3) navigate('password');
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
