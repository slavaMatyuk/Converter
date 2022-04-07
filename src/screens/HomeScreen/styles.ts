import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: THEME.BORDER,
    marginTop: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: THEME.SECONDARY,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
});
