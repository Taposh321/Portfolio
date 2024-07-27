import { createSlice } from "@reduxjs/toolkit";

const initialState=[
{
    width:window.innerWidth,
height:window.innerHeight

}
]


const windowSlice = createSlice({
name:"windowSize",
initialState,
reducers:{
    setWidth:(state,action)=>{
        state[0].width=action.payload
    },
    setHeight:(state,action)=>{
        state[0].height=action.payload
    },
}


})

export default windowSlice.reducer
export const {setHeight,setWidth}=windowSlice.actions