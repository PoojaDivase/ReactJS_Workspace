import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    //calling this from child
    const onSaveExpenseDataHandler = (userInput) => {
        const expenseData = {
            ...userInput,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpenseData(expenseData);//parent method called from APP JS using props
        setIsEditing(false);
    };

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} oncancle = {stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense;