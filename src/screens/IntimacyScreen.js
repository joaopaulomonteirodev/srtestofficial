import React, {useLayoutEffect, useState} from 'react';
import {Modal, SafeAreaView, View, StyleSheet, Button} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import SimpleText from '../components/SimpleText/SimpleText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlipCard from '../components/FlipCard/FlipCard';
import InstructionModal from '../components/InstructionModal/InstructionModal';

const getTextByFlipRotation = flipRotation => {
  return flipRotation ? 'Tap to Swipe' : 'Tap for more details';
};

const IntimacyScreen = ({data, visible, onClose, onEnd}) => {
  const [showInstruction, setShowInstruction] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [leftCount, setLeftCount] = useState(0);
  const [flipRotation, setFlipRotation] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => setShowInstruction(true), 4000);
  }, []);

  const handleSwiped = direction => {
    return () => {
      if (direction === 'bottom') {
        onClose(currentCard);
        return;
      }

      if (direction === 'left') {
        setLeftCount(leftCount + 1);
      }

      setCurrentCard(currentCard + 1);

      if (currentCard + 1 === data.length) {
        onEnd();
      }
    };
  };

  const progress = leftCount / data.length;

  return (
    <Modal
      style={StyleSheet.absoluteFill}
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
      transparent>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <SimpleText
            boldStyle="medium"
            style={styles.closeButton}
            onPress={onClose}>
            X
          </SimpleText>
          <SimpleText boldStyle="medium" style={styles.title}>
            Intimacy
          </SimpleText>
        </View>
        <View style={styles.statusContainer}>
          <ProgressBar progress={progress} count={leftCount} />
          <View style={styles.menuContainer}>
            <View style={styles.filtersContainer}>
              <Icon name="filter" color="#FFFFFF" size={20} />
              <SimpleText style={styles.filtersText}>Filters</SimpleText>
            </View>
            <View style={styles.optionsContainer}>
              <Icon name="cards" color="#FFFFFF" size={20} />
              <Icon name="book-variant" color="#ECE9F166" size={20} />
            </View>
          </View>
        </View>
        <View style={styles.cardsContainer}>
          <CardStack
            renderNoMoreCards={() => <></>}
            onSwipedLeft={handleSwiped('left')}
            onSwipedRight={handleSwiped('right')}
            onSwipedTop={handleSwiped('top')}
            onSwipedBottom={handleSwiped('bottom')}
            initialIndex={currentCard}>
            {data.map(dt => (
              <Card key={dt.index}>
                <FlipCard
                  data={dt}
                  onFlip={nFlipRotation => setFlipRotation(nFlipRotation)}
                />
              </Card>
            ))}
          </CardStack>

          <SimpleText boldType="medium" style={styles.tapInformationText}>
            {getTextByFlipRotation(flipRotation)}
          </SimpleText>
        </View>
        <InstructionModal
          isVisible={showInstruction}
          onClose={() => setShowInstruction(false)}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0547',
  },
  titleContainer: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginTop: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    left: 26,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  statusContainer: {
    marginTop: 15,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    marginTop: 40,
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtersText: {
    color: 'rgba(255, 255, 255, .6)',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 5,
  },
  optionsContainer: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
  cardsContainer: {
    marginTop: 30,
    width: 295,
    height: 500,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  tapInformationText: {
    color: 'rgba(255, 255, 255, .2)',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
  },
});

export default IntimacyScreen;
