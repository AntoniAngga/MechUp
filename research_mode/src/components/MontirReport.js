import React, { Component } from 'react'
import {
     Container,
     Content,
     Input,
     Button,
     Card,
     CardItem,
     List,
     ListItem
} from 'native-base'
import { View, Text, Image } from 'react-native'

import MyApp from './MapsContoh'
import MyApp2 from './MapsContohcopy'
import axios from 'axios'
const PetaJakarta = require('../images/petajakarta.jpg')
import { completeOrder, idLoggedMechanic, server_url } from '../actions'
import firebase from '../config/FirebaseConfig'
import { NavigationActions } from 'react-navigation'

class MontirReport extends Component {
     static navigationOptions = {
       title: 'Report Montir ',
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

     constructor() {
      super()
      this.state= {
        data_order: {}
      }
    }

     componentDidMount() {
      firebase.database().ref('mechanic_'+idLoggedMechanic[0].id_mechanic+'/order_id')
      .once('value', snapshot => {
        axios.get(server_url+'/api/order/'+snapshot._value)
        .then(res => {
            this.setState({data_order : res.data})
        })
        .catch(err => {
          console.log(err);
        })
      })
    }

    finish_data() {
      firebase.database()
      .ref('order').remove();
      this.props.navigation.navigate("MainMontir")
    }

     render() {
          return (
               <Container>
                  <Content>
                   <Card>
                       <List>
                        <ListItem itemDivider>
                        <Text>Customer Name : {(this.state.data_order[0]) ? this.state.data_order[0].cust_name : ""} </Text>
                      </ListItem>
                      <ListItem itemDivider>
                        <Text>Car Merk : {(this.state.data_order[0]) ? this.state.data_order[0].merek : ""} </Text>
                      </ListItem>
                      <ListItem itemDivider>
                        <Text>Car Type : {(this.state.data_order[0]) ? this.state.data_order[0].type : ""} </Text>
                      </ListItem>
                      <ListItem itemDivider>
                        <Text>Lokasi : {(this.state.data_order[0]) ? this.state.data_order[0].cust_address : ""} </Text>
                      </ListItem>
                      {/* <ListItem itemDivider>
                         <Text>Car Problem</Text>
                      </ListItem>
                      <ListItem>
                         <Text>Mesin tidak bisa di stater</Text>
                      </ListItem> */}
                     </List>

                          <CardItem style={{alignItems: 'center', height: 330}}>
                            <MyApp2 />
                          </CardItem>
                     </Card>
                         <Button block success onPress={() => this.finish_data()}>
                               <Text> Finish </Text>
                         </Button>
                  </Content>
                </Container>
          )
     }
}

export default MontirReport
