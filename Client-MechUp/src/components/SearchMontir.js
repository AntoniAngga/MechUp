import React, { Component } from 'react'
import {
     Container,
     Content,
     Form,
     Item,
     CardItem,
     Icon,
     Input,
     InputGroup
} from 'native-base'
import { StyleSheet, ScrollView, View, Text, TextInput, Image, Picker, PickerItem } from 'react-native'
import { Card, CardSection, Button } from './common';
import { NavigationActions } from 'react-navigation'

const Petajakarta = require('../images/petajakarta.jpg')

class SearchMontir extends Component {
     constructor(props) {
          super(props)
     }
     static navigationOptions = {
       title: 'Search Montir',
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
                         <Card>
                         
                         <CardSection>
                           <Input
                             placeholder="Type your place here"
                           />
                         </CardSection>
                              <CardSection style={{alignItems: 'center', height: 300}}>
                                   <Image style={{ resizeMode:"contain", flex: 1 }} source={Petajakarta}></Image>
                              </CardSection>
                              <CardSection>
                                <Input
                                  placeholder="Type your car problem here !!"
                                />
                              </CardSection>
                              <CardSection>
                                   <Button block success style={styles.SearchMontir} onPress={ () => navigate('ModalSearchMontir') }>
                                         <Text style={styles.TextStyle}> Search Montir Now </Text>
                                   </Button>
                              </CardSection>
                              </Card>
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
        fontSize : 18
   }
}

export default SearchMontir
