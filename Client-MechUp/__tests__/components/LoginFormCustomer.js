import React from 'react'
const { shallow, configure } = require('enzyme')
const ReactSixteenAdapter = require('enzyme/build/adapters/ReactSixteenAdapter')
configure({adapter: new ReactSixteenAdapter()})
import LoginFormCustomer from '../../src/components/LoginFormCustomer'

describe('render Login Screen', () => {
    it('should render correctly', () => {
        expect(shallow(<LoginFormCustomer />)).toHaveLength(1)
    })
    it('should have Image component', () => {
        expect(shallow(<LoginFormCustomer />).find('Card')).toHaveLength(1)
    })
    it('should have TouchableOpacity component', () => {
        expect(shallow(<LoginFormCustomer />).find('CardSection')).toHaveLength(3)
    })
    it('should have TextInput component', () => {
        expect(shallow(<LoginFormCustomer />).find('Input')).toHaveLength(2)
    })
    it('should have Text component', () => {
        expect(shallow(<LoginFormCustomer />).find('Text')).toHaveLength(1)
    })
})
