import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DropDownList} from '../../components/DropDownList';
import {THEME} from '../../constants/theme';
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
      <TouchableOpacity style={styles.button} onPress={toConvertScreen}>
        <Text style={styles.title}>accept</Text>
      </TouchableOpacity>
      <DropDownList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: THEME.BORDER,
    marginTop: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: THEME.SECONDARY,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
});
