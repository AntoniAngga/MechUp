const initialState = {
  data_vehicle: {
    results: [""] 
  }
}

const vehicleReducers = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA_VEHICLE':
        return {...state, data_vehicle: action.payload.data_vehicle}
    default:
    return state
  }
}

export default vehicleReducers