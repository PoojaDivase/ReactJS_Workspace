import React from "react";
import Todo from "../models/todo";
import ToDoItem from "./ToDoItem";
import classes from './Todos.module.css';

const Todos: React.FC<{items : Todo[], onRemoveToDo: (id :string) => void}> = (props) => {

    return <ul className={classes.todos}>
        {props.items.map(item => <li key={item.id}><ToDoItem text={item.text} onRemoveToDo = {props.onRemoveToDo.bind(null, item.id)}></ToDoItem></li>)}
    </ul>

}

export default Todos;