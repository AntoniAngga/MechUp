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
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

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

export default MontirOnline
