import { Component } from 'react';
import classes from './User.module.css';

class User extends Component{
    // constructor() {
    //     //to initialize something
    // }

    componentWillUnmount() {
        console.log("User will Unmount");
    }

    //specific method with same name and react calls it when we use component
    render() {
        return (
            <li className={classes.user}>{this.props.name}</li>
        );
    }
}

// const User = (props) => {
//     return <li className={classes.user}>{props.name}</li>;
// };

export default User;