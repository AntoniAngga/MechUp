/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import firebase from './src/config/FirebaseConfig'

import MyApp from './src/components/Maps'

export default class research_mode extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyApp />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button
        onPress={() => this.testing()}
        title="Check"
        />
      </View>
    );
  }

  testing () {
    firebase.database()
    .ref('posts/1234')
    .set({
      title: 'My awesome',
      content: 'Some awesome content',
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('research_mode', () => research_mode);
