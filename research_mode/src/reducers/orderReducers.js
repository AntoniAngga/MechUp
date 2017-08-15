const initialState = {
  data_order: {
    final: {
      lat: ''
    }
  }
}

const orderReducers = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA_ORDER':
        return {...state, data_order: action.payload.data_order}
    case 'UPDATE_TO_FINAL':
        return {...state, data_order: action.payload}
    default:
    return state
  }
}

export default orderReducers;