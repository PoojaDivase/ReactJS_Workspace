import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import ToDoItem from "./ToDoItem";
import classes from './Todos.module.css';

const Todos=() => {
    const context = useContext(TodosContext);
    return <ul className={classes.todos}>
        {context.items.map(item => <li key={item.id}><ToDoItem text={item.text} onRemoveToDo = {context.removeTodo.bind(null, item.id)}></ToDoItem></li>)}
    </ul>

}

export default Todos;