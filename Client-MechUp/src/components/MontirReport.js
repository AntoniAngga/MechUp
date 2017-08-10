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

const PetaJakarta = require('../images/petajakarta.jpg')

class MontirReport extends Component {

     render() {
          return (
               <Container>
                  <Content>
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
                     <Card>
                          <CardItem style={{alignItems: 'center', height: 180}}>
                               <Image style={{ resizeMode:"contain", flex: 1 }} source={PetaJakarta}></Image>
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
