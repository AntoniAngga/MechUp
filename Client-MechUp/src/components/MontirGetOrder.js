import React, { Component } from 'react'
import {
     Container,
     Content,
     CardItem,
     Icon,
     InputGroup,
     List,
     ListItem
} from 'native-base'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Card, CardSection, Input, Button, Spinner } from './common';


class MontirGetOrder extends Component {
     // static navigationOptions = {
     //   title: 'Order',
     //   headerTitleStyle: {
     //     color: '#fff',
     //     justifyContent: 'center',
     //     alignItems: 'center',
     //     fontSize: 28
     //   },
     //   headerStyle: {
     //     backgroundColor: '#f0a53d'
     //   }
     // }

     render() {
          const { navigate } = this.props.navigation
          return (
               <Container>
                  <Content>
                       <Card>
                            <List>
                                <CardSection>
                                   <Text>Customer Name : Simon Mignolet </Text>
                                </CardSection>
                                <CardSection>
                                   <Text>Car Merk : Toyota </Text>
                                </CardSection>
                                <CardSection>
                                   <Text>Car Type : Avanza </Text>
                                </CardSection>
                                <CardSection>
                                   <Text>Address : JL.Pondok Indah </Text>
                                </CardSection>
                                <CardSection>
                                   <Text>Car Problem</Text>
                                </CardSection>
                                <ListItem>
                                   <Text style={{ color: '#fe5621' }}>Mesin tidak bisa di stater</Text>
                                </ListItem>
                          </List>
                       </Card>
                         <Button block success  style={styles.AcceptOrder} onPress= { () => navigate('MontirReport')}>
                               <Text style={styles.TextStyle}> Accept </Text>
                         </Button>
                         <Button block danger style={styles.DeclineOrder}>
                              <Text style={styles.TextStyle}> Decline </Text>
                         </Button>
                  </Content>
                </Container>
          )
     }
}

const styles = {
     AcceptOrder : {
         borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
   },
   DeclineOrder : {
       borderWidth: 1,
      borderRadius: 10,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 50,
   },
   TextStyle: {
        fontSize : 20
   }
}

export default MontirGetOrder
