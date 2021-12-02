import React from 'react';
import {Text} from 'react-native';

export const MyAppText = ({...props}) => (
  <Text {...props} style={[textStyles]} />
);

const textStyles = {
  fontFamily: 'Times New Roman',
  fontSize: 27,
  color: 'black',
};
