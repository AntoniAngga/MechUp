import React from 'react'
import { View } from 'react-native'
import { DrawerItems } from 'react-navigation'
import FitImage from 'react-native-fit-image'

export default class DrawerContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <View style={styles.header}>
          <FitImage
            source={require('../images/mechanic.jpg')}
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
