import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    //getting called every time => no dependency array
    //empty [] ==> ran once 
    //addd dependency ==>  whenever dependecy changed
    //we can return cleanup function 
    useEffect(()=>{
        console.log("Effect Running");
        return(() => {
            console.log("Effect Cleanup");
        });
    }, [enteredPassword]);
    

    //useeffect is to handle sideeffect
    //checking and updating state in response of user input in username and password
    //re-render whenever specified dependecies changed insted of rendering code all the time
    //[] -> will render only once ...that is initial time
    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking Form Validity");
            setFormIsValid(
                enteredEmail.includes('@') && enteredPassword.trim().length > 6
            );
        }, 200);  //500 milliseconds

        /// we can return function from useEffect 
        // it will run before new sideeffect function runs and does not runs at 1 run of sideeffect function
        return () => {
            console.log("CLEAN_UP");
            clearTimeout(identifier);
        };
    }, [enteredEmail, enteredPassword]); // setFormIsValid function as a dependency can be added

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;