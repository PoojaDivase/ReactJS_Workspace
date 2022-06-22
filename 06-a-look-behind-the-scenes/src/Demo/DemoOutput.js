import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput); // memo is used for class based component
//its child is also not re-evaluated
//memo basically check if the result is changed...if not then it will not re-evaluate component
//performance issue=> need to store previous state and then compare with current state