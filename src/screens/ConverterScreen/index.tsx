import React from 'react';
import {View} from 'react-native';
import InputRow from '../../components/InputRow';
import {styles} from './styles';

type Props = {
  props: any;
};

export const ConverterScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <InputRow />
      <InputRow />
    </View>
  );
};
