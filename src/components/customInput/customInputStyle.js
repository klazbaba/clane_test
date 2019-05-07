import { StyleSheet } from 'react-native';
import { color } from '../../color';

export const customInputStyle = StyleSheet.create({
  input: {
    color: color.white,
    fontSize: 20
  },
  wrapper: {
    borderBottomWidth: 3,
    borderBottomColor: color.slateblue,
    width: '100%',
    flexShrink: 1,
    paddingBottom: 16,
    marginLeft: 16
  }
});
