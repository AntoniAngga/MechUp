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
     Icon
} from 'native-base'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

const Lamborgini = require('../images/lamborghini.jpg')

class AddCar extends Component {
     constructor(props) {
          super(props)
     }

     render() {
          return (
               <Container>
                  <Content>

                              <Form>
                                <Item>
                                <Text>Merk</Text>
                                   <Input placeholder="  Toyota " />
                                </Item>
                                <Item last>
                                 <Text>Model</Text>
                                    <Input placeholder="  Avanza " />
                                </Item>
                                <Item last>
                                <Text>Tahun Pembuatan</Text>
                                   <Input placeholder=" 2015 " />
                                </Item>

                              </Form>
                              <Card>
                                   <CardItem style={{alignItems: 'center', height: 250}}>
                                        <Image style={{ resizeMode:"contain", flex: 1 }} source={Lamborgini}></Image>
                                   </CardItem>
                              </Card>
                              <Button block success>
                                    <Text>Add Car</Text>
                              </Button>
                  </Content>
                </Container>
          )
     }
}

export default AddCar
