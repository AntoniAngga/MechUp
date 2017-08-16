import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ButtonAddCar = ({navigation}) => (
  <TouchableOpacity
    onPress = {() => navigation.navigate('AddCar')} >
    <Icon name="circle-with-plus" size={25} />
  </TouchableOpacity>
)


export default ButtonAddCar
