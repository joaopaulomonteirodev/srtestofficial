import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleText from '../SimpleText/SimpleText';

const getRightOffset = progress => {
  switch (progress) {
    case 0:
      return -60;
    case 1:
      return 23;
    default:
      return -30;
  }
};

const ProgressBar = ({progress, count}) => {
  const timer = React.useRef(new Animated.Value(0)).current;
  const fade = React.useRef(new Animated.Value(0)).current;
  const [width, setWidth] = React.useState(0);
  const [prevWidth, setPrevWidth] = React.useState(0);

  const startAnimation = React.useCallback(() => {
    Animated.timing(fade, {
      duration: 200,
      toValue: 1,
      useNativeDriver: true,
      isInteraction: false,
    }).start();

    Animated.timing(timer, {
      duration: 200,
      toValue: progress ? progress : 0,
      useNativeDriver: true,
      isInteraction: false,
    }).start();
  }, [timer, progress, fade]);

  React.useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  React.useEffect(() => {
    if (prevWidth === 0) {
      startAnimation();
    }
  }, [prevWidth, startAnimation]);

  const progressAnimationStyle = {
    width,
    transform: [
      {
        translateX: timer.interpolate({
          inputRange: [0, 1],
          outputRange: [-1 * width, 0],
        }),
      },
    ],
  };

  const right = getRightOffset(progress);
  const badgeAnimationStyle = {
    right,
    transform: [
      {
        translateX: timer.interpolate({
          inputRange: [0, 1],
          outputRange: [-1 * width, 0],
        }),
      },
    ],
  };

  const onLayout = event => {
    setPrevWidth(width);
    setWidth(event.nativeEvent.layout.width);
  };

  return (
    <View onLayout={onLayout}>
      <Animated.View style={[styles.badge, badgeAnimationStyle]}>
        <SimpleText style={styles.badgeContent} boldType="semibold">
          <Icon name="cards" color="#FFFFFF" size={14} /> {count}
        </SimpleText>
      </Animated.View>
      <Animated.View style={[styles.bar, {opacity: fade}]}>
        {width ? (
          <Animated.View style={[styles.gauge, progressAnimationStyle]} />
        ) : null}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    bottom: -5,
    backgroundColor: '#8312BE',
    width: 40,
    height: 22,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  badgeContent: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  bar: {
    alignSelf: 'stretch',
    borderRadius: 50,
    backgroundColor: 'rgba(247, 101, 103, .2)',
    marginHorizontal: 26,
    height: 8,
    overflow: 'hidden',
  },
  gauge: {
    flex: 1,
    backgroundColor: '#8312BE',
    borderRadius: 50,
    height: 8,
  },
});

export default ProgressBar;
