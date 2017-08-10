import React from 'react'
import { StackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'

import Login from './components/Login'
import AddCar from './components/AddCar'
import SearchMontir from './components/SearchMontir'
import MontirGetOrder from './components/MontirGetOrder'
import MontirReport from './components/MontirReport'

export default App = StackNavigator ({
     Login: { screen: Login }
     // AddCar: { screen: AddCar }
     // SearchMontir: { screen: SearchMontir }
     // MontirGetOrder : { screen: MontirGetOrder }
     // MontirReport: { screen: MontirReport }
})
