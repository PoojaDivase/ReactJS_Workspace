import { useRef } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let res;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUIjuq2UGLYz19ymEspqVe30J_FIJMXmM'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUIjuq2UGLYz19ymEspqVe30J_FIJMXmM';
    }
    try {
      res = await fetch(
        url
        , {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'content-type': 'application/json'
          }
        });


    } catch (errorMessage) {
      throw new Error(errorMessage);
    }
    setIsLoading(false)

    if (res.ok) {
      const data = await res.json();
      authCtx.login(data.idToken, new Date(new Date().getTime() + (+data.expiresIn * 1000)));
      authCtx.isLoggedIn = true;
      console.log("Response : ", data.idToken);
      console.log("Auth Context : ", authCtx);
      history.replace('/');
      return data;
    } else {
      return res.json().then(data => {
        let errorMessage = 'Authentication failed';
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
          console.log(data.error.message)
        }
        alert(errorMessage);
      })
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p className='centered'>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
