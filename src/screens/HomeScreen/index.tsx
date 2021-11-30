import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

type Props = {
  props: any;
};

export const HomeScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
