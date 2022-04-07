import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {LIST} from '../../constants/currencyList';
import {formatInput} from '../../utils/formatInput';
import {styles} from './styles';

const InputRow = () => {
  const [input, setInput] = useState('');
  const [currency, setCurrency] = useState('');

  const onChangeAmount = (value: string) => setInput(formatInput(value));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        keyboardType="number-pad"
        onChangeText={onChangeAmount}
        value={input}
        placeholder={'0'}
      />
      <RNPickerSelect
        value={currency}
        onValueChange={value => setCurrency(value)}
        useNativeAndroidPickerStyle={false}
        style={styles}
        items={LIST}
      />
    </View>
  );
};

export default InputRow;
