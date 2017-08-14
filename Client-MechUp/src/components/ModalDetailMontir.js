import React from 'react';
import Modal from 'react-native-simple-modal';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
const Petajakarta = require('../images/petajakarta.jpg')

export default class ModalDetailMontir extends React.Component {
  state = {open: true};

  static navigationOptions = {
   title: 'Montir Information ',
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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => this.setState({open: true})}>
        <Text style={styles.styleText } >Informasi Montir</Text>
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
          <Text style={{fontSize: 20, marginBottom: 10}}>Montir Information Detail!</Text>
          </CardSection>
          <CardSection>
          <Text> Name :  Montir Name </Text>
          </CardSection>
          <CardSection>
          <Text> Phone :  Phone Number</Text>
          </CardSection>
          <CardSection>
          <Text> Montir Potition : Jarak ( km ) </Text>
          </CardSection>
          <CardSection style={{alignItems: 'center', height: 250}}>
               <Image style={{ resizeMode:"contain", flex: 1 }} source={Petajakarta}></Image>
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
    );
  }
}

const styles = {
     styleText : {
          fontSize: 32,
          color : 'red'
     }
}
