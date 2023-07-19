import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

//Initial State
const initialState = {
  transactions: [
      {id:1, text:'Flower', amount:-20},
      {id:2, text:'Salary', amount:300},
      {id:3, text:'Book', amount:-10},
      {id:4, text:'Camera', amount:150}
  ]
}

//Create Context
export const GlobalContext = createContext(initialState)

// Provider component - para que otros componentes tengan acceso al global state
                            //   (props) destructuring to "children"
export const GlobalProvider = ({children}) => {
  //cuando deseemos llamar al reducer tenemos que usar el "dispatch"
  const [state, dispatch] = useReducer(AppReducer, initialState)
  /*
    useReducer(whatever our Reducer is(maybe in a separate file),
     the initial state,
     initializer (optional))

     initializer (optional): The initializer is an optional 
     function that allows you to perform some initialization 
     logic to derive the initial state value. It is called once 
     during the initial render. If provided, the initializer 
     function should return the initial state value.
  */

  // dispatch methods
  function addTransaction(newTransaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTransaction
    })
  }
  function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
  }


  return(
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}