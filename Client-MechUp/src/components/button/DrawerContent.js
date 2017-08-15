import React from 'react'
import { View } from 'react-native'
import { DrawerItems } from 'react-navigation'
import FitImage from 'react-native-fit-image'

import { styles } from '../styles'


export default class DrawerContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <View style={styles.header}>
          <FitImage
            source={require('../../images/photo.png')}
            style={styles.logo}
            resizeMode='contain'
          />
        </View>
        <View style={styles.main}>
          <DrawerItems {...this.props} />
        </View>
        <View style={styles.footer}>
        </View>
      </View>
    );
  }
}
