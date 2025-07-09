//always write store in js  and this is authentication status of user 
import {createSlice} from "@reduxjs/toolkit"
//setting up initial status of user 
const initialStatus = {
    status : false,
    data : null
}

//creating Slice helping in changing state across application 
const Auth = createSlice({
     //first name
     name : "auth",
     //pass initial status
     initialStatus,
     //now create logic (reducers)
    // reducer is a function that takes the current state and an action, and returns the new state.
     reducers : {
         login : (state, action) => { 
               state.status = true,
               state.data = action.payload.data
         },
         logout : (state) => {
              state.status = false,
              state.data = null
         }
     }
})

//now export auth
export const {login, logout} = Auth.actions

export default Auth.reducer;
