import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
        <ImageBackground style={{height: 300, width: 300}} source={require('./assets/Imagem1.png')}>
          <Text style={styles.paragraph}>
            Todos pela vida!
          </Text>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 6,
    alignItems:'center'
  },
  paragraph: {
    margin: 0,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  
});