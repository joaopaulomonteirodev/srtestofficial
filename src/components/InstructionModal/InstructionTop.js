import React from 'react';
import {View, StyleSheet} from 'react-native';
import InstructionTitle from './InstructionTitle';
import InstructionSubTitle from './InstructionSubTitle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TripleArrow = () => (
  <View>
    <Icon name="menu-up" color="#FFFFFF" size={20} />
    <Icon name="menu-up" color="rgba(255, 255, 255, .6)" size={20} />
    <Icon name="menu-up" color="rgba(255, 255, 255, .2)" size={20} />
  </View>
);

const InstructionTop = () => (
  <View style={styles.container}>
    <InstructionTitle>Maybe</InstructionTitle>
    <InstructionSubTitle>Swipe up</InstructionSubTitle>
    <TripleArrow />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
});

export default InstructionTop;
