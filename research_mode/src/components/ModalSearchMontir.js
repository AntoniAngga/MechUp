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
import axios from 'axios'
import firebase from '../config/FirebaseConfig'
import {connect} from 'react-redux'
import { Card, CardSection, Input, Button } from './common';
import { idLoggedMechanic } from '../actions'


const timing = 2000

class ModalSearchMontir extends Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount () {
    const { navigate } = this.props.navigation    
    if(this.props.orderData.current_order != undefined) {
      firebase.database()
      .ref('mechanic_'+this.props.orderData.current_order.mech_id+'/status')
      .on('value', (snapshot) => {
        console.log(snapshot, 'di modal loading');
        if(snapshot._value === 'accepted') {
          navigate('ModalDetailMontir')
        }
        else {
          console.log('tidak pindah');
        }
      })
    }
    else {
      this.spin()
    }
  }

  componentWillReceiveProps (nextProps){
    const { navigate } = this.props.navigation    
    if(this.props.orderData.current_order != undefined) {
      firebase.database()
      .ref('mechanic_'+this.props.orderData.current_order.mech_id+'/status')
      .on('value', (snapshot) => {
        console.log(snapshot, 'di modal loading');
        if(snapshot._value === 'accepted') {
          navigate('ModalDetailMontir')
        }
        else {
          console.log('tidak pindah');
        }
      })
    }
    else {
      this.spin()
    }
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

const mapDispatchToProps = (dispatch) => {
  return {
    getCostumerFromDB: (costumerId) => dispatch(getCostumerFromDB(costumerId)),
    addOrder: (data) => dispatch(addOrder(data))
  }
}

const mapStateToProps = (state) => {
  return {
    oneMontirData: state.customerReducers.data_customers,
    orderData: state.orderReducers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSearchMontir)

