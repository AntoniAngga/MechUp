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
const LATITUDE2 = -6.26004;
const LONGITUDE2 = 106.77899833333335;
const LATITUDE = -6.26004;
const LONGITUDE = 106.77899833333335;
const LATITUDE_DELTA = 0.0102;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 1;


class MontirMap extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude:LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      region2: {
        latitude: LATITUDE2,
        longitude: LONGITUDE2,
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
  

  componentDidMount () {
    let originLatitude = this.props.orderData.lat_mech
    let originLongitude = this.props.orderData.long_mech
    let targetLatitude = this.props.orderData.lat_cust
    let targetLongitude = this.props.orderData.long_cust
    console.log(this.props, '----------------------mamama');
    this.setState({
      region2: {
        latitude: +targetLatitude,
        longitude: +targetLongitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    })
    this.setState({
      region: {
        latitude: +originLatitude,
        longitude: +originLongitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    })
    this.getDirectionsMaps(`${this.props.orderData.lat_mech},${this.props.orderData.long_mech}`, `${this.props.orderData.lat_cust},${this.props.orderData.long_cust}`)    
    
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

  // componentWillReceiveProps() {
  //   let originLatitude = this.props.orderData.lat_mech
  //   let originLongitude = this.props.orderData.long_mech
  //   let targetLatitude = this.props.orderData.lat_cust
  //   let targetLongitude = this.props.orderData.long_cust

  //   this.setState({
  //     region: {
  //       latitude: originLatitude,
  //       longitude: originLongitude,
  //       latitudeDelta: LATITUDE_DELTA,
  //       longitudeDelta: LONGITUDE_DELTA,
  //     }
  //   })
  //   this.setState({
  //     region2: {
  //       latitude: targetLatitude,
  //       longitude: targetLongitude,
  //       latitudeDelta: LATITUDE_DELTA,
  //       longitudeDelta: LONGITUDE_DELTA,
  //     }
  //   })
  // }
  
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

        <MapView.Marker
          coordinate={this.state.region}
          draggable
        />

        <MapView.Marker
          coordinate={this.state.region2}
          draggable
        />
       
        {/* <MapView.Marker
        coordinate={{
         latitude: +this.props.mapping.final.lat_cust,
         longitude: +this.props.mapping.final.long_cust
        }}
      />
           <MapView.Marker
             coordinate={{
              latitude: +this.props.mapping.final.lat_mech,
              longitude: +this.props.mapping.final.long_mech
             }}
           /> */}

        <MapView.Polyline 
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="black"/>
      </MapView>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={(origin, destination) => this.getDirectionsMaps(`${this.props.mapping.final.lat_mech},${this.props.mapping.final.long_mech}`, `${this.props.mapping.final.lat_cust},${this.props.mapping.final.long_cust}`)}
          style={[styles.bubble, styles.button]}
        >
          <Text style={styles.buttonText}>get direction</Text>
        </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

MontirMap.propTypes = {
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
    orderData: state.orderReducers.current_order
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MontirMap)