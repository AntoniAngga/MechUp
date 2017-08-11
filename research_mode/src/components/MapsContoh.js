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
            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }
  
  componentDidMount() {
    console.log('sasdasd');
    navigator.geolocation.watchPosition((position) => {
      console.log(position.coords);
        let tes = this.state.markers.shift()
        // this.setState({markers: tes})
        console.log(tes, 'setelah drop', this.state.markers);
        this.state.markers.push({
          coordinate: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          key: '0'
        })
    })
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
          onPress={(e) => this.onMapPress(e)}
          
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              title={marker.key}
              key={marker.key}
              coordinate={marker.coordinate}
              draggable
            />
          ))}
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

module.exports = MyApp;