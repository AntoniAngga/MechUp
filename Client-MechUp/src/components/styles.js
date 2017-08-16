import { StyleSheet, Dimensions } from 'react-native'


export const color = {
  white: '#F8F8F8',
  black: '#38474F',
  gray: '#E8E8E8',
  orange: '#F6846A',
  lightOrange: '#FFEEE4',
  niceOrange: '#F2784B',
  green: '#2ECC71',
  red: '#E74C3C',
}

export const styles = StyleSheet.create({

  drawerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.orange,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  logo: {
    flex: 1,
  },
  header: {
    flex: 2.5,
    flexDirection: 'row',
    margin: 10,
  },
  main: {
    flex: 3.5,
    justifyContent: 'space-between',
    marginTop: 10
  },
  footer: {
    flex: 4
  }
})
