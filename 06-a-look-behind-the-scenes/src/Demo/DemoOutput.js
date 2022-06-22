import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = props => {
    console.log("Demo Running...!!!");
    return (
        <MyParagraph {...props.show ? 'This is New ...!!!' : ''} />
    );
};

export default DemoOutput;