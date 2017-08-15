import React from 'react'
const { shallow, configure } = require('enzyme')
const ReactSixteenAdapter = require('enzyme/build/adapters/ReactSixteenAdapter')
configure({adapter: new ReactSixteenAdapter()})
import LoginFormCustomer from '../../src/components/LoginFormCustomer'

describe('render Login Screen', () => {
    it('should render correctly', () => {
        expect(shallow(<Login />)).toHaveLength(1)
    })
    it('should have Image component', () => {
        expect(shallow(<Login />).find('Image')).toHaveLength(1)
    })
    it('should have TouchableOpacity component', () => {
        expect(shallow(<Login />).find('TouchableOpacity')).toHaveLength(1)
    })
    it('should have TextInput component', () => {
        expect(shallow(<Login />).find('TextInput')).toHaveLength(1)
    })
    it('should have Text component', () => {
        expect(shallow(<Login />).find('Text')).toHaveLength(1)
    })
})
