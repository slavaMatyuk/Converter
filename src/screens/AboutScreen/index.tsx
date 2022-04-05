import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {THEME} from '../../constants/theme';

type Props = {
  props: any;
};

export const AboutScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>About screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.ABOUT_SCREEN,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
