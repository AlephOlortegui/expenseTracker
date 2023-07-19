import {nanoid} from 'nanoid'
import { useState } from 'react'

const AddTransaction = () => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const onSubmit = (e) => { 
    e.preventDefault();

    const newTransaction = {
      id: nanoid(),
      text,
      amount: +amount //using "+" is the same as parseInt
    }
    console.log(newTransaction)
    //Clean Up
    setText('')
    setAmount('')
   }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income) </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type='submit' className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction