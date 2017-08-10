import React, { Component } from 'react'
import {
     Container,
     Content,
     Form,
     Item,
     Input,
     Button,
     Card,
     CardItem,
     Icon,
     InputGroup
} from 'native-base'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

const Petajakarta = require('../images/petajakarta.jpg')

class SearchMontir extends Component {
     constructor(props) {
          super(props)
     }
     static navigationOptions = {
       title: 'Need Help',
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
          return (
               <Container>
                  <Content>
                         <InputGroup borderType='rounded' >
                           <Icon name='ios-home' style={{color:'#384850'}}/>
                           <Input placeholder='Type your place here'/>
                         </InputGroup>
                              <Card>
                                   <CardItem style={{alignItems: 'center', height: 250}}>
                                        <Image style={{ resizeMode:"contain", flex: 1 }} source={Petajakarta}></Image>
                                   </CardItem>
                              </Card>
                              <Form>
                                <Item>
                                   <Input style={{ height: 150 }} placeholder="  Type your car problem here !! " />
                                </Item>
                              </Form>
                              <Button block success>
                                    <Text> Search Monthree Now </Text>
                              </Button>
                  </Content>
                </Container>
          )
     }
}

export default SearchMontir
