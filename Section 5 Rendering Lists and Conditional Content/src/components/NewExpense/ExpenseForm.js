import React, { useState } from "react"
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    //Slucaj svaki input zasebno
    const [enteredTitle,setTitle] = useState('');
    const [enteredDate,setDate] = useState('');
    const [enteredAmount,setAmount] = useState('');

    //Slucaj kada imam jedan useState za vise inputa
      // const [data, setData] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })


    //Ovako se radi kada imam prethodni state. Spread koristim da zapamtim ostale atribute a entered title novi atribut gazi prethodni.
    const titleChangeHandler = (event) => {
        // setData((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
        setTitle(event.target.value);
    }
    const dateChangeHandler = (event) => {
         setDate(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setTitle("")
        setDate("")
        setAmount("")

        
    }
  

    return <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-01-01" step="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm