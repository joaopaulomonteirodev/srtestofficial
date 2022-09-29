import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TripleArrow = () => (
  <View>
    <Icon name="menu-down" color="rgba(255, 255, 255, .2)" size={20} />
    <Icon name="menu-down" color="rgba(255, 255, 255, .6)" size={20} />
    <Icon name="menu-down" color="#FFFFFF" size={20} />
  </View>
);

const InstructionBottom = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Exit</Text>
    <Text style={styles.subtitle}>Swipe down</Text>
    <TripleArrow />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
  },
  subtitle: {
    color: '#FFFFFF',
    opacity: 0.4,
  },
  light: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontWeight: '900',
    fontSize: 10,
  },
  dark: {
    color: 'rgba(255, 255, 255, .6)',
    fontFamily: 'Poppins-Bold',
    fontWeight: '900',
    fontSize: 10,
  },
  darker: {
    color: 'rgba(255, 255, 255, .2)',
  },
});

export default InstructionBottom;
