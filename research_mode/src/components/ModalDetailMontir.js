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
import MyApp from './CostumerMap'
import { connect } from 'react-redux'
const Petajakarta = require('../images/petajakarta.jpg')

class ModalDetailMontir extends React.Component {

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
          <Text> Name :  {this.props.orderData.mech_name} </Text>
          </CardSection>
          <CardSection>
          <Text> Phone : {this.props.orderData.mech_phone_number}</Text>
          </CardSection>
          <CardItem style={{alignItems: 'center', height: 350}}>
            <MyApp />
          </CardItem>
               <CardSection>
                    <Button onPress={() => navigate ('MainMontir')}>
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

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const mapStateToProps = (state) => {
  return {
    orderData: state.orderReducers.current_order
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDetailMontir)