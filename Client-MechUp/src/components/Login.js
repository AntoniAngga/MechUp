import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Card, CardItem  } from 'native-base'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
const Mechanic = require('../images/mechanic.jpg')

class Login extends Component {
     constructor(props) {
          super(props)
     }

     render() {
          return (
               <Container>
                  <Content>
                  <Card>
                       <CardItem style={{alignItems: 'center', height: 250}}>
                            <Image style={{ resizeMode:"contain", flex: 1 }} source={Mechanic}></Image>
                       </CardItem>
                  </Card>
                      <Button block success style={styles.LoginCustomer}><Text> Customer </Text></Button>
                      <Button block warning style={styles.LoginMontir}><Text> Montir </Text></Button>
                  </Content>
                </Container>
          )
     }
}


const styles = {
  titleStyle: {
    fontSize: 21,
    paddingLeft: 20
  },
  LoginCustomer:{
     marginTop: 55,
     margin: 20
  },
  LoginMontir: {
    margin: 20
  }
};

export default Login
