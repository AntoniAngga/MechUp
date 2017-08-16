import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { login_mechanic} from '../actions';

class LoginForm extends Component {
  constructor(props) {
     super(props)
     this.state = {
       username: '',
       password: ''
     }
  }

  static navigationOptions = {
     title: 'Form Login Montir',
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

   onUsernameChange(input) {
     this.setState({'username': input})
   }

   onPasswordChange(input) {
     this.setState({'password': input});
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
      <Button onPress={ (input) => {this.props.do_login(this.state) }}>
        Login
      </Button>
    );
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Username"
            placeholder="username"
            onChangeText={(e) => this.onUsernameChange(e)}
            value={this.props.username}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={e =>this.onPasswordChange(e)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    do_login: (input) => {
      dispatch(login_mechanic(input))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    mapping: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
