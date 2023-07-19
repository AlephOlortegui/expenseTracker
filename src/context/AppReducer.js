// https://react.dev/reference/react/useReducer
// Reducer: is how we specify the application state changes in 
// response to certain actions to our store, to our context

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      //updateObj_with_spread
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
  
    default:
      return state
  }
}

export default AppReducer