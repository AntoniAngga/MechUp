import React, { Component } from 'react'
import {
     Container,
     Content,
     Form,
     Item,
     Input,
     Button,
     Card,
     CardItem,
     Icon,
     InputGroup
} from 'native-base'
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const Petajakarta = require('../images/petajakarta.jpg')
import MyApp from './Maps'
import MapsContoh from './MapsContoh'
import { 
  getCostumerFromDB,
  searchMontir,
  addOrder 
} from '../actions'


class SearchMontir extends Component {
  constructor(props) {
      super(props)
      this.state = {
        searchingMontir: '',
        position: ''
      }
  }
  static navigationOptions = {
   title: 'Need Help',
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
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let costumerPos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.setState({position: costumerPos})
        console.log(this.state, 'coba liat state');
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 1000 },
    );
    this.props.getCostumerFromDB(3)
  }
  
  onSeachPress(data) {
    this.props.addOrder(data)
  }
  
  render() {
    return (
     <Container>
        <Content>
          <Card>
            <InputGroup borderType='rounded' >
              <Icon name='ios-home' style={{color:'#384850'}}/>
              <Input placeholder='Type your place here'/>
            </InputGroup>
            <CardItem style={{alignItems: 'center', height: 350}}>
                 <MyApp />
            </CardItem>

            <Form>
              <Item>
                 <Input style={{ height: 100 }} placeholder="  Type your car problem here !! " />
              </Item>
            </Form>
          </Card>
          <Button block success style={styles.SearchMontir}
            onPress= {
              (data, dataSearch) => this.onSeachPress({
                id_customer: 3,
                id_vehicle: 1,
                status: 'open',
              })
              //muncul modal loading
            }
          >
                <Text style={styles.TextStyle}> Search Monthree Now </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = {
     SearchMontir : {
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
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCostumerFromDB: (costumerId) => dispatch(getCostumerFromDB(costumerId)),
    addOrder: (data) => dispatch(addOrder(data))
  }
}

const mapStateToProps = (state) => {
  return {
    oneMontirData: state.customerReducers.data_customers,
    orderData: state.orderReducers.data_order
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMontir)
