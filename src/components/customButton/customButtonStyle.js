import { StyleSheet } from 'react-native';
import { color } from '../../color';

export const customButtonStyle = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    backgroundColor: color.slateblue,
    justifyContent: 'center',
    alignItems: 'center',
    height: 62,
    alignSelf: 'stretch',
    margin: 8
  }
});
