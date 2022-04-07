import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  inputAndroid: {
    marginTop: 40,
    fontSize: 32,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: THEME.BORDER,
    borderRadius: 8,
    color: THEME.PRIMARY,
  },
  text: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  title: {
    fontSize: 14,
    color: THEME.PRIMARY_HOVER,
  },
  subtitle: {
    fontSize: 24,
    color: THEME.PRIMARY,
  },
});
