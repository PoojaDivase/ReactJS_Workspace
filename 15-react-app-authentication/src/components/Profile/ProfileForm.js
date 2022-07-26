import { useContext } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const passwordChangeHandler = async (event) => {
    event.preventDefault();
    const newPassword = newPasswordInputRef.current.value;
    let res;
    //add validation
    try {
      res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDUIjuq2UGLYz19ymEspqVe30J_FIJMXmM',
        {
          method: 'POST',
          body: JSON.stringify({
            idToken: authCtx.token,
            password: newPassword,
            returnSecureToken: false
          }),
          headers: {
            'content-type': 'application/json'
          }
        });
    } catch (errorMessage) {
      throw new Error(errorMessage);
    }

   
    if (res.ok) {
      alert("PasswordChanged...!!!!");
      history.replace('/');
    }
  }

  return (
    <form className={classes.form} onSubmit={passwordChangeHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button >Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
