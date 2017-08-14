import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { NavigationActions } from 'react-navigation'

import {
     Form,
     Item
} from 'native-base'
import { Card, CardSection, Input, Button } from './common';

class RegisterFormCustomer extends Component {
     constructor(props) {
       super(props);
       this.state = {
         selected1: "toyota"
       };
     }
     onValueChange(value: string) {
       this.setState({
         selected1: value
       });
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
            onChangeText={value => this.props.CustomerUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
             <Text style={{ marginLeft: 20, fontSize:18, paddingTop:10 }}>Gender</Text>
             <Form style={{ flex:1,  flexDirection: 'column', marginLeft: 40 }}>
                  <Picker style={  styles.PickerStyle }
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.selected1}
                  onValueChange={this.onValueChange.bind(this)}
                  >
                  <Item style={{ fontSize: 18 }} label="Male" value="male" />
                  <Item style={{ fontSize: 18 }} label="Femala" value="female" />
                  </Picker>
             </Form>
        </CardSection>

        <CardSection>
          <Input
            label="Gender"
            placeholder="Perempuan"
            value={this.props.gender}
            onChangeText={value => this.props.CustomerUpdate({ prop: 'gender', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Username"
            placeholder="Username"
            value={this.props.username}
            onChangeText={value => this.props.CustomerUpdate({ prop: 'username', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            value={this.props.password}
            onChangeText={value => this.props.CustomerUpdate({ prop: 'password', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Alamat"
            placeholder="Alamat"
            value={this.props.alamat}
            onChangeText={value => this.props.CustomerUpdate({ prop: 'alamat', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.CustomerUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
        <Button onPress={ () => navigate('LoginFormCustomer') }>
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

export default RegisterFormCustomer
