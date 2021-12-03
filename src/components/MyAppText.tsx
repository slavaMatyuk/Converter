import React from 'react';
import {Text} from 'react-native';

export const MyAppText = ({...props}) => (
  <Text {...props} style={[textStyles]} />
);

const textStyles = {
  fontFamily: 'roboto',
  fontSize: 18,
  color: 'black',
};
