import React, { useState ,useEffect, useRef } from 'react';
import Button from "../buttons/button1"
import { useDispatch, useSelector } from 'react-redux';
import { setHeight,setWidth } from '../../features/windowSize/windowSizeSlice';
import {motion} from 'framer-motion'
import AnimatedLight from "./animatedLight"
import '../../assets/photo/heroPhoto.png'
// import LoadingEffect from '../effects/loadingEffect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation,faUser,faGraduationCap,faPray} from '@fortawesome/free-solid-svg-icons';
import { faLadderWater } from '@fortawesome/free-solid-svg-icons/faLadderWater';



function AboutMe(){
  const [size,setSize]=useState()
 const useDis = useDispatch();
 const screenSize = useSelector((states)=> states.windowSize);
 const handler=()=>{

  useDis(setWidth(window.innerWidth));
  useDis(setHeight(window.innerHeight));
  }  

useEffect(()=>{
window.addEventListener("resize",handler)
return ()=>{
}
},[]);

return (
<>
<div
 className={` overflow-hidden relative row-start-2 row-end-13 col-span-12 grid grid-cols-12
   grid-rows-12 gap-0 grid-lines    `}>
<motion.div
 className="slideDown"
 initial={{scaleY:1}}
 animate={{scaleY:0}}
exit={{ scaleY:1}}
transition={{duration:1 ,ease:[.22,1,.33,1],type:"spring",damping:10}} >
</motion.div>
<motion.div
 className="slideUp"
 initial={{scaleY:1}}
 animate={{scaleY:0}}
exit={{ scaleY:1}}
transition={{duration:1 ,ease:[.22,1,.33,1]}}>
</motion.div>

<div className={`w-full flex-col  
 ${screenSize[0].height<=600?'h-screen':'row-end-12'}    max-w-[570px] pl-[30px] 
  row-start-1 col-span-12 md:col-end-7  col-start-1 row-end-13 
  flex   items-start  justify-center heroContent ` } >

        <div className="relative  subpixel-antialiased  text-white 
          max-w-[350px] min-h-[150px]" > 

            <div className='headingAboutMe  '> 
            Hi, This is <span> </span>  
             <span className='text-red-500'>T</span>
            <span className='text-yellow-400'>a</span>
            <span className='text-green-300'>p</span>
            osh, 
        a professional full stack web developer</div>
  </div> 
  <div className="aboutMe flex  max-w-[450px] justify-center
   items-stert  flex-col  w-full  rounded-md  ">  
<div className='flex  flex-col items-center  text-white antialiased ' style={{fontSize:"12px"}}>
I am a full stack web developer with 2 years of experances in 
front-end and backend development as well passionate about building efficient, scalable
and user-friendly solutions. Let's bring your idea into reality.

</div>
<div className='flex cta pt-5'>
{
  <> 
  <Button style={{color:"white",border:"1px solid lightgray"}} text={"Let's do it"}  />
  <Button style={{color:"white",border:"1px solid lightgray"}} text={"Resume"}  />
</>

}

</div>

</div> 
    </div>

    <div className={` md:flex justify-center items-start   
     md:items-center  ${screenSize[0].height<=700?'hidden':'row-start-7'} ' } 
    row-end-13 col-start-1 col-end-13
      md:col-start-7 md:col-end-13 md:row-start-1
       md:row-end-13 `}>

<div className="w-full h-full relative flex   " >
<div className="z-[299] w-full overflow-hidden flex justify-center mt-5 md:mt-[60px]">
<div className='flex flex-col   customBg w-[450px] h-[300px]
 rounded-md pl-5 pt-5'>
  <h1 className='text-white text-xl mr-auto'>Area of Knowledge</h1>
<div className='mr-auto mt-5  flex w-full justify-center flex-wrap'>
<div className="dp bg-white w-[150px] h-[150px] overflow-hidden  
 rounded-full flex justify-center items-center">
<img src="./src/assets/photo/heroPhoto.png" className='w-full h-full object-cover' alt="" srcset="" />
  </div>
  </div>
  <div className='flex w-full h-full text-gray-500 text-sm pt-5 '>
    <ul>
      <li> <img src="./src/assets/icons/frontEnd.png" className='w-[20px] h-[20px] inline object-cover' alt="" srcset="" /> Frontend Development: React, Redux, HTML5, CSS3,Tailwind, Bootstrap, JavaScript (ES6+)</li>
      <li>Backend Development: Node.js, Express.js, RESTful APIs 
      </li>
      <li>Real time technology :Socket.io 
      </li>
      <li>Database Management: MongoDB, MySQL 
      <br /> 
      </li>
      <li>Version Control: Git, GitHub 
      </li>
      <li>VOther Tools: Webpack, Babel, Postman
      <br />
      </li>

    </ul>
  </div>
</div>



</div>
    </div>   
    </div>


</div>
</>
)
}



export default AboutMe;
