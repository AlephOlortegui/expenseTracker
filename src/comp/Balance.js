import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const FixNumber = (total) => { 
  let x;

  if(Number.isInteger(total)){
    x = total
  } else{
    x = total.toFixed(2)
  }

  //this Fx fixe decimals an signal
  let newTotal = x < 0 ? (
    `${x.toString().slice(0,1)}$${x.toString().slice(1)}`
  ) : `$${x}`;

 return newTotal
}

const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  //Extranct amounts
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc,item) => (acc += item),0)
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{FixNumber(total)}</h1>
    </>
  )
}
 
export default Balance