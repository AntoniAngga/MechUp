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
     static navigationOptions = {
       title: 'Car Customer',
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
                                   <CardItem style={{alignItems: 'center', height: 250}}>
                                        <Image style={{ resizeMode:"contain", flex: 1 }} source={Lamborgini}></Image>
                                   </CardItem>
                              </Card>
                              <Button block success style={styles.AddCar} onPress={ () => navigate('SearchMontir') }>
                                    <Text style={styles.TextStyle }>Add Car</Text>
                              </Button>
                  </Content>
                </Container>
          )
     }
}

const styles = {
     AddCar : {
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

export default AddCar
