import React, { useRef } from "react";
import classes from './NewTodo.module.css';

const NewToDo: React.FC<{ onAddToDo: (todo: any) => void }> = (props) => {
    //const todoTextInput: any = useRef();
    const todoTextInput = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInput.current?.value;
        if (enteredText?.trim().length === 0) {
            return (<p>Empty data</p>);
        }
        props.onAddToDo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form} >
            <label htmlFor="text">ToDo Text</label>
            <input type='text' id="text" ref={todoTextInput} />
            <button>Add Todo</button>
        </form>
    );
}

export default NewToDo;