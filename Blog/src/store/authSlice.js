import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 
    status:false,
    userData: null

}

//createSlice(): accepts an object of reducer functions,
// a slice name, and an initial state value, 
//and automatically generates a slice reducer with 
//corresponding action creators and action types.

const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducer:{
        login:(state,action)=>{
                state.status=true,
                state.userData=action.payload.userData
        },
        logout:(state)=>{
            state.status=false
        }
    }
})



export default authSlice.reducer