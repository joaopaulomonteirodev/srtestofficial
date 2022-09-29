import React from 'react';
import {StyleSheet} from 'react-native';
import SimpleText from '../SimpleText/SimpleText';

const InstructionTitle = ({children}) => (
  <SimpleText style={styles.title}>{children}</SimpleText>
);

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
  },
});

export default InstructionTitle;
