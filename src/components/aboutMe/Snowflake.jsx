import {React,useState }from 'react';
import './Snowflake.css'; // Import CSS for styling

const Snowflake = ({x,y,delay,size,state}) => {
const[iteration,setIteration]=useState("infinite")


  const animationEnd=()=>{
if(state=='false'){
setIteration('1')
}
  }
  


  return (
    <>
    <div className="snowflake" onAnimationIteration={animationEnd}
    style={{ left:x+"px",
    top:-y+"px",
    animationDelay:delay+"s",
    width:size,
    height:size,
    animationIterationCount:""
  }}
    >
      

    </div>
</>
  )
};

export default Snowflake;
