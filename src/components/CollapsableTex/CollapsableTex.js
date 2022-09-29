import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SimpleText from '../SimpleText/SimpleText';

const CollapsableText = props => {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = e => {
    const {lines} = e.nativeEvent;
    if (lines && Array.isArray(lines) && lines.length > 0) {
      setLengthMore(lines.length >= props.targetLines);
    }
  };

  return (
    <View style={[styles.mainBody, props.containerStyle]}>
      <SimpleText
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : props.targetLines || 1}
        style={[styles.txtStyle, props.textStyle]}>
        {props.text}
      </SimpleText>
      {lengthMore ? (
        <SimpleText onPress={toggleNumberOfLines} style={props.moreLessStyle}>
          {textShown ? 'See less' : 'See more'}
        </SimpleText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {marginTop: 15},
  txtStyle: {
    flex: 1,
  },
});

export default CollapsableText;
