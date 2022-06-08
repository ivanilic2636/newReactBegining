import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };


    const startEditingExpenseHandler = () => {
        setIsEditing(true);
    }

    const cancelEditingExpenseHandler = () => {
        setIsEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing &&<button onClick={startEditingExpenseHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={cancelEditingExpenseHandler}/>}
        </div>
    )
}

export default NewExpense