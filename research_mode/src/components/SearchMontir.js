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
import MyApp from './Maps'

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
         backgroundColor: '#f0a53d'
       }
     }

     render() {
          return (
               <Container>
                  <Content>
                         <Card>
                              <InputGroup borderType='rounded' >
                                <Icon name='ios-home' style={{color:'#384850'}}/>
                                <Input placeholder='Type your place here'/>
                              </InputGroup>
                              <CardItem style={{alignItems: 'center', height: 350}}>
                                   <MyApp />
                              </CardItem>

                              <Form>
                                <Item>
                                   <Input style={{ height: 100 }} placeholder="  Type your car problem here !! " />
                                </Item>
                              </Form>
                         </Card>
                              <Button block success style={styles.SearchMontir}>
                                    <Text style={styles.TextStyle}> Search Monthree Now </Text>
                              </Button>
                  </Content>
                </Container>
          )
     }
}

const styles = {
     SearchMontir : {
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

export default SearchMontir
