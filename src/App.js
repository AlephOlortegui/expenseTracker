import './App.css';

import Balance from "./comp/Balance";
import Header from "./comp/Header";
import IncomeExpenses from './comp/IncomeExpenses';
import TransactionList from './comp/TransactionList';
import AddTransaction from './comp/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
