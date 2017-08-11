import { combineReducers } from 'redux';
import orderReducers from './orderReducers';
import customerReducers from './customerReducers';
import mechanicReducers from './mechanicReducers';
import vehicleReducers from './vehicleReducers';
import navReducers from './navReducers';

export default combineReducers({
  orderReducers: orderReducers,
  customerReducers: customerReducers,
  mechanicReducers: mechanicReducers,
  vehicleReducers: vehicleReducers,
  navReducers: navReducers
});