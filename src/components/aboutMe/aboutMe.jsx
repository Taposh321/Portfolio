import React, { useState ,useEffect, useRef } from 'react';
import Button from "../buttons/button1"
import { useDispatch, useSelector } from 'react-redux';
import { setHeight,setWidth } from '../../features/windowSize/windowSizeSlice';
import {motion} from 'framer-motion'
import AnimatedLight from "./animatedLight"
import '../../assets/photo/heroPhoto.png'
// import LoadingEffect from '../effects/loadingEffect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation,faUser,faGraduationCap,faPray,faArrowCircleDown} from '@fortawesome/free-solid-svg-icons';
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
 className={` overflow-hidden relative row-start-2 row-end-13 col-span-12 grid grid-cols-12 grid-rows-12 gap-0 grid-lines heroContent`}>
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
 ${screenSize[0].height<=600?'h-screen':'row-end-8'}    max-w-[570px] pl-[30px] 
  row-start-1 col-span-12 md:col-end-7  col-start-1 row-end-13 
  flex   items-start  justify-center ` } >

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
     md:items-center  ${screenSize[0].height<=700?'hidden':'row-start-6'} ' } 
    row-end-13 col-start-1 col-end-13
      md:col-start-7 md:col-end-13 md:row-start-1
       md:row-end-13  `}>

<div className="w-full h-full relative flex   " >
<div className="z-[29] relative w-full overflow-hidden flex justify-center items-center  ">
<div className='absolute bg-white light w-[300px] h-[300px] md:w-[350px] md:h-[350px] '></div>

<div className="dp z-10 w-[250px] h-[250px] md:w-[300px] md:h-[300px] overflow-hidden flex justify-center items-center">
     <img src="./src/assets/photo/heroPhoto.png" className='w-full h-full object-cover' alt="" srcset="" />
  </div>
</div>
    </div>   
    </div>
    <div className='text-white text-sm absolute bottom-[80px] left-[50%] text-center'>
      Scroll down <br /> <span> <FontAwesomeIcon icon={faArrowCircleDown} /></span>
    </div>


</div>
<div className='text-xl bg-white w-full h-full'>
Education section

</div>
</>
)
}



export default AboutMe;
