  import React, { useEffect, useState } from 'react'
 
  
  
  const Clock = () => {
    const date = new Date();
   const [time , setTime ] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
   });
   
   
   useEffect(()=>{
            
    const interval = setInterval(()=>{
    const date = new Date()
      setTime({
              hours :date.getHours(),
              minutes :date.getHours(),
              seconds :date.getSeconds(),
      },1000)

       return ()=>clearInterval(interval)
    })


   },[])



    return (
      <div > 
           <h1  style={{color:"red"}} > {time.hours}:{time.minutes}:{time.seconds}</h1>
      </div>
    )
  }
  
  export default Clock