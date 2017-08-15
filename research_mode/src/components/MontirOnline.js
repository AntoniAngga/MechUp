import React, { Component } from 'react'
import {
     Container,
     Header,
     Content,
     Input,
     Button,
     Card,
     CardItem,
     Icon,
     InputGroup,
     List,
     Left,
     ListItem
} from 'native-base'
import axios from 'axios'
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

import {server_url, idLoggedMechanic, toReduxOrderMontir} from '../actions'

const Online = require('../images/online.png')

class MontirOnline extends Component {
  
     static navigationOptions = {
       title: 'Montir Status',
       headerLeft: <Icon name="menu" />,
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
           .then(res => {
             console.log('abis axios', res.data);
           })
         },
         (error) => this.setState({ error: error.message }),
       )
       
      this.watchId = navigator.geolocation.watchPosition(
        (position) => {
          axios.get(server_url+'/api/order/mechanic/'+idLoggedMechanic[0].id_mechanic)
          .then(res => {
            this.props.toReduxOrder(res.data[0])
            console.log(data,'ini data di watch');
          })
        },
        (error) => this.setState({ error: error.message }),
        { distanceFilter: 10 },
      );
     }

     componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchId);
    }

     render() {
          const { navigate } = this.props.navigation
          return (
               <Container>
                  <Content>
                  <Left>
                       <Button transparent onPress={ () => this.props.navigation.navigate("DrawerOpen")}>
                       <Icon name="menu" />
                       </Button>
                  </Left>
                       <Card>
                              <CardItem style={{alignItems: 'center', height: 350, paddingTop: 60}}>
                                   <Image style={{ resizeMode:"contain", flex: 1 }} source={Online}></Image>
                              </CardItem>
                              <Text style={{ alignItems: 'center', fontSize: 20, marginLeft: 80}}>Status  : I am Online</Text>
                       </Card>
                  </Content>
                </Container>
          )
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
    mapping: state.orderReducers.data_order
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MontirOnline)