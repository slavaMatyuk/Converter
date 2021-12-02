import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {ConverterScreen} from '../screens/ConverterScreen';
import {CurrencyScreen} from '../screens/CurrencyScreen';
import {AboutScreen} from '../screens/AboutScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {THEME} from '../constants/theme';

const MainStack = createStackNavigator<StackProps>();

export type StackProps = {
  Home: {title: string} | undefined;
  Converter: {title: string} | undefined;
  Currency: {title: string} | undefined;
  About: {title: string} | undefined;
};

export default function AppNavigation() {
  const {Navigator, Screen} = MainStack;

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.PRIMARY,
          },
          headerTintColor: THEME.SECONDARY,
          headerTitleStyle: {
            fontFamily: 'cabin',
            fontWeight: '200',
          },
        }}>
        <Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'CURRENCY CONVERTER'}}
        />
        <Screen
          name="Converter"
          component={ConverterScreen}
          options={{title: 'CONVERTER'}}
        />
        <Screen
          name="Currency"
          component={CurrencyScreen}
          options={{title: 'CURRENCY RATES'}}
        />
        <Screen
          name="About"
          component={AboutScreen}
          options={{title: 'ABOUT APP'}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
