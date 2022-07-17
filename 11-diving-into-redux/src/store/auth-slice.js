import Redux, { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

//const store = createStore(counterReducer);
//const store = createStore(counterSlice.reducer);
const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;