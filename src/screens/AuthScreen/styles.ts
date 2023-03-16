import {StyleSheet} from 'react-native';
import {Colors} from 'src/constants/variables';

export const styles: any = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 50,
    paddingHorizontal: 16,
  },
  label: {
    color: Colors.white,
    marginBottom: 8,
  },
  formField: {
    alignSelf: 'stretch',
    marginBottom: 8,
    alignItems: 'center',
  },
  error: {
    height: 16,
    fontSize: 14,
    color: Colors.orangePrimary,
  },
});
