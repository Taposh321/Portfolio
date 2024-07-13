import {React,useEffect,useRef,useState} from 'react';
import Snowflake from './Snowflake';




const Snowfall = ({ numFlakes,isActive}) => {
  // Create an array of snowflakes
  let [Snow,setSnow]=useState('')
  
  useEffect(() => {
      let snow=[]
      for(let i=0;i<numFlakes;i++){
      snow.push(    
      <Snowflake key={i}  delay={Math.random()*10} size={Math.random()*(10-2)+2}  x={i*10} state={isActive} />
      )
      }
      setSnow(snow)

  }, []);
  
  return <div className="snowfall relative p-0 m-0   ">{ 
    Snow }
    </div>
};

export default Snowfall;
