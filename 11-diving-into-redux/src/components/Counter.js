import { Component } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { counterActions, DECREMENT, INCREMENT } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
    
    //useStore and useSelector 
    const counter = useSelector(state => state.counter.counter);
    const dispatch = useDispatch(); //dispatch function -> call to dispatch action against redux store
    const showCounter = useSelector(state => state.counter.showCounter);

    const toggleCounterHandler = () => {
        //dispatch({type : 'toggle'});
        dispatch(counterActions.toggleCounter());
     };

    const incrementHandler = () => {
        //dispatch({type : INCREMENT});
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        //dispatch({type : DECREMENT});
        dispatch(counterActions.decrement());
    }

    const increaseHandler = () => {
        //dispatch({type : 'increase', amount: 5});
        dispatch(counterActions.increase(5));// value 5 passed as a extra payload
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter} </div>}
            <div>
                <button onClick={incrementHandler }>Increment</button>
                <button onClick={increaseHandler }>Increase By 5</button>
                <button onClick={ decrementHandler}>Decrement</button>
            </div>
            <br />
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

/*
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  }
};

//connect has 2 arguments
//1st -> mapStateToProps - same as useSelector
//2nd -> mapDispatchToProps - same as useDispatch
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/