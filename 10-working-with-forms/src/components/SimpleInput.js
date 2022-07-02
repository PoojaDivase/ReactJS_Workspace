import { useRef, useState } from "react";

const SimpleInput = (props) => {

  //const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = (!enteredNameIsValid && enteredNameTouched);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    /*if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true)
    }*/
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    /*if (enteredName.trim() === "") {
      console.log("Name is EMPTY")
      setEnteredNameIsValid(false)
    }*/
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // no server - so we dont want http server call here- avoiding default behaviour

    setEnteredNameTouched(true); //if form is submitted all inputs are touched

    if (enteredName.trim() === "") {
      console.log("Name is EMPTY")
      return;
    }
    console.log("Name: ", enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);

    //if we want to use value once then useRef is good- no need to update state
    /*const enteredValue = nameInputRef.current.value;//ref is obj with current property
    console.log("Name Ref : ", enteredValue);
    nameInputRef.current.value = ""; //NOT IDEAL, DONT manipulate the DOM
    */
  }
  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
         // ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName} />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name Must not be EMPTY</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;