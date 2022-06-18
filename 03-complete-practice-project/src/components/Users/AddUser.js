import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredUserAge, setEnteredAge] = useState('');
    const [errorMessage, setErrorMessage] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorMessage({ title: "Invalid Data", message: "Data is not entered(Please enter non empty values)" });
            return;
        }
        if (+enteredAge < 1) {
            setErrorMessage({ title: "Invalid Age", message: "Invalid AGe data(Please enter valid age)" });
            return;
        }
        console.log(enteredName, enteredAge);
        props.onaddUserData(enteredName, enteredAge);
        // setEnteredUsername("");
        // setEnteredAge("");

        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const errorHandler = () => {
        setErrorMessage(null);
    };

    return (
        <div>
            {errorMessage && <ErrorModal title={errorMessage.title} message={errorMessage.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;