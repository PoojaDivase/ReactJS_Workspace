import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = props => {

    if (props.filteredItems.length === 0) {
        return <h2 className='expenses-list__fallback'> No Expenses Found !!!!!!!!!</h2>;
    }

    return (

        <ul className='expenses-list'>
            {props.filteredItems.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;