import React, { Component } from 'react'
import {
     Container,
     Header,
     Content,
     CardItem,
     Icon,
     InputGroup,
     List,
     Left,
     ListItem
} from 'native-base'
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, TextInput, Image } from 'react-native'
import Modal from 'react-native-simple-modal';

import { Card, CardSection, Button } from './common';
import { NavigationActions } from 'react-navigation'
const PetaJakarta = require('../images/petajakarta.jpg')


const Online = require('../images/online.png')

class MontirOnline extends Component {
     state = {
          open : true,
          order : true
     }

     static navigationOptions  =  {
       title: 'Montir Status',
     //   headerLeft: <Icon name="menu" onPress={ () => navigation.navigate("DrawerOpen")} />,
     //   headerRight: <Icon name="menu" onPress={ () => navigation.navigate("Login")} />,
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
                       <Button transparent onPress={ () => navigate("DrawerOpen")}>
                       <Icon name="menu" />
                       </Button>
                  </Left>
                       <Card>
                              <CardSection style={{alignItems: 'center', height: 350, paddingTop: 60}}>
                                   <Image style={{ resizeMode:"contain", flex: 1 }} source={Online}></Image>
                              </CardSection>
                              <CardSection>
                              <Text style={{ alignItems: 'center', fontSize: 20, marginLeft: 80}}>Status  : I am Online</Text>
                              </CardSection>
                       </Card>
                       <Button>
                              <Text style={ styles.styleText } onPress= { () => navigate('Login')}>Logout</Text>
                       </Button>
                  </Content>
                </Container>

               // <Container>
               //  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               //    <TouchableOpacity onPress={() => this.setState({open: true})}>
               //      <Text style={styles.styleText } >Detail Order Customer</Text>
               //    </TouchableOpacity>
               //    <Modal
               //      offset={this.state.offset}
               //      open={this.state.open}
               //      modalDidOpen={() => console.log('modal did open')}
               //      modalDidClose={() => this.setState({open: true })}
               //      style={{alignItems: 'center'}}>
               //      <View>
               //       <Card>
               //       <CardSection>
               //       <Text style={{fontSize: 20, marginBottom: 10}}>Detail Order Customer</Text>
               //       </CardSection>
               //       <CardSection>
               //       <Text> Customer Name :  John </Text>
               //       </CardSection>
               //       <CardSection>
               //       <Text> Car Merk :  Toyota</Text>
               //       </CardSection>
               //       <CardSection>
               //       <Text> Car Type : Avanza </Text>
               //       </CardSection>
               //       <CardSection>
               //       <Text> Direction : 2.5 km </Text>
               //       </CardSection>
               //       <CardSection style={{alignItems: 'center', height: 250}}>
               //            <Image style={{ resizeMode:"contain", flex: 1 }} source={PetaJakarta}></Image>
               //       </CardSection>
               //            <CardSection>
               //                 <Button onPress={() => this.setState({open: false})}>
               //                    Close
               //                 </Button>
               //            </CardSection>
               //       </Card>
               //      </View>
               //    </Modal>
               //  </View>
               //  </Container>


          )
     }
}

const styles = {
     styleText : {
          fontSize: 22
     }
}

export default MontirOnline
