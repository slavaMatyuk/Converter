import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

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
