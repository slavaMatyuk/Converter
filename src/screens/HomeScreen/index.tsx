import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DropDownList} from '../../components/DropDownList';
import {StackProps} from '../../navigation/AppNavigation';
import {styles} from './styles';
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
      <TouchableOpacity style={styles.button} onPress={toConvertScreen}>
        <Text style={styles.title}>accept</Text>
      </TouchableOpacity>
      <DropDownList />
    </View>
  );
};
