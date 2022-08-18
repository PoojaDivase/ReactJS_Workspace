import React from 'react';
import classes from './TodoItem.module.css';

const ToDoItem: React.FC<{ text: string, onRemoveToDo: () => void }> = (props) => {
    return <li className={classes.item} onClick = {props.onRemoveToDo}>{props.text}</li>
};

export default ToDoItem;