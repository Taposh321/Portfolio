import React, { useState ,useEffect, useRef } from 'react';
import Button from "../buttons/button1"
import { useDispatch, useSelector } from 'react-redux';
import { setHeight,setWidth } from '../../features/windowSize/windowSizeSlice';
import {motion} from 'framer-motion'
import '../../assets/photo/heroPhoto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin,faGit,faTwitter, faGithub,faReact,faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faTimes,faBars,faArrowDown ,faGraduationCap,faDatabase,faTasks} from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar'
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
handler()
},[useDis]);

return (
<>

<div
 className={` relative  flex flex-col w-full  `}>

  <section className=' relative p-0 m-0  flex flex-col w-full h-screen max-h-[1200px] ' >
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
<NavBar />


      <div  className={`flex ${  screenSize[0].width>=768 ?(screenSize[0].height<=700?'flex-row':"flex-row items-center") :'flex-col'}  w-full flex-1  relative  grid-lines`}>
        {/*^ Responsive swicth between flex-row and flex-col depending on width and height^ */}

     <section className= {`max-w-[600px] w-full  pl-[20px] ${screenSize[0].height<=700?'h-full justify-center ':' h-[500px] justify-end' }   flex flex-col `}>
        <div className="relative text-white 
          max-w-[400px] my-5 " > 
            <div className='headingAboutMe text-3xl tracking-wider  font-semibold '> 
            Hi, This is <span> </span>  
             <span className='text-red-500'>T</span>
            <span className='text-yellow-400'>a</span>
            <span className='text-green-300'>p</span>
            osh, 
        a full stack MERN web developer </div>
  </div> 
  <div className="aboutMe flex  max-w-[500px]  justify-center
   items-stert  flex-col  w-full  rounded-md  ">  
<div className='flex  flex-col items-center  text-white antialiased -tracking-tighter ' style={{fontSize:"12px"}}>
I have 5 years of experances in 
front-end and backend development as well passionate about building efficient, scalable
and user-friendly solutions. Let's bring your idea into reality.
</div>
<div className='flex flex-col cta pt-5'>
  <div className='flex'>
{
  <> 
  <Button style={{color:"white",border:"1px solid lightgray"}} text={"Let's do it"}  />
  <Button style={{color:"white",border:"1px solid lightgray",marginLeft:"10px"}} text={"Resume"}  />
</>
}
</div>
<div className='follow text-sm py-5 text-white flex items-center mt-[20px]  '>
  <span>  <FontAwesomeIcon icon={faFacebook} className='' size='2xl' />
  </span>
  <span>  <FontAwesomeIcon icon={faLinkedin} className='pl-4' size='2xl' />
  </span>
  <span>  <FontAwesomeIcon icon={faTwitter} className='pl-4'size='2xl'  />
  </span>
  <span>  <FontAwesomeIcon icon={faGithub} className='pl-4' size='2xl'  />
  </span> 
</div>
</div>
</div> 
    </section>

    <section className={` w-full md:flex
    ${screenSize[0].height<=700?'hidden':'flex-grow'} 
    `}>
           <div className="w-full h-full relative flex  " >
              <div className="z-[29] relative w-full overflow-hidden flex justify-center items-start  md:items-center pt-5 ">
                 <div className='absolute bg-white light w-[300px] h-[300px] justify-center items-center  '></div>
               <div className="dp z-10 w-[250px] h-[250px] md:w-[300px] md:h-[300px] overflow-hidden flex justify-center items-center">
                   <img src="./src/assets/photo/heroPhoto.png" className='w-full h-full object-cover' alt="" srcset="" />
               </div>
              </div>
           </div>  
 
    </section>

    <div className='text-white text-sm absolute bottom-5  w-full flex flex-col justify-center items-center '>
      Scroll down <br /> <span className='arrow'>   <FontAwesomeIcon icon={faArrowDown} className='' size='sm' />
</span>
    </div>

    </div>
  </section>
<div className='min-h-screen pl-[20px] education  w-full  flex flex-col '>
 
 
  <div className='text-2xl py-3  text-customTextColor flex items-center justify-center lg:justify-normal '> 
    <FontAwesomeIcon icon={faGraduationCap} className='' size='xl' />
    <span className="ml-2">Educational Qualification</span>
  </div>

  <section className='flex flex-col lg:flex-row py-5 gap-10  justify-center items-center '>

  <div className="flex flex-col w-full lg:w-[50%] max-w-[500px] lg:max-w-full     "> 
    <div className='heading text-xl text-customTextColor pb-5'>Academic Education </div>

    <div className='flex gap-5 p-5  h-[200px] customShadow'>
    <div className='myPhoto w-[200px] h-[150px] bg-gray-400 rounded-lg border border-white'>
    <img src="./src/assets/photo/heroPhoto.png" className='w-full h-full object-cover' alt="" srcset="" />
    </div>
    <div className=''>
      <ul className='py-5 text-customTextColor text-sm '>
        <li>Full Name: Taposh Barman</li>
        <li>Studied: BBA</li>
        <li>Major Subject: Accounting</li>
        <li>Institute: National University Of Bangladesh</li>
      </ul>
    </div>
    </div>
  </div>

  <div className='flex flex-col w-full h-full lg:w-[50%] max-w-[500px] lg:max-w-full   justify-center '>
     <h1 className='text-customTextColor text-xl pb-5 '> MERN Stack Course - Interactive Care</h1>
 
      <div className='flex customShadow md:flex-row flex-col p-5  md:h-[200px] w-full justify-center items-center py-5'>
      <div className='text-gray-400 bg-white  flex-wrap min-w-[200px] h-[150px] '></div>

  <div className=' text-customTextColor text-sm p-2'>
  I successfully completed an intensive course on the MERN stack from Interactive Care.
 This course provided comprehensive training on the full-stack development process using MongoDB, Express.js, React, and Node.js.

  </div>
    </div> 

  </div>
  </section>

  <div className='coveredTopics py-5 flex flex-wrap justify-center md:justify-normal gap-5 '>
 
 <div className='text-xl flex justify-center md:justify-start text-customTextColor w-full items-center gap-2 '>
 <FontAwesomeIcon icon={faTasks} className='' size='xl' />
 Key Topics Covered
 </div>

<div className='card-item rounded-lg flex flex-col w-[350px] shadow-lg p-5'>
 <div className='heading text-customTextColor flex justify-between lg:text-xl md:text-md text-md tracking-wider '>
  <strong>MongoDB:</strong> 
  <FontAwesomeIcon icon={faDatabase} className='' size='2xl' />
 </div>
 <div>
   <ul className='p-0 m-0 list-disc list-inside text-customTextColor text-sm'>
     <li>Database design and management
     </li>
     <li>CRUD operations
     </li>
     <li>Aggregation framework
     </li>
     <li>Indexing and performance optimization
     </li>
   </ul>
 </div>
</div>
<div className='card-item rounded-lg flex flex-col w-[350px] shadow-lg p-5'>
 <div className='heading text-customTextColor flex justify-between  lg:text-xl md:text-md text-md tracking-wider '>
 <strong>  ExpressJs:</strong> 
 <div className='w-[40px] h-[40px] text-lg bg-white rounded-full font-bold text-blue-950 flex justify-center items-center'>
   EX</div>

 </div>
 <div>
   <ul className='p-0 m-0 list-inside list-disc text-customTextColor text-sm'>
     <li>Building RESTful APIs
     </li>
     <li>Middleware functions
     </li>
     <li>Error handling
     </li>
     <li>Authentication and authorization
     </li>
   </ul>
 </div>
</div>
<div className='card-item rounded-lg flex flex-col w-[350px] shadow-lg p-5'>
 <div className='heading text-customTextColor flex justify-between lg:text-xl md:text-md text-md tracking-wider '>
   <strong>React:</strong> 
   <FontAwesomeIcon icon={faReact} className='' size='2xl' />
 </div>
 <div>
   <ul className='p-0 m-0 list-disc list-inside text-customTextColor text-sm'>
     <li>Component-based architecture
     </li>
     <li>State and props management
     </li>
     <li>Hooks and functional components
     </li>
     <li>Optimizing rendering perfomaces
     </li>
     <li>React Framework <strong >Next.js</strong>
     </li>
   </ul>
 </div>
</div>
<div className='card-item rounded-lg flex flex-col w-[350px] shadow-lg p-5'>
 <div className='heading text-customTextColor flex justify-between lg:text-xl md:text-md text-md tracking-wider '>
   <strong> NodeJs:
   </strong>
   <FontAwesomeIcon icon={faNodeJs} className='' size='2xl' />  </div>
 <div>
   <ul className='p-0 m-0 list-disc list-inside text-customTextColor text-sm'>
     <li>Server-side JavaScript execution
     </li>
     <li>Event-driven architecture
     </li>
     <li>Asynchronous programming
     </li>
     <li>Real time technologies like socket.io
     </li>

     <li>Building and deploying applications
     </li>


   </ul>
 </div>
</div>
<div className='card-item rounded-lg flex flex-col w-[350px] shadow-lg p-5'>
 <div className='heading text-customTextColor flex justify-between lg:text-xl md:text-md text-md tracking-wider '>
 <strong>NextJs:</strong>
 <div className='w-[40px] h-[40px] text-lg rounded-full font-bold text-blue-950 flex justify-center items-center'>
 <img src="./src/assets/icons/nextJs3.svg" alt="" srcset="" />
   </div>

 </div>
 <div>
   <ul className='p-0 m-0 list-disc list-inside text-customTextColor text-sm'>
     <li>Client and server side rendering
     </li>
     <li>SEO (Search Engine Optimization) friendly
     </li>
     <li>All features like code slipting,file-based routing ,data fatcing etc
     </li>
     <li>Building and deploying applications
     </li>


   </ul>
 </div>
</div>

  </div>

</div>

</div>

</>
)
}



export default AboutMe;
