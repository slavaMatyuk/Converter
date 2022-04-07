import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {LIST} from '../../constants/currencyList';
import {styles} from './styles';

export const DropDownList = () => {
  const [input, setInput] = useState('');
  return (
    <>
      <View>
        <RNPickerSelect
          onValueChange={value => setInput(value)}
          useNativeAndroidPickerStyle={false}
          style={styles}
          items={LIST}
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
