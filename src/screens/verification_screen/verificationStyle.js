import { StyleSheet } from 'react-native';
import { color } from '../../color';

export const verificationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.blue,
    padding: 24,
    alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  },
  phoneNumber: {
    color: color.white,
    marginVertical: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.8
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 24
  },
  input: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: color.slateblue,
    justifyContent: 'center',
    marginHorizontal: 8,
    alignItems: 'center'
  },
  keyboardRow: {
    flexDirection: 'row'
  }
});
