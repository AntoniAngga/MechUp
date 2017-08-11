const initialState = {
  data_mechanic: {
    results: [""] 
  },
  one_mechanic: {}
}

const mechanicReducers = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA_MECHANIC':
        return {...state, data_mechanic: action.payload.data_mechanic}
    case 'GET_ONE_MECHANIC':
        return {...state, one_mechanic: action.payload.one_mechanic}
    default:
    return state
  }
}

export default mechanicReducers