
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
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import axios from 'axios'

import firebase from '../config/FirebaseConfig'
import { completeOrder, idLoggedMechanic, server_url } from '../actions'

class MontirGetOrder extends Component {  
      constructor() {
        super()
        this.state= {
          choosenMechanic: ''
        }
      }
      
     static navigationOptions = {
       title: 'Need to Repair',
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
         axios.get(server_url+'/api/mechanic/'+idLoggedMechanic[0].id_mechanic)
         .then( res => {
           this.setState({'choosenMechanic': res.data})
           console.log(this.state.choosenMechanic, 'ini choosenMechanic');
           firebase.database()
           .ref(`order/orderID:${this.state.choosenMechanic.id}/status`)
           .on('value', (snapshot) => {
             console.log('inside snapshot', snapshot.val());
           })
         })
         .catch( err => {
           console.log(err);
         })
     }

     onAccept (input) {
        const { navigate } = this.props.navigation;
        this.props.completeOrder(input);
        navigate('MontirReport')
     }

     render() {
          const { navigate } = this.props.navigation
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
                       </Card>
                         <Button block success  style={styles.AcceptOrder}
                          onPress= { 
                            (input) => this.onAccept(this.state.choosenMechanic) 
                          }>
                               <Text style={styles.TextStyle}> Accept </Text>
                         </Button>
                         <Button block danger style={styles.DeclineOrder}
                          onPress= {navigate('MontirOnline')}
                         >
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
      marginTop: 20,
   },
   TextStyle: {
        fontSize : 22
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completeOrder: (input) => {
      dispatch(completeOrder(input))
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'ini state');
  return {
    mapping: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MontirGetOrder)