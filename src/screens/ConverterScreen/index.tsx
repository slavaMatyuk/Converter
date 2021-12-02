import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  props: any;
};

export const ConverterScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Converter screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffc4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
