import React, { Component } from 'react'
import {
     Container,
     Header,
     Content,
     Input,
     CardItem,
     InputGroup,
     List,
     Left,
     ListItem
} from 'native-base'
import axios from 'axios'
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions } from 'react-navigation'
import { Card, CardSection, Button } from './common';


import firebase from '../config/FirebaseConfig'
import {server_url, idLoggedMechanic, toReduxOrderMontir, currentOrder} from '../actions'

const Online = require('../images/online.png')

class MontirOnline extends Component {

     static navigationOptions = {
       title: 'Montir Status',
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

     componentDidMount() {
       navigator.geolocation.getCurrentPosition(
         (position) => {
           console.log(idLoggedMechanic, 'ini dalam MontirOnline');
           axios.put(server_url+'/api/mechanic/'+idLoggedMechanic[0].id_mechanic, {
             lat: position.coords.latitude,
             long: position.coords.longitude
           })
           .then(() => {
             //Pertama mau GET login auth by mechanic id
             axios.put(server_url+'/auth/mechanic/update_status/'+idLoggedMechanic[0].id, {
              lat: position.coords.latitude,
              long: position.coords.longitude,
              status: "Found"
             })
             .then(data => {
                this.watchId = navigator.geolocation.watchPosition(
                  (position) => {
                    axios.get(server_url+'/api/order/mechanic/'+idLoggedMechanic[0].id_mechanic)
                    .then(res => {
                      this.props.toReduxOrder(res.data[0])
                      console.log(res.data,'ini data di watch');
                    })
                    .catch(err => {
                      console.log(err)
                    })
                  },
                  (error) => this.setState({ error: error.message }),
                  { distanceFilter: 10 },
                );
             })
             .catch(err => {
                console.log(err,"ini error nya put /auth/mechanic/role")
             })
           })
           .catch(err => {
             console.log(err, "ini errpr nya Put /api/mechanic")
           })
         },
         (error) => this.setState({ error: error.message }),
       )
     }

     componentWillMount(){
      const { navigate } = this.props.navigation
      const montirId = idLoggedMechanic[0].id_mechanic
      axios.get(server_url+'/api/order/')
      .then( result => {
         firebase.database()
         .ref(`order/orderID/status`)
         .on('value', (snapshot) => {
           console.log(snapshot);
           if(snapshot._value == 'waiting to be accepted') {
             axios.post(server_url+'/send/sms',{
               to: '6281294373359',
               text: 'You got an order, please check your application'
             })
             navigate('MontirGetOrder')
           }
           else {
             navigate('MontirOnline')
           }
         })
      })
      .catch( err => {
        console.log(this.props.mapping.order_id);
        console.log(err);
      })
     }

     componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchId);
    }

     render() {
          const { navigate } = this.props.navigation
          return (
               <Container>
                  <Content>
                       <Card>
                              <CardItem style={{alignItems: 'center', height: 350, paddingTop: 60}}>
                                   <Image style={{ resizeMode:"contain", flex: 1 }} source={Online}></Image>
                              </CardItem>
                              <Text style={{ alignItems: 'center', fontSize: 20, marginLeft: 80}}>Status  : I am Online</Text>
                       </Card>
                       <Button style={{ marginTop: 20 }}>
                              <Text style={ styles.styleText } onPress= { () => navigate('Login')}>Logout</Text>
                       </Button>
                  </Content>
                </Container>
          )
     }
}

const styles = {
     styleText : {
          fontSize: 22
     }
}


const mapDispatchToProps = (dispatch) => {
  return {
    toReduxOrder: (input) => {
      dispatch(toReduxOrderMontir(input))
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'ini state');
  return {
    mapping: state.orderReducers.data_order.final
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MontirOnline)
