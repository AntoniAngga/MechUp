import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native'
import firebase from '../config/FirebaseConfig'
import { Card, CardSection, Input, Button } from './common';


const timing = 2000

class ModalSearchMontir extends Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount () {
    this.spin()
    firebase.database()
    .ref(`order/orderID/status`)
    .on('value', (snapshot) => {
      console.log(snapshot);
      if(snapshot._value == 'accepted') {
        navigate('ModalDetailMontir')
      }
      else if (snapshot._value == 'rejected') {
        navigate('MainMontir')
      }
    })
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: timing,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  static navigationOptions = {
    title: 'Searching Montir',
    headerTitleStyle: {
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 28
    },
    headerStyle: {
      backgroundColor: '#f0a53d'
    }
  }


  render () {
     const { navigate } = this.props.navigation
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
                  <Animated.Image
                    style={{ width: 150, height: 150, transform: [{rotate: spin}] }}
                    source={{uri: 'http://blog.frii.com/wp-content/uploads/2014/09/loading.png'}}/>
                    <Text style={ styles.textSpin }>Pencarian Montir</Text>
                    <Text style={ styles.textTunggu } >Mohon tunggu Sebentar</Text>
               <CardSection>
                    <Button onPress={ () => navigate('SearchMontir') }>
                      Cancel
                    </Button>
               </CardSection>
               <CardSection>
                    <Button onPress={ () => navigate('ModalDetailMontir') }>
                      Detail Montir
                    </Button>
               </CardSection>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSpin: {
     fontSize: 18,
     color: '#00227c',
     marginTop: 5
     },
     textTunggu: {
        fontSize: 18,
        color: '#00227c',
        marginBottom: 30
     }
})

export default ModalSearchMontir
