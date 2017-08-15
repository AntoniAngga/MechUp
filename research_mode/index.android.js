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
import { Provider } from 'react-redux'
import firebase from './src/config/FirebaseConfig'

import Navigation from './src/Navigation'
import store from './src/stores';

export default class research_mode extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
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

//   testing () {
    // firebase.database()
    // .ref('posts/1234')
    // .set({
    //   title: 'My awesome',
    //   content: 'Some awesome content',
    // });
//   }
}


AppRegistry.registerComponent('research_mode', () => research_mode);
