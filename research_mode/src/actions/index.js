import axios from 'axios'
export const server_url = 'http://localhost:3000'

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
    axios.get(`${server_url}/mechanic/${id}`)
    .then(results => {
      dispatch(oneMechanic(results.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const oneCustomer = (data) => {
  return {
    type: 'GET_ONE_CUSTOMER',
    payload: {
      one_mechanic: data
    }
  }
}

const getCostumerFromDB = (id) => {
  return (dispatch) => {
    axios.get(`${server_url}/costumer/${id}`)
    .then (results => {
      dispatch(oneCostumer(results.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const addCar = data => {
  alert('dalem dispatch')
  return (dispatch) => {  
    axios.post(`http://10.0.2.2:3000/api/vehicle`, data)
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