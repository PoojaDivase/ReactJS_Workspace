import { useRef, useState } from "react";

const SimpleInput = (props) => {

    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault(); // no server - so we dont want http server call here- avoiding default behaviour
        console.log("Name: " ,enteredName);
        setEnteredName("");

        //if we want to use value once then useRef is good- no need to update state
        const enteredValue = nameInputRef.current.value;//ref is obj with current property
        console.log("Name Ref : ",enteredValue);
        nameInputRef.current.value= ""; //NOT IDEAL, DONT manipulate the DOM
    }

    return (
      <form onSubmit={formSubmissionHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Your Name</label>
          <input 
          ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          value={enteredName}/>
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;