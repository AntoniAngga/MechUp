
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
          choosenMechanic: '',
          data_order: {}
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
       axios.get(server_url+'/api/order/mechanic/'+idLoggedMechanic[0].id_mechanic)
       .then( res => {
         axios.get(server_url+'/api/order/'+res.data[0].id)
         .then(result => {
           this.setState({data_order : result.data[0]});
           console.log(this.state.data_order)
         })
         .catch(err => {
           console.log(err)
         })
       })
       .catch(err => {
         console.log(err)
       })
     }

     onAccept () {
        const { navigate } = this.props.navigation;
        this.props.completeOrder(this.state.data_order);
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
                                   <Text>Customer Name : {this.state.data_order.cust_name} </Text>
                                </ListItem>
                                <ListItem itemDivider>
                                   <Text>Car Merk : {this.state.data_order.merek} </Text>
                                </ListItem>
                                <ListItem itemDivider>
                                   <Text>Car Type : {this.state.data_order.type} </Text>
                                </ListItem>
                                <ListItem itemDivider>
                                   <Text>Lokasi : {this.state.data_order.cust_address} </Text>
                                </ListItem>
                                {/* <ListItem itemDivider>
                                   <Text>Car Problem</Text>
                                </ListItem>
                                <ListItem>
                                   <Text>Mesin tidak bisa di stater</Text>
                                </ListItem> */}
                          </List>
                       </Card>
                         <Button block success  style={styles.AcceptOrder}
                          onPress= { 
                            () => this.onAccept() 
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