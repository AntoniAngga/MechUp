import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { View, Text } from 'react-native'

import Login from './components/Login'
import AddCar from './components/AddCar'
import SearchMontir from './components/SearchMontir'
import MontirOnline from './components/MontirOnline'
import MontirGetOrder from './components/MontirGetOrder'
import MontirReport from './components/MontirReport'
import LoginFormCustomer from './components/LoginFormCustomer'
import LoginFormMontir from './components/LoginFormMontir'
import RegisterFormCustomer from './components/RegisterFormCustomer'
import ModalSearchMontir from './components/ModalSearchMontir'
import ModalDetailMontir from './components/ModalDetailMontir'

const MainCustomer = DrawerNavigator({
     Customer: { screen: AddCar },
     SearchMontir: { screen: SearchMontir }
   }, {
     initialRouteName: 'Customer',
     headerMode: 'screen'
})

const MainMontir = DrawerNavigator({
     DasboardMontir: { screen: MontirOnline },
     MontirGetOrder: { screen: MontirGetOrder },
     MontirReport: { screen: MontirReport }
   },
   {
     initialRouteName: 'DasboardMontir',
     headerMode: 'none'
})

export default App = StackNavigator ({
     Login: { screen: Login },
     LoginFormCustomer: {screen: LoginFormCustomer },
     LoginFormMontir: {screen: LoginFormMontir },
     RegisterFormCustomer: {screen: RegisterFormCustomer },
     MainCustomer: { screen: MainCustomer },
     AddCar: { screen: AddCar },
     SearchMontir: { screen: SearchMontir },
     MainMontir: { screen : MainMontir },
     MontirGetOrder : { screen: MontirGetOrder },
     MontirReport: { screen: MontirReport },
     ModalSearchMontir: { screen: ModalSearchMontir },
     ModalDetailMontir: { screen: ModalDetailMontir }
})
