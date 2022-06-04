import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {


    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

   // const [userInput, setUserInput] = useState({ title: "", amount: "", date: "" });

    const titleChangeHandler = (event) => {
        //console.log(event.target.value);
        setTitle(event.target.value);
        //setUserInput({ ...userInput, title : event.target.value})

        //prefer this in case of multiple values in single state
        /*setUserInput((preState) => {
            return { ...preState, title: event.target.value }
        });*/
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
        //setUserInput({ ...userInput, amount: event.target.value })
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        //setUserInput({ ...userInput, date: event.target.value })
    }

    const addExpenseOnSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseData); // PARENT method called to pass data from child to parent
        //console.log(expenseData)
        setTitle("");
        setAmount("");
        setDate("");
    }

    return (
        <form onSubmit={addExpenseOnSubmitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={setTitle.title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={setAmount.amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" value={setDate.date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                 <button type="submit">
                    Add Expense
                </button>
                <button type="button" onClick={props.oncancle}>
                    Cancle
                </button>

               
            </div>
        </form>
    );
}


export default ExpenseForm;