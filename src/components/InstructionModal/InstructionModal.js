import React from 'react';
import {Modal, View, TouchableOpacity, StyleSheet} from 'react-native';
import InstructionTop from './InstructionTop';
import InstructionCenter from './InstructionCenter';
import InstructionBottom from './InstructionBottom';
import SimpleText from '../SimpleText/SimpleText';

const InstructionModal = ({isVisible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
      transparent>
      <View style={styles.container}>
        <View style={styles.closeContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <SimpleText boldType="bold" style={styles.closeButtonText}>
              X
            </SimpleText>
          </TouchableOpacity>
        </View>
        <View style={styles.instructionContainer}>
          <View style={styles.header}>
            <SimpleText boldType="medium" style={styles.title}>
              Swipe Instruction
            </SimpleText>
          </View>
          <View style={styles.body}>
            <View style={styles.instructions}>
              <InstructionTop />
              <InstructionCenter />
              <InstructionBottom />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 575,
    top: 150,
    left: 35,
    justifyContent: 'flex-start',
  },
  closeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  closeButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  closeButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  instructionContainer: {
    flex: 19,
    backgroundColor: '#2A0234E5',
    borderColor: '#B95B973D',
    borderRadius: 24,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '##9553FF47',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  body: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A0234E5',
  },
  instructions: {
    backgroundColor: '#CA455D33',
    width: 227,
    height: 331,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InstructionModal;
