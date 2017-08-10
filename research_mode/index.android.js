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
import Marker from './src/components/Marker'
import RnDirectionsApp from './src/components/RnDirectionsApp'
import DraggableMarkers from './src/components/DraggableMarker'
import CostumMarkers from './src/components/CostumMarkers'
import Example from './src/components/Example'

export default class research_mode extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyApp />        
      </View>
    );
  }
  
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(position.coords.latitude)
  //       // this.setState({
  //       //   latitude: position.coords.latitude,
  //       //   longitude: position.coords.longitude,
  //       //   error: null,
  //       // });
  //     },
  //     (error) => this.setState({ error: error.message }),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  //   );
  // }

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
