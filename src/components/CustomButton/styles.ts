import {StyleSheet} from 'react-native';
import {Colors} from 'src/constants/variables';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.orangePrimary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
