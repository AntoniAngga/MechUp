import React, { Component } from 'react'
import {
     Container,
     Content,
     Form,
     Item,
     CardItem,
     Icon,
     Picker
} from 'native-base'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common';
import { NavigationActions } from 'react-navigation'

const Lamborgini = require('../images/lamborghini.jpg')

class AddCar extends Component {
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
       title: 'Car Customer',
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
          const { navigate } = this.props.navigation;
          return (
               <Container>
                  <Content>
                     <Card>
                         <CardSection>
                              <Text style={{ marginLeft: 20, fontSize:18, paddingTop:10 }}>Car Type</Text>
                              <Form style={{ flex:1,  flexDirection: 'column'}}>
                                   <Picker style={  styles.PickerStyle }
                                   iosHeader="Select one"
                                   mode="dropdown"
                                   selectedValue={this.state.selected1}
                                   onValueChange={this.onValueChange.bind(this)}
                                   >
                                   <Item style={{ fontSize: 18 }} label="Toyota" value="toyota" />
                                   <Item style={{ fontSize: 18 }} label="Daihatsu" value="daihatsu" />
                                   <Item style={{ fontSize: 18 }} label="Suzuki" value="suzuki" />
                                   <Item style={{ fontSize: 18 }} label="Honda" value="honda" />
                                   <Item style={{ fontSize: 18 }} label="BMW" value="bmw" />
                                   </Picker>
                              </Form>
                         </CardSection>
                              <CardSection>
                                <Input
                                  label="Model"
                                  placeholder="Car Model"
                                />
                              </CardSection>

                              <CardSection>
                                <Input
                                  label="Year"
                                  placeholder="2015"
                                />
                              </CardSection>

                                   <CardSection style={{alignItems: 'center', height: 250}}>
                                        <Image style={{ resizeMode:"contain", flex: 1 }} source={Lamborgini}></Image>
                              </CardSection>

                              <CardSection>
                                   <Button block success style={styles.AddCar} onPress={ () => navigate('SearchMontir') }>
                                         <Text style={styles.TextStyle }>Add Car</Text>
                                   </Button>
                              </CardSection>

                              </Card>

                  </Content>
                </Container>
          )
     }
}

const styles = {
     AddCar : {
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
        fontSize : 22
   },
   PickerStyle: {
        marginLeft: 18,
        alignItems: 'center',
        marginLeft: 30
   }
}

export default AddCar
