import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

type Props = {
  props: any;
};

export const CurrencyScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Currency screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffaeff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
