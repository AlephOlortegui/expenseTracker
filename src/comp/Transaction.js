const Transaction = ({transaction: {amount,text}}) => {
  /*each transaction = {id:1, text:'Flower', amount:-20},
    I can do destructuring 

    from ({transaction}) to ({transaction: {amount, text}})
  */
 const sign = amount < 0 ? '-' : '+'

return (
  <li className={amount < 0 ? "minus" : "plus"}>
    {text} <span>{sign}${Math.abs(amount)}</span><button className="delete-btn">x</button>
  </li>
)
}

export default Transaction