import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SimpleText from '../components/SimpleText/SimpleText';
import IntimacyScreen from './IntimacyScreen';
import {data} from '../../data';

const AppScreen = () => {
  const [hasEnded, setHasEnded] = useState(false);
  const [showIntimacy, setShowIntimacy] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0547" />
      {hasEnded ? (
        <SimpleText boldType="semibold" style={styles.buttonText}>
          That's all folks!
        </SimpleText>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowIntimacy(true)}>
          <SimpleText boldType="bold" style={styles.buttonText}>
            Show Intimacy
          </SimpleText>
        </TouchableOpacity>
      )}
      <IntimacyScreen
        data={data}
        visible={showIntimacy}
        onClose={() => setShowIntimacy(false)}
        onEnd={() => {
          setHasEnded(true);
          setShowIntimacy(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0547',
    justifyContent: 'center',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#CA455D33',
    borderRadius: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 15,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontWidth: '6000',
    fontSize: 24,
  },
});

export default AppScreen;
