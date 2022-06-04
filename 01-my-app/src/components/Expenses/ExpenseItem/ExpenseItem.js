import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) { //1 root element per return 
    /* const expenseDate = new Date( 2022, 4, 29 );
     const expenseTitle ='Car Insurance';
     const expenseAmount = 295.5;*/
    /*const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();*/


    const [title, setTitle] = useState(props.title); // changing value dynamically
    console.log("ExpenseItem Evaluated...!!!!!")
    //let title = props.title;

    const clickHandler = () => {
        console.log("Clicked !!!!!");
        // title = "title updated";
        setTitle("Updated Title");
        console.log(title);
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;
