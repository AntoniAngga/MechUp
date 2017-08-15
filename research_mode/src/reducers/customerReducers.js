const initialState = {
  data_customers: {
    results: {} 
  }
}

const customerReducers = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA_COSTUMER':
        return {...state, data_customers: action.payload.data_customers}
    case 'GET_ONE_CUSTOMER':
        return {...state, data_customers: action.payload}
    default:
    return state
  }
}

export default customerReducers