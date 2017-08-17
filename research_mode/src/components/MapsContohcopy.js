import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux'
import MapView, { MAP_TYPES } from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import firebase from '../config/FirebaseConfig'
import {idLoggedMechanic, server_url} from '../actions'

const { width, height } = Dimensions.get('window');


const ASPECT_RATIO = width / height;
const LATITUDE = -6.26004;
const LONGITUDE = 106.77899833333335;
const LATITUDE_DELTA = 0.0102;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 1;

let defaultLatlng = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
}


class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      statusBarHeight: '',
      markers: [{
        coordinate: {
          latitude: LATITUDE,
          longitude: LONGITUDE
        },
        key: '0'
      }],
      coords: [],
      data_order: {}
    };
  }
  
  async getDirections(startLoc, destinationLoc) {
    console.log(startLoc, destinationLoc, 'asdasdasvvvv');
        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
            let respJson = await resp.json();
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                }
            })
            this.setState({coords: coords})
            console.log(coords);
            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }
  
  componentWillMount() {
    firebase.database().ref('mechanic_'+idLoggedMechanic[0].id_mechanic+'/order_id')
    .once('value', snapshot => {
      axios.get(server_url+'/api/order/'+snapshot._value)
      .then(res => {
          this.setState({data_order : res.data})
          this.beforeDirection()
          console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
    })
  }
  
  componentWillReceiveProps() {
    this.forceUpdate()
  }
  
  async onSearch(query) {
   try {
     axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query.split(' ').join('+')}&types=geocode&key=AIzaSyAWVI-l_DAkRvP_IV-4NU2lIR0IAjLzeq8`)
      .then(place => {
        console.log(place.data);
        return place.data
      })
    } catch(error) {
        alert(error)
        return error
    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  randomRegion() {
    return {
      ...this.state.region,
      ...this.randomCoordinate(),
    };
  }
  
  beforeDirection() {
    this.getDirectionsMaps(`${this.state.data_order[0].lat_mech},${this.state.data_order[0].long_mech}`, `${this.state.data_order[0].lat_cust},${this.state.data_order[0].long_cust}`)
  }
  
  getDirectionsMaps(origin, destination) {  
    this.getDirections(origin, destination)
  }

  render() {
    console.log(this.state,'asdfgasdfgd');
    return (
    this.state.data_order !== {} ?
    <View style={styles.container}>
        <TextInput 
        style={styles.inputs}
        placeholder="Type here to translate!"
        onChangeText={(query) => this.onSearch(query)}
        />
        <MapView
          provider={this.props.provider}
          ref={ref => { this.map = ref; }}
          mapType={MAP_TYPES.TERRAIN}
          style={styles.map}
          initialRegion={this.state.region}>

          <MapView.Marker
          coordinate={(this.props.data_order) ? {latitude: this.props.data_order[0].lat_cust, longitude: this.props.data_order[0].lat_mech} : {latitude: LATITUDE, longitude: LONGITUDE}}
          draggable
        />

        <MapView.Marker
          coordinate={(this.props.data_order) ? {latitude: this.props.data_order[0].lat_mech, longitude: this.props.data_order[0].long_mech} : {latitude: LATITUDE, longitude: LONGITUDE}}
          draggable
        />

          <MapView.Polyline 
              coordinates={this.state.coords}
              strokeWidth={2}
              strokeColor="black"/>
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.beforeDirection()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>get direction</Text>
          </TouchableOpacity>
        </View>
      </View> : null
    ); 
  }
}

MyApp.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  inputs: {
    width: 240, 
    marginTop: height*2/3,
    backgroundColor: 'blue' 
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 100,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  buttonText: {
    textAlign: 'center',
  },
});



const mapStateToProps = (state) => {
  return {
    mapping: state.orderReducers.data_order
  }
}

export default connect(mapStateToProps, null)(MyApp)