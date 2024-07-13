import { createSlice } from "@reduxjs/toolkit";

const initialState=[
{
status:0
}
]


const modeSlice = createSlice({
name:"model",
initialState,
reducers:{
    open:(state,action)=>{
if(state[0].status==0){
    state[0].status=1
}
    },
    close:(state,action)=>{
        if(state[0].status==1){
            state[0].status=0
        }
            },
        
}

})

export default modeSlice.reducer
export const {open,close}=modeSlice.actions