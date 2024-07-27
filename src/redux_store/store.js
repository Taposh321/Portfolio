import { configureStore } from "@reduxjs/toolkit";
import countersReducer from  "../features/counters/snowSlice";
import modelReducer from "../features/model/modelSlice";
import windowSizeSlice from "../features/windowSize/windowSizeSlice";
const store=configureStore({
reducer:{
counters:countersReducer,
model:modelReducer,
windowSize:windowSizeSlice
}
})
export default store;
