import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);


  console.log("App Running...!!!!!");//component where we manage state
  //if stage changes the whole component re-evaluates
  //when component re-evaluates then all its child gets re-evalutes

  //usecallbackHook () => (function , array of dependencies)
  //it will store function and always will be reused as our dependecies array is empty
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(preShowParagraph => !preShowParagraph);
    }
  }, [allowToggle]);

  const allowTogglingHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowTogglingHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;