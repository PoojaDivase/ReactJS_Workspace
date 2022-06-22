import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App Running...!!!!!");

  const toggleParagraphHandler = () => {
    setShowParagraph(preShowParagraph => !preShowParagraph);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p> This is New ...!!!</p>}
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;