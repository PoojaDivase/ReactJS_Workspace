import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App Running...!!!!!");//component where we manage state
  //if stage changes the whole component re-evaluates
  //when component re-evaluates then all its child gets re-evalutes
  
  const toggleParagraphHandler = () => {
    setShowParagraph(preShowParagraph => !preShowParagraph);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;