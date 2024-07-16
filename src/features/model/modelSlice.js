import { createSlice } from "@reduxjs/toolkit";

const initialState=[
{
status:'right-0'
}
]


const modeSlice = createSlice({
name:"model",
initialState,
reducers:{
    open:(state,action)=>{
if(state[0].status=='right-[-100%]'){
    state[0].status='right-0'
}
    },
    close:(state,action)=>{
        if(state[0].status=='right-0'){
            state[0].status='right-[-100%]'
        }
            },
        
}

})

export default modeSlice.reducer
export const {open,close}=modeSlice.actions