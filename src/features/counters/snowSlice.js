import {createSlice} from '@reduxjs/toolkit'

const initialState=[
]
const snowSlice=createSlice({
    name:"counters",
    initialState,
    reducers:{
        increment:(state,action)=>{
        //   const counterIndex=state.findIndex(c=>c.id=== action.payload);
        //   state[counterIndex].value++
        },
             
        decrement:(state,action)=>{
            // const counterIndex=state.findIndex(c=>c.id=== action.payload);
            // state[counterIndex].value--
        }
    }

})


export default snowSlice.reducer
export const {increment,decrement}= snowSlice.actions
