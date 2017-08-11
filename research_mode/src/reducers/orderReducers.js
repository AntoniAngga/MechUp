const initialState = {
  data_order: {
    results: [""] 
  }
}

const orderReducers = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA_ORDER':
        return {...state, data_order: action.payload.data_order}
    default:
    return state
  }
}

export default orderReducers;