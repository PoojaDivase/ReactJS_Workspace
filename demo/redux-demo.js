const redux = require('redux');

//reducer function -standard JS function
//inputs: old state+ dispatched action
//output: New State Object
//should be pure function --> same input leads to same output
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }
    return state;
};

const store = redux.createStore(counterReducer);

//subcription
const counterSubscriber = () => {
    const latestState = store.getState(); //gives latest state snapshot after state update
    console.log(latestState);
};

store.subscribe(counterSubscriber);// pointer to counterSubscriber function

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });


