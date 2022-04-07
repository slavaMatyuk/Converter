import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  inputAndroid: {
    height: 70,
    marginTop: 40,
    fontSize: 18,
    paddingHorizontal: 25,
    paddingVertical: 8,
    backgroundColor: THEME.SECONDARY,
    borderWidth: 0,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    color: THEME.PRIMARY,
    width: '100%',
  },
  textInput: {
    height: 70,
    backgroundColor: THEME.SECONDARY,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderRightWidth: 1,
    borderRightColor: THEME.BORDER,
    width: '40%',
    fontSize: 32,
    textAlign: 'right',
    paddingRight: 20,
    color: THEME.PRIMARY,
  },
});
