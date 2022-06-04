import { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseChart from "../ExpensesChart/ExpensesChart";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpenseList from "../ExpensesList/ExpensesList";
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredItems = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear; 
    });

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />   
                <ExpenseChart expenses={filteredItems} />
                <ExpensesList filteredItems ={filteredItems}> </ExpensesList>
            </Card>
        </div>
    );
}

export default Expenses;

/*
<ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
<ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
<ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
<ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
*/