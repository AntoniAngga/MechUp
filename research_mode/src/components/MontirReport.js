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
const PetaJakarta = require('../images/petajakarta.jpg')

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

     render() {
          return (
               <Container>
                  <Content>
                   <Card>
                       <List>
                      <ListItem itemDivider>
                         <Text>Customer Name : Simon Mignolet </Text>
                      </ListItem>
                      <ListItem itemDivider>
                         <Text>Car Merk : Toyota </Text>
                      </ListItem>
                      <ListItem itemDivider>
                         <Text>Car Type : Avanza </Text>
                      </ListItem>
                      <ListItem itemDivider>
                         <Text>Lokasi : JL.Pondok Indah </Text>
                      </ListItem>
                      <ListItem itemDivider>
                         <Text>Car Problem</Text>
                      </ListItem>
                      <ListItem>
                         <Text>Mesin tidak bisa di stater</Text>
                      </ListItem>
                     </List>

                          <CardItem style={{alignItems: 'center', height: 180}}>
                            <MyApp />
                          </CardItem>
                     </Card>
                         <Button block success>
                               <Text> Finish </Text>
                         </Button>
                  </Content>
                </Container>
          )
     }
}

export default MontirReport
