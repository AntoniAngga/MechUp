import axios from 'axios'

import firebase from '../config/FirebaseConfig'

export const server_url = 'http://10.0.2.2:3000'
// export const server_url = 'http://localhost:3000'

export const oneMechanic = (data) => {
  return {
    type: 'GET_ONE_MECHANIC',
    payload: {
      one_mechanic: data
    }
  }
}

const getMechanicFromDB = (id) => {
  return (dispatch) => {
    axios.get(`${server_url}/api/mechanic/${id}`)
    .then(results => {
      dispatch(oneMechanic(results.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const oneCostumer = (data) => {
  return {
    type: 'GET_ONE_CUSTOMER',
    payload: {
      ['help'+data.id]: data
    }
  }
}

export const madeOrder = (data) => {
  return {
    type: 'MAKE_ORDER',
    payload: {
      ['order'+data.id]: data
    }
  }
}

export const getCostumerFromDB = (id) => {
  return (dispatch) => {
    axios.get(`${server_url}/api/customer/${id}`)
    .then (results => {
      console.log(results.data);
      dispatch(oneCostumer(results.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const addCar = data => {
  return (dispatch) => {  
    axios.post('http://10.0.2.2:3000/api/vehicle', data)
    .then( data => {
      alert('bisa')
      return data;
    })
    .catch ( err => {
      alert('err')
      console.log(err);
    })
  }
} 

export const addOrder = data => {
  return (dispatch) => {  
    axios.post('http://10.0.2.2:3000/api/order', data)
    .then( results => {
      alert('bisa')
      console.log(results, 'ini hasil addOrder');
      dispatch(getOrderById(results.data))
    })
    .catch ( err => {
      alert('err')
      console.log(err);
    })
  }
} 

export const getOrderById = (data) => {
  return (dispatch) => {
    axios.get(`${server_url}/api/order/${data.id}`)
    .then (results => {
      console.log(results.data);
      dispatch(searchMontir(results.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const searchMontir = data => {
  return (dispatch) => {
    alert('masuk searchMontir')
    console.log(data);
    firebase.database()
    .ref(`order/orderID:${data[0].id}/costumerId:${data[0].cust_id}`)
    .set({
      order_id: data[0].id,
      name: data[0].cust_name,
      // latitude: data[0].latitude,
      // longitude: data[0].longitude
    });
  }
} 
