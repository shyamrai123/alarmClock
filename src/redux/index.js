import { configureStore } from "@reduxjs/toolkit";
import clockSlice from "./slices/clockSlice";
 
const store = configureStore({
    reducer :{
        clock :clockSlice,
        
    }
})


export default store;