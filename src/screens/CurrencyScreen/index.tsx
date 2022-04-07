import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

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
