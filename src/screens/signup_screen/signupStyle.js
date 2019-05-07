import { StyleSheet } from 'react-native';
import { color } from '../../color';

export const signupStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.blue,
    alignItems: 'center',
    padding: 16
  },
  logo: {
    width: 150,
    height: 40,
    marginBottom: 32,
    marginTop: 16
  },
  numberPrompt: {
    color: color.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8
  },
  inputCompartment: {
    flexDirection: 'row',
    marginBottom: 16,
    alignSelf: 'stretch',
    marginHorizontal: 24,
    marginTop: 40
  },
  countryCode: {
    marginRight: 8
  },
  button: {
    marginTop: 16
  },
  serviceAgreement: {
    textAlign: 'center',
    marginTop: 16,
    color: color.slateblue
  }
});
