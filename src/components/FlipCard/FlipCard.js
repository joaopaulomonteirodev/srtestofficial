import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, Pressable} from 'react-native';
import FrontSide from './FrontSide';
import BackSide from './BackSide';

const FlipCard = ({data, onFlip}) => {
  const animationRef = useRef(new Animated.Value(0));

  const flipAnimation = animationRef.current;

  let flipRotation = 0;

  const flipHandler = ({value}) => (flipRotation = value);

  useEffect(() => {
    flipAnimation.addListener(flipHandler);
    return () => flipAnimation.removeListener(flipHandler);
  });

  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  const handleTap = () => {
    onFlip(!flipRotation);
    flipRotation ? flipToBack() : flipToFront();
  };

  return (
    <>
      <Pressable style={styles.cardWrapper} onPress={handleTap}>
        <FrontSide data={data} style={flipToFrontStyle} />
        <BackSide data={data} style={flipToBackStyle} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: 295,
    height: 450,
    borderRadius: 25,
    position: 'relative',
    overflow: 'hidden',
  },
});

export default FlipCard;
