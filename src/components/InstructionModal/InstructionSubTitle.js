import React from 'react';
import {StyleSheet} from 'react-native';
import SimpleText from '../SimpleText/SimpleText';
const InstructionSubTitle = ({children}) => (
  <SimpleText style={styles.subtitle}>{children}</SimpleText>
);

const styles = StyleSheet.create({
  subtitle: {
    color: '#FFFFFF',
    opacity: 0.4,
  },
});

export default InstructionSubTitle;
