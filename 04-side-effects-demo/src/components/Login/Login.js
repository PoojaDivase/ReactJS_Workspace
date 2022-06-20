import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/AuthContext';
import Input from '../UI/Input/input';

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.value, isValid: action.value.includes("@") };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.value, isValid: action.value.trim().length > 6 };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
};

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    //used to manage complex states(multiple states) 
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: false,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: false,
    });

    //auth context
    const authContext = useContext(AuthContext);

    //getting called every time => no dependency array
    //empty [] ==> ran once 
    //addd dependency ==>  whenever dependecy changed
    //we can return cleanup function 
    useEffect(() => {
        console.log("Effect Running");
        return (() => {
            console.log("Effect Cleanup");
        });
    }, []);

    const { isValid: emailValid } = emailState;
    const { isValid: passwordValid } = passwordState;

    //UseEffect() ==>
    //useeffect is to handle sideeffect
    //checking and updating state in response of user input in username and password
    //re-render whenever specified dependecies changed insted of rendering code all the time
    //[] -> will render only once ...that is initial time
    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking Form Validity");
            setFormIsValid(
                emailState.isValid && passwordState.isValid
            );
        }, 200);  //500 milliseconds

        /// we can return function from useEffect 
        // it will run before new sideeffect function runs and does not runs at 1 run of sideeffect function
        return () => {
            console.log("CLEAN_UP");
            clearTimeout(identifier);
        };
    }, [emailValid, passwordValid]); // setFormIsValid function as a dependency can be added

    const emailChangeHandler = (event) => {
        //setEnteredEmail(event.target.value);
        dispatchEmail({ type: "USER_INPUT", value: event.target.value });

        setFormIsValid(
            event.target.value.includes("@") && passwordState.value.trim().length > 6
        );
    };

    const passwordChangeHandler = (event) => {
        //setEnteredPassword(event.target.value);
        dispatchPassword({ type: "USER_INPUT", value: event.target.value });

        setFormIsValid(
            event.target.value.trim().length > 6 && emailState.value.includes('@')
        );
    };

    const validateEmailHandler = () => {
        //setEmailIsValid(emailState.value.includes('@'));
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        //setPasswordIsValid(enteredPassword.trim().length > 6);
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authContext.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    id="email"
                    label="email"
                    type="email"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler} />
                <Input
                    label="password"
                    type="password"
                    id="password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
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