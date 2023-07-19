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
    case 'DELETE_TRANSACTION':
      return{
          //updateObj_with_spread
          ...state,
          //then we change our transactions values
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    default:
      return state
  }
}

export default AppReducer