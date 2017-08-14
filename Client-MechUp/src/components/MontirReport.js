import React, { Component } from 'react'
import {
     Container,
     Content,
     CardItem,
     List,
     ListItem
} from 'native-base'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Modal from 'react-native-simple-modal';

import { Card, CardSection, Input, Button } from './common';

const PetaJakarta = require('../images/petajakarta.jpg')

class MontirReport extends Component {
     state = {
          open : true
     }
     static navigationOptions = {
       title: 'Report Montir ',
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
               // <Container>
               //    <Content>
               //     <Card>
               //         <List>
               //        <ListItem itemDivider>
               //           <Text>Customer Name : Simon Mignolet </Text>
               //        </ListItem>
               //        <ListItem itemDivider>
               //           <Text>Car Merk : Toyota </Text>
               //        </ListItem>
               //        <ListItem itemDivider>
               //           <Text>Car Type : Avanza </Text>
               //        </ListItem>
               //        <ListItem itemDivider>
               //           <Text>Lokasi : JL.Pondok Indah </Text>
               //        </ListItem>
               //        <ListItem itemDivider>
               //           <Text>Car Problem</Text>
               //        </ListItem>
               //        <ListItem>
               //           <Text>Mesin tidak bisa di stater</Text>
               //        </ListItem>
               //       </List>
               //            <CardItem style={{alignItems: 'center', height: 180}}>
               //                 <Image style={{ resizeMode:"contain", flex: 1 }} source={PetaJakarta}></Image>
               //            </CardItem>
               //       </Card>
               //           <Button block success>
               //                 <Text> Finish </Text>
               //           </Button>
               //    </Content>





                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => this.setState({open: true})}>
                    <Text style={styles.styleText } >Detail Order Customer</Text>
                  </TouchableOpacity>
                  <Modal
                    offset={this.state.offset}
                    open={this.state.open}
                    modalDidOpen={() => console.log('modal did open')}
                    modalDidClose={() => this.setState({open: false })}
                    style={{alignItems: 'center'}}>
                    <View>
                      <Card>
                      <CardSection>
                      <Text style={{fontSize: 20, marginBottom: 10}}>Detail Order Customer</Text>
                      </CardSection>
                      <CardSection>
                      <Text> Customer Name :  John </Text>
                      </CardSection>
                      <CardSection>
                      <Text> Car Merk :  Toyota</Text>
                      </CardSection>
                      <CardSection>
                      <Text> Car Type : Avanza </Text>
                      </CardSection>
                      <CardSection>
                      <Text> Direction : 2.5 km </Text>
                      </CardSection>
                      <CardSection style={{alignItems: 'center', height: 250}}>
                           <Image style={{ resizeMode:"contain", flex: 1 }} source={PetaJakarta}></Image>
                      </CardSection>
                           <CardSection>
                                <Button onPress={() => this.setState({open: false})}>
                                  Close
                                </Button>
                           </CardSection>
                      </Card>
                    </View>
                  </Modal>
                </View>

               //  </Container>
          )
     }
}

const styles = {
     styleText : {
          fontSize: 32,
          color : 'red'
     }
  }
export default MontirReport
