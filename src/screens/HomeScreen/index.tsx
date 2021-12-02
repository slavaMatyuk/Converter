import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {StackProps} from '../../navigation/AppNavigation';

export interface HomeScreenProps {
  navigation: StackNavigationProp<StackProps, 'Home'>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const toConvertScreen = () => {
    navigation.navigate('Converter');
  };

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title="accept" onPress={toConvertScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7ffbd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
