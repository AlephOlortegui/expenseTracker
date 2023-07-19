import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({transaction: {amount,text,id}}) => {
  /*each transaction = {id:1, text:'Flower', amount:-20},
    I can do destructuring 

    from ({transaction}) to ({transaction: {amount, text}})
  */
 const {deleteTransaction} = useContext(GlobalContext)
 const sign = amount < 0 ? '-' : '+'

return (
  <li className={amount < 0 ? "minus" : "plus"}>
    {text} <span>{sign}${Math.abs(amount)}</span>
    <button className="delete-btn"
        onClick={() => deleteTransaction(id)}>x</button>
  </li>
)
}

export default Transaction