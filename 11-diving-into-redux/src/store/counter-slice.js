import Redux, { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            //allowed to mutate state here
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});



const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            //state.counter++; never mutate existing state
            //always add all variables while updating state
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === DECREMENT) {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
};

//const store = createStore(counterReducer);
//const store = createStore(counterSlice.reducer);

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;