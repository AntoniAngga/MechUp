import axios from 'axios'

import firebase from '../config/FirebaseConfig'
import distance_count from '../config/distance'
import { NavigationActions } from 'react-navigation'

export const server_url = 'http://mechup-dev.us-west-2.elasticbeanstalk.com/'
export let idLoggedMechanic = ''
// export const server_url = 'http://localhost:3000'

// ini untuk Register dan login actions
export const login_customer = data => {
  return (dispatch) => {  
    axios.post(server_url+'/auth/customer/login', {
      username: data.username,
      password: data.password
    })
    .then( result => {
      dispatch(NavigationActions.navigate({ routeName: 'SearchMontir' }))
    })
    .catch ( err => {
      dispatch(NavigationActions.navigate({ routeName: 'LoginForm' }))
    })
  }
}

export const register_customer = data => {
  return (dispatch) => {
    axios.post(server_url+"/api/customer", data)
    .then( result => {
      dispatch(NavigationActions.navigate({ routeName: 'LoginForm'}))
    })
    .catch ( err => {
      dispatch(NavigationActions.navigate({ routeName: 'RegisterForm'}))
    })
  }
}
export const login_mechanic = data => {
  // alert('mau login mechanic')
  return (dispatch, getState) => {  
    axios.post(server_url+'/auth/mechanic/login', {
      username: data.username,
      password: data.password,
    })
    .then( result => {
      console.log(result.data, 'di login mechanic');
      idLoggedMechanic = result.data
      dispatch(NavigationActions.navigate({ routeName: 'MainMontir' }))
    })
    .catch ( err => {
      // alert('error')
      console.log(err);
      dispatch(NavigationActions.navigate({ routeName: 'LoginFormMechanic' }))
    })
  }
} 



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
    axios.post(server_url+'/api/vehicle', data)
    .then( data => {
      // alert('bisa')
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
    axios.post(server_url+'/api/order', data)
    .then( results => {
      // alert('bisa')
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
    console.log(data);
    firebase.database()
    .ref(`order/orderID:${data[0].order_id}/costumerId:${data[0].cust_id}`)
    .set({
      order_id: data[0].order_id,
      name: data[0].cust_name
    })
    .then(() => {
      // alert('masuk then')
      firebase.database()
      .ref(`order/orderID:${data[0].order_id}/status`)
      .set('searching')
    })
    .then(() => {
      dispatch(searchMontirInDistance(data))
    })
    .catch((err) => {
      console.log(err);
    })
  }
} 

export const searchMontirInDistance = data => {
  return (dispatch) => {
    let in_distance_mechanic = null;
    axios.get(server_url+"/auth/mechanic/role/")
    .then( res => {
      console.log(data, res.data, 'ini data yang mo dipake');
     in_distance_mechanic = res.data.filter(row => {
       console.log(+row.lat, +row.long, +data[0].lat_cust, +data[0].long_cust, "distance count");
        return distance_count(+row.lat, +row.long, +data[0].lat_cust, +data[0].long_cust) <= 10
      })
    })
    .then(()=> {
      console.log(in_distance_mechanic, 'tessssss');
      dispatch(getMechanicOnline(in_distance_mechanic, data))
    })
    .catch(err => {
      console.log(err, 'error di searchMontirInDistance');
    })
  }
}

export const getMechanicOnline = (mech_rows, data_order) => {
  return (dispatch) => {
    axios.get(server_url+"/api/mechanic/"+mech_rows[0].id_mechanic)
    .then( res => {
      axios.put(server_url+"/api/order/"+data_order[0].order_id, {
        id_mechanic: res.data.id
      })
      .then( () => {
        // alert('masuk sesudah put order')
        dispatch(fullFillFirebase(res.data, data_order))
      })
    })
    .catch(err => {
      console.log(err, 'error di getMechanicOnline');
    })
  }
}

export const fullFillFirebase = (mech_rows, data_order) => {
  return (dispatch) => {
    console.log(data_order);
    firebase.database()
    .ref(`order/orderID:${data_order[0].order_id}/mechanicId:${mech_rows.id}`)
    .set({
      order_id: data_order[0].order_id,
      name: mech_rows.name
    })
    .then(() => {
      firebase.database()
      .ref(`order/orderID:${data_order[0].order_id}/status`)
      .set('waiting to be accepted')
    })
  }
}


export const completeOrder = data => {
  console.log(data.id, 'ini di data');
  return (dispatch) => {  
    axios.get(server_url+'/api/order/mechanic/'+data.mech_id)
    .then( results => {
      console.log(results, 'ini hasil addOrder');
      dispatch(completeOrderStatus(results.data))
    })
    .catch ( err => {
      console.log(err,'ini di complete order');
    })
  }
} 

export const completeOrderStatus = data => {
  return (dispatch) => {  
    console.log(data, 'ini dataaa');
    axios.put(server_url+'/api/order/'+data[0].id, {
      status: 'accepted'
    })
    .then( results => {
      console.log(results, 'ini hasil complte');
      dispatch(getFinalOrder(data))
    })
    .catch ( err => {
      console.log(err);
    })
  }
} 

export const getFinalOrder = data => {
  return (dispatch) => {  
    axios.get(server_url+'/api/order/'+data[0].id)
    .then( results => {
      console.log(results, 'ini hasil addOrder');
      dispatch(toReduxOrder(results.data))
    })
    .catch ( err => {
      console.log(err);
    })
  }
} 

export const toReduxOrder = data => {
  return {
    type: 'UPDATE_TO_FINAL',
    payload: {
      ['final']: data[0]
    }
  }
}

export const toReduxOrderMontir = data => {
  console.log(data);
  return {
    type: 'UPDATE_TO_FINAL',
    payload: {
      ['final']: data
    }
  }
}

