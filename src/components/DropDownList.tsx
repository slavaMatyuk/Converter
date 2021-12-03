import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {THEME} from '../constants/theme';

export const DropDownList = () => {
  const [input, setInput] = useState('');
  return (
    <>
      <View>
        <RNPickerSelect
          onValueChange={value => setInput(value)}
          useNativeAndroidPickerStyle={false}
          style={styles}
          items={[
            {label: 'USD   🇺🇸', value: 'American dollar'},
            {label: 'EUR   🇪🇺', value: 'Euro'},
            {label: 'RUB   🇷🇺', value: 'Russian ruble'},
            {label: 'UAH   🇺🇦', value: 'Ukrainian hryvnia'},
            {label: 'CNY   🇨🇳', value: 'Chinese yuan'},
            {label: 'BYN   🇧🇾', value: 'Belarusian ruble'},
          ]}
        />
      </View>
      <View style={styles.text}>
        {input ? (
          <>
            <Text style={styles.title}>{'Basic currency is'}</Text>
            <Text style={styles.subtitle}>{`${input}`}</Text>
          </>
        ) : (
          <Text style={styles.title}>{'Please, choose basic currency'}</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputAndroid: {
    marginTop: 25,
    fontSize: 32,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    color: 'black',
  },
  text: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  title: {
    fontSize: 14,
    color: THEME.PRIMARY_HOVER,
  },
  subtitle: {
    fontSize: 24,
    color: THEME.PRIMARY,
  },
});
