import React, { useState ,useEffect, useRef } from 'react';
import Button from "../buttons/button1"
import { useDispatch, useSelector } from 'react-redux';
import { setHeight,setWidth } from '../../features/windowSize/windowSizeSlice';
import {motion} from 'framer-motion'
import '../../assets/photo/heroPhoto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin,faGit,faTwitter, faGithub,faReact,faNodeJs} from '@fortawesome/free-brands-svg-icons';
import {faArrowDown ,faGraduationCap,faDatabase,faTasks,faStar,faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar'

function Testimonials (){
  const [index,setIndex]=useState(0)

  const clickHandler=(dir)=>{
    if(dir=="left"){
      if(Math.abs(index)>=1) {setIndex((pre)=>pre-1)}
    }else{
      if(Math.abs(index) < 3) {setIndex((pre)=>pre+1)}
    }
  }
  

  return(<>
  <div className='testimonials flex flex-col  gap-5   p-5 items-center' >
<div className='flex flex-col items-center justify-center text-black'> 
 <div className=' text-2xl gradient-text '>  Clients Reviews</div>  
<small className='text-gray-500'>What my clients say</small>
</div>
<div className='relative  flex px-[50px] items-center  '>
<div onClick={()=>{clickHandler("left")}} className='p-3 w-[40px]  h-[40px] flex justify-center items-center  z-1 left-0 rounded-full font-bold shadow-lg bg-white absolute '>
<FontAwesomeIcon icon={faArrowLeft} className='' size='sm' />
</div>
<div onClick={()=>{clickHandler("right")}} className='p-3 w-[40px]  h-[40px]  flex justify-center items-center rounded-full z-1 bg-white  shadow-lg right-0 absolute '>
<FontAwesomeIcon icon={faArrowRight} className='' size='sm' />
</div>
<div className="reviewCardContainer  overflow-hidden flex  w-full h-[380px]   max-w-[350px]  lg:max-w-[700px]">
{/* review slider */}
<div style={{marginLeft:-index*350+"px"}} className=' reviewSlider transition-all  w-full flex'>
<div className='card flex flex-col items-center justify-center gap-3  min-w-[350px] max-w-[350px] h-full p-5 rounded-lg'>
 
 <div className="flex flex-col items-center">
 <div className="clientPhoto w-[80px] h-[80px] rounded-full bg-gray-500"></div>
 <div className='flex flex-col items-center'><span>Jhon doe </span>  <span><small>CEO Company A</small></span>  </div>
  </div> 
  <div className="reviews text-sm">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nam tempore fugit quaerat omnis soluta. Mollitia, iure! Ipsum et.
  </div>
  <div>
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  </div>
  <div className='flex gap-2'>
      <FontAwesomeIcon icon={faFacebook} color='black' size='md' />
      <FontAwesomeIcon icon={faLinkedin} color='black' size='md' />


  </div>
</div>
<div className='card flex flex-col items-center justify-center gap-3  min-w-[350px] max-w-[350px]  h-full p-5 rounded-lg'>
 
 <div className="flex flex-col items-center">
 <div className="clientPhoto w-[80px] h-[80px] rounded-full bg-gray-500"></div>
 <div className='flex flex-col items-center'><span>Alex Smith </span>  <span><small>CEO,Company B</small></span>  </div>
  </div> 
  <div className="reviews text-sm">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nam tempore fugit quaerat omnis soluta. Mollitia, iure! Ipsum et.
  </div>
  <div>
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  </div>
  <div className='flex gap-2'>
      <FontAwesomeIcon icon={faFacebook} color='black' size='md' />
      <FontAwesomeIcon icon={faLinkedin} color='black' size='md' />


  </div>
</div>
<div className='card flex flex-col items-center justify-center gap-3 min-w-[350px] max-w-[350px]  h-full p-5 rounded-lg'>
 
 <div className="flex flex-col items-center">
 <div className="clientPhoto w-[80px] h-[80px] rounded-full bg-gray-500"></div>
 <div className='flex flex-col items-center'><span>Sofia </span>  <span><small>CEO,Company C</small></span>  </div>
  </div> 
  <div className="reviews text-sm">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nam tempore fugit quaerat omnis soluta. Mollitia, iure! Ipsum et.
  </div>
  <div>
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  </div>
  <div className='flex gap-2'>
      <FontAwesomeIcon icon={faFacebook} color='black' size='md' />
      <FontAwesomeIcon icon={faLinkedin} color='black' size='md' />


  </div>
</div>
<div className='card flex flex-col items-center justify-center gap-3  min-w-[350px] max-w-[350px]  h-full p-5 rounded-lg'>
 
 <div className="flex flex-col items-center">
 <div className="clientPhoto w-[80px] h-[80px] rounded-full bg-gray-500"></div>
 <div className='flex flex-col items-center'><span>Denial</span>  <span><small>CEO,Company D</small></span>  </div>
  </div> 
  <div className="reviews text-sm">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nam tempore fugit quaerat omnis soluta. Mollitia, iure! Ipsum et.
  </div>
  <div>
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='md' />
  </div>
  <div className='flex gap-2'>
      <FontAwesomeIcon icon={faFacebook} color='black' size='md' />
      <FontAwesomeIcon icon={faLinkedin} color='black' size='md' />


  </div>
</div>
</div>


</div>


</div>


</div>

  
  </>)
}
function ContactForm(){
  const [input,setInput]=useState({email:"",massage:""})
const handler=(data)=>{

setInput({...input,[data.name]:data.value})
}
  return(<>
  <div className='contact w-full  flex justify-center py-[50px] items-center'>
  <div className=' flex flex-col justify-center w-[350px] rounded-md shadow-lg  bg-white'>
    <div className='text-2xl  gradient-text  tracking-wider pl-[40px] pt-5 font-semibold'>Email me</div>
    <div className='w-full h-full px-[40px] py-[30px] flex flex-col gap-5  text-sm'> 
        <input type="text" className='border-b p-1'placeholder='Full name' id="name" name="name"  value={input.name} onChange={(e)=> handler(e.target)} />
        <input type="email" className='border-b p-1' placeholder='Email'  id="email" name="email" value={input.email} onChange={(e)=> handler(e.target)}/>
        <input type="text" className='border-b p-1' placeholder='Subject'  id="subject" name="subject" value={input.subject} onChange={(e)=> handler(e.target)}/>
        <textarea  className='border resize-none p-1' placeholder='Write a massage'   id="massage" name="massage" value={input.massage} onChange={(e)=> handler(e.target)}/>
          <button className='bg-[#000000]  p-1 text-white rounded-full'>Send</button>
  </div>
    </div>
  </div>
  </>)
}

function TrustedBy(){
  return(<>
    <div className=' trustedBy w-full flex-col gap-5  h-[350px] flex justify-center items-center'>
    <Team />

      <div className='font-bold text-customTextColor'>TRUSTED BY:</div>
      <div className='flex' >
      <div className='w-[70px] h-[70px] rounded '> <img src="./src/assets/photo/brands3.png" alt="" srcset="" /></div>
      <div className='w-[70px] h-[70px] rounded'> <img src="./src/assets/photo/brands2.png" alt="" srcset="" /></div>
      <div className='w-[70px] h-[70px] rounded'> <img src="./src/assets/photo/brands.png" alt="" srcset="" /></div>
      <div className='w-[70px] h-[70px] rounded '> <img src="./src/assets/photo/brands3.png" alt="" srcset="" /></div>
      <div className='w-[70px] h-[70px] rounded'> <img src="./src/assets/photo/brands2.png" alt="" srcset="" /></div>
      <div className='w-[70px] h-[70px] rounded'> <img src="./src/assets/photo/brands.png" alt="" srcset="" /></div>

      </div>

    </div>

  </>)
}

function Team(){
  return(<>
  <div className='flex flex-col w-full justify-center items-center'>
    <div className='text-2xl text-white'>TEAMS</div>
    <div className='gap-3 p-2 rounded-lg flex'>
      
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[80px] h-[80px] rounded-full overflow-hidden bg-white'>
        <img src="./src/assets/photo/heroPhoto.png" className='w-full h-full object-cover' alt="" srcset="" />
        </div>
        <div className="mateName text-center flex flex-col text-customTextColor">
          <span className=''>Taposh</span> 
          <span className='text-sm'>Web developer</span>  
          </div>
      </div>  
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[80px] h-[80px] rounded-full overflow-hidden bg-white'>
        <img src="./src/assets/team/akash.png" className='w-full h-full object-cover' alt="" srcset="" />

        </div>
        <div className="mateName text-center flex flex-col text-customTextColor">
          <span className=''>Aakash</span> 
          <span className='text-sm'>Web developer</span>  
          </div>
      </div>  
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[80px] h-[80px] rounded-full overflow-hidden bg-white'>
        <img src="./src/assets/team/khusi.png" className='w-full h-full object-cover' alt="" srcset="" />

        </div>
        <div className="mateName text-center flex flex-col text-customTextColor">
          <span className=''>Khushi
            </span> 
          <span className='text-sm'>Ui designer</span>  
          </div>
      </div>  


</div>
  </div>


  </>)

}
function AboutMe(){
  
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
  
  {/* <motion.div
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
      </motion.div> */}

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
         full stack MERN web developer </div>
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
<div className=' follow text-sm  text-white  flex h-[50px]   mt-[20px]   '>
  <div className='relative w-[50px] h-full flex justify-center items-center  '> 
     <FontAwesomeIcon className='icon-hover' icon={faFacebook} size='2xl' />
  </div>
  <div className='relative w-[50px] h-full flex justify-center items-center  ' > 
     <FontAwesomeIcon className='icon-hover' icon={faLinkedin}  size='2xl' />
  </div>
  <div className='relative w-[50px] h-full flex justify-center items-center  '> 
      <FontAwesomeIcon className='icon-hover' icon={faTwitter}  size='2xl'  />
  </div>
  <div className='relative w-[50px] h-full flex justify-center items-center '> 
     <FontAwesomeIcon className='icon-hover' icon={faGithub}  size='2xl'  />
  </div> 
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
                   <img src="../src/assets/photo/heroPhoto.png" className='w-full h-full object-cover' alt="" srcset="" />
               </div>
              </div>
           </div>  
 
    </section>

    <div className='text-white text-sm absolute bottom-5  w-full flex flex-col justify-center items-center '>
      <span>Scroll down</span>  <br />
       <span className='arrow absolute'>  
     <FontAwesomeIcon icon={faArrowDown} className='' size='sm' />
    </span>
    </div>
    </div>
  </section>
<div className='education  w-full  flex flex-col '>
  <div className='text-2xl py-3 pl-[20px]  text-customTextColor flex items-center '> 
  <FontAwesomeIcon icon={faGraduationCap} className='' size='lg' />
    <span className="ml-2 py-5 ">Educational Qualification</span>
  </div>

  <section className='flex flex-col lg:flex-row  pl-[20px]   justify-center items-center '>
  <div className="flex flex-col w-full lg:w-[50%] max-w-[500px] lg:max-w-full     "> 
    <div className='heading text-xl text-customTextColor pb-5'>Academic Education </div>
    <div className='flex gap-5 py-5  h-[200px] customShadow'>
    <div className='myPhoto w-[200px] h-[150px] bg-white rounded-lg border border-white'>
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
 
      <div className='flex customShadow md:flex-row flex-col  md:h-[200px] w-full justify-center gap-3 items-center py-5'>
      <div className='text-gray-400 bg-white border rounded-lg  flex-wrap min-w-[200px] h-[150px] '></div>

  <div className=' text-customTextColor text-sm py-2 lg:pl-2'>
  I successfully completed an intensive course on the MERN stack from Interactive Care.
  This course provided comprehensive training on the full-stack development process using MongoDB, Express.js, React, and Node.js.
  </div>
  </div> 
  </div>
  </section>

  <div className='coveredTopics pl-[20px] py-5 flex flex-wrap justify-center md:justify-normal gap-5 '>
 
 <div className='text-xl flex justify-start md:justify-start text-customTextColor w-full items-center gap-2 '>
 <FontAwesomeIcon icon={faTasks} className='' size='lg' />
 Key Topics Covered
 </div>

<div className='card-item rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px] shadow-lg p-5'>
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
<div className='card-item rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px] shadow-lg p-5'>
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
<div className='card-item rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px] shadow-lg p-5'>
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
<div className='card-item rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px] shadow-lg p-5'>
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
<div className='card-item rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px] shadow-lg p-5'>
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
  <TrustedBy />

</div>
<Testimonials />
<ContactForm />

</div>

</>
)
}



export default AboutMe;
