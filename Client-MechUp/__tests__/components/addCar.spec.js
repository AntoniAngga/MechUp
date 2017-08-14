import React from 'react'
// import { expect } from 'chai';
// import { shallow } from 'enzyme';

const { shallow, configure } = require('enzyme')
const ReactSixteenAdapter = require('enzyme/build/adapters/ReactSixteenAdapter')
configure({adapter: new ReactSixteenAdapter()})

import AddCar from '../../src/components/AddCar'

describe('<AddCar>', () => {
     it('render correctly', () => {
          const AddCar = shallow(<AddCar />);
          expect(AddCar).toHaveLength(1);
     })
})
