import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { setlarm, alarm} from '../redux/slices/clockSlice';
import "../styles/clockAlarm.css";
import Clock from './clock';


const ClockAlarm = () => {
 
//  const inputs = [{
//        {
//         label:"seconds",
//         type : "text",
        
//        },

//        {
//         label:"minutes",
//         type : "text",
        
//        },

//         {
//         label : "housrs",
//         type  : "text"
//        }

       
//  }]
   
  
  const [currentTime , setCurrentTime] = useState(new Date().toLocaleTimeString());
//  const [alarmtime , setAlarmTime] = useState({
//        hours : "",
//        minuts :"",
//        seconds :""
  
//  })

   const alarmTimer = useSelector( (state)=>state.Clock.alarmTimer);
   const alarm = useSelector( (state)=>state.Clock.alarm);
   const dispatch = useDispatch();

   const updateTime = ()=>{
    setCurrentTime(new Date().toLocaleTimeString())
    checkAlarm();
   };

   setInterval(updateTime , 1000);

  
    const checkAlarm = ()=>{
      if(alarm&&currentTime==alarmTimer){
           alert("alarm!")
      }
    }

  




   const handleSet = (alarmclock)=>{

        dispatch()
   }


        

  return (
    <div>
         <h1> CLOCK</h1>
         <div className='clock-section'>
            <div><img className='clock-img' src='https://images.pexels.com/photos/723675/pexels-photo-723675.jpeg?cs=srgb&dl=pexels-c-k-723675.jpg&fm=jpg' /></div>
         </div>
         <Clock/>
         <div>
             <h2>Set Alarm</h2>
              <div className='alarm-section'>
                   <div>
                       <div><label>Hour</label></div>
                       <div><input value={alarmTimer.hours} type='text' onChange={(e)=>dispatch(setlarm(e.target.value))} /></div>
                   </div>
                   <div>
                       <div><label>minutes</label></div>
                       <div><input value={alarmTimer.minuts} type='text' onChange={ (e)=>dispatch(setlarm(e.target.value))}/></div>
                   </div>
                   <div>
                       <div><label>seconds</label></div>
                       <div><input value={alarmTimer.seconds} type='text' onChange={(e)=>dispatch(setlarm(e.target.value))}/></div>
                   </div>
              </div>
              <div className='btn-section'>
                <button  className='set-btn' onClick={handleSet}>Set Alarm</button>
                <button className='clr-btn'>Clear alarm</button>
              </div>
         </div>
    </div>
  )
}

export default ClockAlarm;