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


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      region: {
        latitude: +this.props.mapping.final.lat_mech || LATITUDE,
        longitude: +this.props.mapping.final.long_mech || LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      statusBarHeight: '',
      markers: [],
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
            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }
  
  componentDidMount() {
    let latitudeMech = +this.props.mapping.final.lat_mech
    let latitudeCust = +this.props.mapping.final.lat_cust
    let longitudeMech = +this.props.mapping.final.long_mech
    let longitudeCust = +this.props.mapping.final.long_cust
    this.state.markers.push({
      coordinate: {
      latitude: +latitudeMech,
      longitude: +longitudeMech
    },
      key: null})
    
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: {
            latitude: +latitudeCust,
            longitude: +longitudeCust
          },
          key: `${id++}`,
        },
      ],
    });
    // this.getDirectionsMaps(`${this.props.mapping.final1.lat_mech},${this.props.mapping.final1.long_mech}`, `${this.props.mapping.final1.lat_cust},${this.props.mapping.final1.long_cust}`)
    console.log(this.state.markers, 'ini markers');
  }
  
  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: `${id++}`,
        },
      ],
    });
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
  
  getDirectionsMaps(origin, destination) {
    this.getDirections(origin, destination)
  }

  render() {
    console.log(this.state.region, 'ini regionnya');
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => { this.map = ref; }}
          mapType={MAP_TYPES.TERRAIN}
          style={styles.map}
          initialRegion={this.state.region}
        >
        {
        //   this.state.markers.map(marker => (
        //   <MapView.Marker
        //     title={marker.key}
        //     key={marker.key}
        //     coordinate={marker.coordinate}
        //   />
        // ))
      }
        <MapView.Polyline 
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="black"/>
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={(origin, destination) => this.getDirectionsMaps(`${this.state.markers[0].coordinate.latitude},${this.state.markers[0].coordinate.longitude}`, `${this.state.markers[1].coordinate.latitude},${this.state.markers[1].coordinate.longitude}`)}
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