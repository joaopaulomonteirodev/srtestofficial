import React from 'react';
import {Text} from 'react-native';

const fontFamilies = {
  bold: 'Poppins-Bold',
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semibold: 'Poppins-SemiBold',
};

const SimpleText = props => {
  const {style, boldType = 'regular', children, ...others} = props;
  const fontFamily = fontFamilies[boldType];
  return (
    <Text style={[{fontFamily}, style]} {...others}>
      {children}
    </Text>
  );
};

export default SimpleText;
