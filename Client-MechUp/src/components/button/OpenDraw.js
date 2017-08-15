import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const OpenDraw = ({navigation}) => (
  <TouchableOpacity
    onPress = {() => navigation.navigate('DrawerOpen')} >
    <Icon name="navicon" size={25} style={styles.OpenDraw} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  OpenDraw: {
   paddingLeft: 10
  }
 })

export default OpenDraw
