import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { register_customer } from '../actions'
import { Card, CardSection, Input, Button } from './common';

class RegisterForm extends Component {
    constructor(props) {
       super(props)
       this.state = {
         name: '',
         gender: '',
         username:'',
         password: '',
         address: '',
         phone_number: ''
       }
    }
    static navigationOptions = {
       title: 'Register Customer',
       headerTitleStyle: {
         color: '#fff',
         justifyContent: 'center',
         alignItems: 'center',
         fontSize: 28
       },
       headerStyle: {
         backgroundColor: '#00897b'
       }
     }
     
     onNameChange(input) {
       this.setState({'name': input})
     }
     
     onGenderChange(input){
       this.setState({'gender': input})
     }
     
     onUsernameChange(input){
       this.setState({'username': input})
     }
     
     onEmailChange(input){
       this.setState({'email' : input})
     }
     
     onPasswordChange(input){
       this.setState({'password': input})
     }
     
     onAddressChange(input){
       this.setState({'address': input})
     }
     
     onPhone_numberChange(input){
       this.setState({'phone_number': input})
     }
     
  render() {
       const { navigate } = this.props.navigation;
    return (
      <View>
      <Card>
        <CardSection>
          <Input
            label="Nama"
            placeholder="Nama"
            value={this.props.name}
            onChangeText= { (e) => this.onNameChange(e) }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Gender"
            placeholder="Perempuan"
            value={this.props.gender}
            onChangeText={(e) => this.onGenderChange(e)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Username"
            placeholder="Username"
            value={this.props.username}
            onChangeText={(e) => this.onUsernameChange(e)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            value={this.props.password}
            onChangeText={(e) => this.onPasswordChange(e)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Address"
            placeholder="Address"
            value={this.props.address}
            onChangeText={(e) => this.onAddressChange(e)}
          />
        </CardSection>
        
        <CardSection>
          <Input
            label="Email"
            placeholder="andrew@gmail.com"
            value={this.props.email}
            onChangeText={(e) => this.onEmailChange(e)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={(e) => this.onPhone_numberChange(e)}
          />
        </CardSection>

        <CardSection>
        <Button onPress={ (input) => {this.props.register(this.state) }}>
          Register
        </Button>
        </CardSection>

       </Card>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (input) => {
      dispatch(register_customer(input))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    mapping: state
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
