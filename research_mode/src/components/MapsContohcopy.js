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
import _ from 'lodash'

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
      coords: []
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
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
        let tes = this.state.markers.shift()
        // this.setState({markers: tes})
        console.log(tes, 'setelah drop', this.state.markers);
        this.state.markers.push({
          coordinate: {
            latitude: this.props.mapping.final.lat_mech,
            longitude: this.props.mapping.final.long_mech
          },
          key: '0'
        })
    })
  }
  
  componentDidMount() {
    console.log(this.props, 'ini props');
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: {
            latitude: this.props.mapping.final.lat_cust,
            longitude: this.props.mapping.final.long_cust
          },
          key: `${id++}`,
        },
      ],
    });
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
    this.state.markers.shift()
    // this.setState({markers: tes})
    this.state.markers.push({
      coordinate: {
        latitude: this.props.mapping.final.lat_mech,
        longitude: this.props.mapping.final.long_mech
      },
      key: '0'
    })
    
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: {
            latitude: this.props.mapping.final.lat_cust,
            longitude: this.props.mapping.final.long_cust
          },
          key: `${id++}`,
        },
      ],
    },() => {
      this.getDirectionsMaps(`${this.state.markers[1].coordinate.latitude},${this.state.markers[1].coordinate.longitude}`, `${this.state.markers[2].coordinate.latitude},${this.state.markers[2].coordinate.longitude}`)
    });
  }
  
  getDirectionsMaps(origin, destination) {  
    this.getDirections(origin, destination)
  }

  render() {
    console.log(this.state.markers,'asdfgasdfgd');
    return (
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
          initialRegion={this.state.region}
          onRegionChange={region => this.onRegionChange(region)}
          
        >
            { 
              // (this.state.markers !== undefined) ? 
              // return (
              //   <MapView.Marker
              //   title={this.state.markers}
              //   key={this.state.markers[1].key || id}
              //   coordinate={this.state.markers[1].coordinate || defaultLatlng}
              //   draggable
              // />
              // 
              // <MapView.Marker
              //   title={this.state.markers[2].key || ''}
              //   key={this.state.markers[2].key || id}
              //   coordinate={this.state.markers[2].coordinate || defaultLatlng}
              //   draggable
              // />
              // )
              // : null        
          }
            
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
      </View>
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

const mapDispatchToProps = (dispatch) => {
  return {
    completeOrder: (input) => {
      dispatch(completeOrder(input))
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'ini state');
  return {
    mapping: state.orderReducers.data_order
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp)