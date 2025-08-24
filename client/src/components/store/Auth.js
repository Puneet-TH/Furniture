//always write store in js  and this is authentication status of user 
import {createSlice} from "@reduxjs/toolkit"
//setting up initial status of user 
// Try to load auth state from localStorage
let initialState = {
        status: false,
        data: null
};
try {
    const persisted = JSON.parse(localStorage.getItem('authState'));
    if (persisted && typeof persisted === 'object') {
        initialState = persisted;
    }
} catch {}

//creating Slice helping in changing state across application 
const Auth = createSlice({
     //first name
     name : "auth",
     //pass initial state
     initialState,
     //now create logic (reducers)
    // reducer is a function that takes the current state and an action, and returns the new state.
     reducers : {
       login : (state, action) => { 
           state.status = true;
           state.data = action.payload.data;
           // Persist to localStorage
           localStorage.setItem('authState', JSON.stringify({ status: true, data: action.payload.data }));
       },
       logout : (state) => {
          state.status = false;
          state.data = null;
          // Remove from localStorage
          localStorage.removeItem('authState');
       }
     }
})

//now export auth
export const {login, logout} = Auth.actions

export default Auth.reducer;
