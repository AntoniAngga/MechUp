import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
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
import DrawerContent from './components/DrawerContent'
import { color } from './components/styles'


import OpenDraw from './components/button/OpenDraw'

const MainCustomer = DrawerNavigator({
     DashboardCustomer: {
       screen: SearchMontir,
        navigationOptions: ({navigation}) => ({
         headerLeft: <OpenDraw navigation = {navigation} />,
         title: 'Search Montir',
         drawerIcon: ({ tintColor }) => (
           <Icon
            name="search"
            size={20}
            style={{color: tintColor}} />
       ),
         headerStyle: {
           backgroundColor: '#f0a53d',
         },
         headerTitleStyle: {
           color: '#fff',
           fontSize: 28
         },
       })
     },
     AddCarCustomer: {
          screen: AddCar,
          navigationOptions: ({ navigation }) => ({
               title: ' Add Car Customer',
               drawerIcon: ({ tintColor }) => (
                 <Icon
                  name="plus-circle"
                  size={20}
                  style={{color: tintColor}} />
            ),
          })
     },
     DetailMontir: {
          screen: ModalDetailMontir,
          navigationOptions: ({ navigation }) => ({
               title: ' Montir Profil',
               drawerIcon: ({ tintColor }) => (
                 <Icon
                  name="user"
                  size={20}
                  style={{color: tintColor}} />
             ),
          })
      },

     LogOut : {
          screen: Login,
          navigationOptions: ({ navigation }) => ({
               title: ' Log Out',
               drawerIcon: ({ tintColor }) => (
                 <Icon
                  name="power-off"
                  size={20}
                  style={{color: tintColor}} />
             ),
          })
     }
   }, {
     initialRouteName: 'DashboardCustomer',
     headerMode: 'screen'
},
{
  contentOptions: {
    activeTintColor: color.lightOrange,
    activeBackgroundColor: color.black,
    inactiveTintColor: color.black,
    inactiveBackgroundColor: color.lightOrange,
  },
  contentComponent: props => <DrawerContent {...props} />
}
)

const MainMontir = DrawerNavigator({
     DasboardMontir: {
       screen: MontirOnline,
        navigationOptions: ({navigation}) => ({
         headerLeft: <OpenDraw navigation = {navigation} />,
         title: 'Dashboard Montir',
         drawerIcon: ({ tintColor }) => (
           <Icon
            name="home"
            size={20}
            style={{color: tintColor}} />
       ),
         headerStyle: {
           backgroundColor: '#f0a53d',
         },
         headerTitleStyle: {
           color: '#fff',
           fontSize: 28
         },
       })
     },
     MontirGetOrder: {
       screen: MontirGetOrder,
       navigationOptions: () => ({
         title: 'Order',
         drawerIcon: ({ tintColor }) => (
           <Icon
            name="gift"
            size={20}
            style={{color: tintColor}} />
       ),
         headerStyle: {
           backgroundColor: '#f0a53d',
         },
         headerTitleStyle: {
           color: '#fff',
           fontSize: 28
         },
       })
     },
     // MontirGetOrder: { screen: MontirGetOrder },
     MontirReport: {
          screen: MontirReport  ,
          navigationOptions: () => ({
            title: 'Report Montir',
            drawerIcon: ({ tintColor }) => (
              <Icon
               name="check-circle"
               size={20}
               style={{color: tintColor}} />
          ),
            headerStyle: {
              backgroundColor: '#f0a53d',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 28
            },
          })

     }
   },
   {
     initialRouteName: 'DasboardMontir',
     headerMode: 'screen'
// },
// {
//   contentOptions: {
//     activeTintColor: color.lightOrange,
//     activeBackgroundColor: color.black,
//     inactiveTintColor: color.black,
//     inactiveBackgroundColor: color.lightOrange,
//   },
//   contentComponent: props => <DrawerContent {...props} />,
})

export default App = StackNavigator ({
     Login: { screen: Login },
     RegisterFormCustomer: {screen: RegisterFormCustomer },
     LoginFormCustomer: {screen: LoginFormCustomer },
     LoginFormMontir: {screen: LoginFormMontir },
     MainCustomer: { screen: MainCustomer },
     AddCar: { screen: AddCar },
     SearchMontir: { screen: SearchMontir },
     MainMontir: { screen : MainMontir },
     MontirGetOrder : { screen: MontirGetOrder },
     MontirReport: { screen: MontirReport },
     ModalSearchMontir: { screen: ModalSearchMontir },
     ModalDetailMontir: { screen: ModalDetailMontir }
})
