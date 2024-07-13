import React, { useState ,useEffect, useRef } from 'react';
import Button from "../buttons/button1"


function AboutMe(){
const [viewHight,setViewHeight]= useState(window.innerHeight)

useEffect(()=>{
  const handler=()=>{
    setViewHeight(window.innerHeight)
  }  
window.addEventListener("resize",handler)

return ()=>{
}
},[]);

return (
<>
<div className={` overflow-hidden row-start-3 row-end-13 col-span-12 grid grid-cols-12 grid-rows-12 gap-0  `}>
{/* flex flex-col md:flex-row  h-full  w-full  */}

<div className={`w-full flex-col 
 ${viewHight<=600?'h-[100%]  ':' row-end-7 '}  linearBlack max-w-[500px] pl-[30px] 
  row-start-1 col-span-12 md:col-end-7  col-start-1 row-end-13 
  flex   items-start  justify-center ` } >

        <div className="relative   text-white 
          max-w-[350px] min-h-[150px]" > 

            <div className='headingAboutMe  '> 
            Hi, This is <span> </span>  
             <span className='text-red-500'>T</span>
            <span className='text-yellow-400'>a</span>
            <span className='text-green-300'>p</span>
            osh, 
        a professional web and UI/UX designer</div>
  </div> 
  <div className="aboutMe flex  max-w-[450px] justify-center
   items-stert  flex-col  w-full  rounded-md  ">  
<div className='flex  flex-col items-center  text-white ' style={{fontSize:"12px"}}>
I am a full stack web developer with 2 years of experances in 
front-end and backend development as well passionate about building efficient, scalable
and user-friendly solutions. Let's bring your idea into reality.

</div>
<div className='flex cta pt-5'>
{
  <> 
  <Button text={"Lets do it"}  />
  <Button text={"Resume"}  />
</>

}

</div>

</div> 
    </div>

    <div className={`justify-center md:flex items-start
     md:items-center  ${viewHight<=600?'hidden':'flex'} 
     row-start-7 row-end-13 col-start-1 col-end-13
      md:col-start-7 md:col-end-13 md:row-start-1
       md:row-end-13`}>

<div>
<div className='min-w-[200px] photoContainer min-h-[200px]
 w-full max-w-[450px] max-h-[450px] bg-red-400  object-cover'>
<img className='w-full h-full ' src="src/assets/photo/heroPhoto.png" alt="" /> 
</div>

    </div>   
    </div>


</div>
</>
)
}



export default AboutMe
