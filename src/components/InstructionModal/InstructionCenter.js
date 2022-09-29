import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InstructionTitle from './InstructionTitle';
import InstructionSubTitle from './InstructionSubTitle';
import {images} from '../../../assets/images';

const light = '#FFFFFF';
const dark = 'rgba(255, 255, 255, .6)';
const darker = 'rgba(255, 255, 255, .2)';

const TripleArrowLeft = ({flexDirection}) => (
  <Text>
    <Icon name="menu-left" color={light} size={20} />
    <Icon name="menu-left" color={dark} size={20} />
    <Icon name="menu-left" color={darker} size={20} />
  </Text>
);

const TripleArrowRight = ({style, flexDirection}) => (
  <Text style={{flexDirection}}>
    <Icon name="menu-right" color={darker} size={20} />
    <Icon name="menu-right" color={dark} size={20} />
    <Icon name="menu-right" color={light} size={20} />
  </Text>
);

const InstructionCenter = () => (
  <View style={styles.container}>
    <View style={styles.leftPosition}>
      <InstructionTitle>
        No <TripleArrowLeft />
      </InstructionTitle>
      <InstructionSubTitle>Swipe left</InstructionSubTitle>
    </View>
    <View style={styles.center}>
      <Image style={styles.icon} source={images.handIcon} />
    </View>
    <View style={styles.rightPosition}>
      <InstructionTitle>
        <TripleArrowRight /> Yes
      </InstructionTitle>
      <InstructionSubTitle>Swipe right</InstructionSubTitle>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  leftPosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 40,
  },
  rightPosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  light: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontWeight: '900',
  },
  dark: {
    color: 'rgba(255, 255, 255, .6)',
    fontFamily: 'Poppins-Bold',
    fontWeight: '900',
  },
  darker: {
    color: 'rgba(255, 255, 255, .2)',
    fontFamily: 'Poppins-Bold',
    fontWeight: '900',
  },
});

export default InstructionCenter;
