import React from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import SimpleText from '../SimpleText/SimpleText';

const FrontSide = ({data, style, onTap}) => (
  <Animated.View style={[styles.container, style]}>
    <View style={styles.header}>
      <SimpleText boldType="semibold" style={styles.title}>
        #{data.index}
      </SimpleText>
      <SimpleText style={styles.subtitle}>{data.title}</SimpleText>
    </View>
    <View style={styles.body}>
      <Image style={styles.image} source={data.img} />
    </View>
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f1c58',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 44,
    color: '#FFFFFF',
    fontWeight: '600',
    margin: 0,
    padding: 0,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    margin: 0,
    padding: 0,
  },
  body: {
    flex: 3,
  },
  image: {
    width: 268,
    height: 171,
  },
});

export default FrontSide;
