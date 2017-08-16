import React from 'react';
import {
     Container,
     Content,
     CardItem,
     Icon,
     InputGroup,
     List,
     ListItem
} from 'native-base'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
const Petajakarta = require('../images/petajakarta.jpg')

export default class ModalDetailMontir extends React.Component {

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
     const { navigate } = this.props.navigation
    return (
         <Container>
         <Content>
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
                    <Button onPress={() => navigate ('ModalSearchMontir')}>
                      Close
                    </Button>
               </CardSection>
          </Card>
        </View>
    </Content>
    </Container>

    );
  }
}

const styles = {
     styleText : {
          fontSize: 32,
          color : 'red'
     }
}
