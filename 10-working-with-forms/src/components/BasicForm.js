import useInput from "../hooks/useInput";

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameValueChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameValueChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail
  } = useInput(value => value.trim().includes("@"));

  let formIsValid = enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid ? true : false;

  const onSubmitHandler = event => {
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    console.log("Submitted : ", enteredFirstName, enteredLastName, enteredEmail);
    resetFirstName();
    resetLastName();
    resetemail();
  }


  const firstNameInputClasses = firstNameHasError ? "form-control invalid" : "form-control";
  const lastNameInputClasses = lastNameHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailHasError ? "form-control invalid" : "form-control";


  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={firstNameValueChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">FirstName Input is INVALID ....!!!!!</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
            value={enteredLastName}
            onChange={lastNameValueChangeHandler}
            onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className="error-text">LastName Input is INVALID ....!!!!!</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
          value={enteredEmail}
          onChange={emailValueChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Email Input is INVALID ....!!!!!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;