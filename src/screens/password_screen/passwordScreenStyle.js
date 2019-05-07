import { StyleSheet } from 'react-native';
import { color } from '../../color';

export const passwordScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.blue,
    paddingHorizontal: 16,
    paddingVertical: 32
  },
  headerText: {
    textAlign: 'center'
  },
  input: {
    marginVertical: 8
  }
});
