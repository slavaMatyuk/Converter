import React from 'react';
import {Text} from 'react-native';

export const MyAppText = ({...props}) => (
  <Text {...props} style={[textStyles]} />
);

const textStyles = {
  fontFamily: 'Roboto-Regular' || 'sans-serif',
  fontSize: 18,
  color: 'black',
};
