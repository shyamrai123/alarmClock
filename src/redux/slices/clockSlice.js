import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const clockSlice = createSlice({

    name :"clock",
    initialState:{
      alarmTimer :null,
      alarm :true,

    },
  
       reducers:{
            
          setlarm :( state, action)=>{
         state.alarmTimer = action.payload;
         state.alarm = true;
            
          },

          clearalarm :(state , action)=>{
            state.alarm = false;
            state.alarmTimer = null;
            
            //  const clear = state.filter((state)=>!state.alarmTime==action.payload);
          }

       }

})


export default clockSlice.reducer;

export const {setlarm , clearalarm} = clockSlice.actions;
