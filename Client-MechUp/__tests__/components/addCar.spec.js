import React from 'react'
const { shallow, configure } = require('enzyme')
const ReactSixteenAdapter = require('enzyme/build/adapters/ReactSixteenAdapter')
configure({adapter: new ReactSixteenAdapter()})
import AddCar from '../../src/components/AddCar'

describe('render Login Screen', () => {
    it('should render correctly', () => {
        expect(shallow(<AddCar />)).toHaveLength(1)
    })
    it('should have Image component', () => {
        expect(shallow(<AddCar />).find('Container')).toHaveLength(1)
    })
    it('should have TouchableOpacity component', () => {
        expect(shallow(<AddCar />).find('Content')).toHaveLength(1)
    })
    it('should have TextInput component', () => {
        expect(shallow(<AddCar />).find('Card')).toHaveLength(1)
    })
    it('should have Text component', () => {
        expect(shallow(<AddCar />).find('CardSection')).toHaveLength(5)
    })
    it('should have Text component', () => {
        expect(shallow(<AddCar />).find('Form')).toHaveLength(1)
    })
})
