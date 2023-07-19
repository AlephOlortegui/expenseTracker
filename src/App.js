import './App.css';

import Balance from "./comp/Balance";
import Header from "./comp/Header";
import IncomeExpenses from './comp/IncomeExpenses';
import TransactionList from './comp/TransactionList';
import AddTransaction from './comp/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  // Provider component - para que otros componentes tengan acceso al global state
  //   (props) destructuring to "children"
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
