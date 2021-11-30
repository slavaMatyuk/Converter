import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

type Props = {
  props: any;
};

export const AboutScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>About screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
