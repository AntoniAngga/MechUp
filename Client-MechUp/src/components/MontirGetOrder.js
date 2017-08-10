
import React, { Component } from 'react'
import {
     Container,
     Content,
     Input,
     Button,
     Card,
     CardItem,
     Icon,
     InputGroup,
     List,
     ListItem
} from 'native-base'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

class MontirGetOrder extends Component {
     static navigationOptions = {
       title: 'Need to Repair',
       headerTitleStyle: {
         color: '#fff',
         justifyContent: 'center',
         alignItems: 'center',
         fontSize: 28
       },
       headerStyle: {
         backgroundColor: '#fd583d'
       }
     }

     render() {
          const { navigate } = this.props.navigation
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

                         <Button block success onPress= { () => navigate('MontirReport')}>
                               <Text> Accept </Text>
                         </Button>
                         <Button block danger>
                              <Text> Decline </Text>
                         </Button>
                  </Content>
                </Container>
          )
     }
}

export default MontirGetOrder
