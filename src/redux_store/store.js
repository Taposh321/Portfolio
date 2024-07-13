import { configureStore } from "@reduxjs/toolkit";
import countersReducer from  "../features/counters/snowSlice";
import modelReducer from "../features/model/modelSlice";
const store=configureStore({
reducer:{
counters:countersReducer,
model:modelReducer
}
})
export default store;
