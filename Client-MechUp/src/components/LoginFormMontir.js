import React, { Component } from 'react';
import { Text } from 'react-native';

import { NavigationActions } from 'react-navigation'
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginFormMontir extends Component {

     static navigationOptions = {
       title: 'Login Form Montir',
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

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password });
  }

  renderButton() {
   const { navigate } = this.props.navigation
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={ () => navigate('MainMontir') }>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginFormMontir
