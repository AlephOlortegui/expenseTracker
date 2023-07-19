# Expense Tracker - Context and Reducer

- More info: https://dev.to/eswaraprakash/react-usecontext-and-usereducer-hooks-2pkm

## Steps

- Initial View without Add Transaction
- Context AppReducer and GlobalState just show the state
  
### terms

  ```bash
    import { createContext, useReducer, useContext } from 'react';

    dispatch from useReducer(AppReducer, initialState)

    where dispatch({type: "", payload: ""})
  ```
- IncomeExpenses, Balance, TransactionList -- Amount calculations.