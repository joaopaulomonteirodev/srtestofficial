import React from 'react';
import {StyleSheet, View, FlatList, Animated} from 'react-native';
import SimpleText from '../SimpleText/SimpleText';
import CollapsableText from '../CollapsableTex/CollapsableTex';

const renderItem = ({item}) => (
  <View style={styles.item}>
    <SimpleText style={styles.iconText}>{item.icon}</SimpleText>
    <SimpleText style={styles.labelText}>{item.label}:</SimpleText>
    <SimpleText style={styles.valueText} boldType="medium">
      {item.value}
    </SimpleText>
  </View>
);

const BackSide = ({data, style}) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <FlatList
        ItemSeparatorComponent={<View style={styles.separator} />}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <SimpleText boldType="medium" style={styles.titleHead}>
                #{data.index}
              </SimpleText>
              <SimpleText boldType="medium" style={styles.titleBody}>
                {data.title}
              </SimpleText>
            </View>
            <View style={styles.descriptionContainer}>
              <CollapsableText
                text={data.description}
                targetLines={4}
                textStyle={styles.descriptionText}
                moreLessStyle={styles.seeMoreText}
              />
            </View>
          </>
        }
        contentContainerStyle={styles.list}
        renderItem={renderItem}
        data={data.details}
        keyExtractor={item => item.label}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 295,
    height: 450,
    backgroundColor: '#3f1c58',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 20,
    marginTop: 20,
  },
  titleHead: {
    color: '#FFFFFF',
    fontSize: 20,
    borderRightColor: 'rgba(255, 255, 255, .1)',
    borderRightWidth: 1,
    height: 30,
    paddingRight: 16,
  },
  titleBody: {
    color: '#FFFFFF',
    fontSize: 18,
    paddingLeft: 16,
  },
  descriptionContainer: {
    marginTop: -20,
  },
  descriptionText: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  seeMoreText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    fontFamily: 'Poppins-Medium',
  },
  iconText: {
    flex: 1,
    color: '#FFFFFF',
  },
  labelText: {
    flex: 4,
    color: 'rgba(255,255,255,.8)',
    fontSize: 14,
    fontWeight: '400',
  },
  valueText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    flex: 4,
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {flexDirection: 'row', marginVertical: 13},
  separator: {height: 1, backgroundColor: 'rgba(255,255,255, .2)'},
});

export default BackSide;
