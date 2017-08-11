import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Card, CardItem  } from 'native-base'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
const Mechanic = require('../images/photo.png')

class Login extends Component {
     constructor(props) {
          super(props)
     }

     static navigationOptions = {
       title: 'Welcome MechUp',
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
          const { navigate } = this.props.navigation;
          return (
               <Container>
                  <Content>
                  <Card>
                       <CardItem style={{alignItems: 'center', height: 250}}>
                            <Image style={{ resizeMode:"contain", flex: 1 ,  marginTop: 15 }} source={Mechanic}></Image>
                       </CardItem>
                  </Card>
                      <Button block success style={styles.LoginCustomer} onPress={ () => navigate('MainCustomer') }><Text style={styles.textStyle}> Customer </Text></Button>
                      <Button block warning style={styles.LoginMontir} onPress={ () => navigate('MainMontir') }><Text style={styles.textStyle}> Montir </Text></Button>
                  </Content>
                </Container>
          )
     }
}


const styles = {
  textStyle: {
    fontSize: 22
  },
  LoginCustomer:{
     marginTop: 55,
     borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  LoginMontir: {
       borderWidth: 1,
      borderRadius: 6,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 30
  }
};

export default Login
