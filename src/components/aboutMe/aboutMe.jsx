import React, { useState ,useEffect, useRef } from 'react';
import Button from "../buttons/button1"
import { useDispatch, useSelector } from 'react-redux';
import { setHeight,setWidth } from '../../features/windowSize/windowSizeSlice';
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

    <div style={{marginLeft:-index*350+"px"}} className='reviewSlider transition-all  w-full flex'>
         <div className='card bg-white flex flex-col items-center justify-center gap-3  min-w-[350px] max-w-[350px] h-full p-5 rounded-lg'>
 
 <div className="flex flex-col items-center">
 <div className="clientPhoto w-[80px] h-[80px] rounded-full bg-gray-500"></div>
 <div className='flex flex-col items-center'><span>Jhon doe </span>  <span><small>CEO Company A</small></span>  </div>
  </div> 
  <div className="reviews text-sm">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nam tempore fugit quaerat omnis soluta. Mollitia, iure! Ipsum et.
  </div>
  <div>
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  </div>
  <div className='flex gap-2'>
      <FontAwesomeIcon icon={faFacebook} color='black' size='lg' />
      <FontAwesomeIcon icon={faLinkedin} color='black' size='lg' />
  </div>
         </div>
         <div className='testimonialCtard bg-white flex flex-col items-center justify-center gap-3  min-w-[350px] max-w-[350px]  h-full p-5 rounded-lg'>
 
 <div className="flex flex-col items-center">
 <div className="clientPhoto w-[80px] h-[80px] rounded-full bg-gray-500"></div>
 <div className='flex flex-col items-center'><span>Alex Smith </span>  <span><small>CEO,Company B</small></span>  </div>
  </div> 
  <div className="reviews text-sm">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nam tempore fugit quaerat omnis soluta. Mollitia, iure! Ipsum et.
  </div>
  <div>
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  </div>
  <div className='flex gap-2'>
      <FontAwesomeIcon icon={faFacebook} color='black' size='lg' />
      <FontAwesomeIcon icon={faLinkedin} color='black' size='lg' />


  </div>
         </div>
         <div className='testimonialCtard bg-white flex flex-col items-center justify-center gap-3 min-w-[350px] max-w-[350px]  h-full p-5 rounded-lg'>
 
 <div className="flex flex-col items-center">
 <div className="clientPhoto w-[80px] h-[80px] rounded-full bg-gray-500"></div>
 <div className='flex flex-col items-center'><span>Sofia </span>  <span><small>CEO,Company C</small></span>  </div>
  </div> 
  <div className="reviews text-sm">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nam tempore fugit quaerat omnis soluta. Mollitia, iure! Ipsum et.
  </div>
  <div>
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  </div>
  <div className='flex gap-2'>
      <FontAwesomeIcon icon={faFacebook} color='black' size='lg' />
      <FontAwesomeIcon icon={faLinkedin} color='black' size='lg' />
  </div>
         </div>
         <div className='testimonialCtard bg-white flex flex-col items-center justify-center gap-3  min-w-[350px] max-w-[350px]  h-full p-5 rounded-lg'>
 
 <div className="flex flex-col items-center">
 <div className="clientPhoto w-[80px] h-[80px] rounded-full bg-gray-500"></div>
 <div className='flex flex-col items-center'><span>Denial</span>  <span><small>CEO,Company D</small></span>  </div>
  </div> 
  <div className="reviews text-sm">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nam tempore fugit quaerat omnis soluta. Mollitia, iure! Ipsum et.
  </div>
  <div>
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  <FontAwesomeIcon icon={faStar} color='yellow' size='lg' />
  </div>
  <div className='flex gap-2'>
      <FontAwesomeIcon icon={faFacebook} color='black' size='lg' />
      <FontAwesomeIcon icon={faLinkedin} color='black' size='lg' />
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
    <div className=' trustedBy w-full flex md:flex-row flex-col  items-center pl-[20px] justify-center gap-5 py-10'>
   

      <div className='font-bold text-customTextColor '>TRUSTED BY:</div>

      <div className='flex flex-wrap ' >
      <div className='w-[70px] h-[70px] rounded '> <img src="../assets/photo/brands3.png" alt="Brand"  /></div>
      <div className='w-[70px] h-[70px] rounded'> <img src="../assets/photo/brands2.png" alt="Brand" /></div>
      <div className='w-[70px] h-[70px] rounded'> <img src="../assets/photo/brands.png" alt="Brand"  /></div>
      <div className='w-[70px] h-[70px] rounded '> <img src="../assets/photo/brands3.png" alt="Brand"  /></div>
      <div className='w-[70px] h-[70px] rounded'> <img src="../assets/photo/brands2.png" alt="Brand" /></div>

      </div>

    </div>

  </>)
}
function ProjectSlider() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(500);
  const [dots,setDots]=useState('');
  const [slides,setSlides]=useState(
    [
      {
id:"1",
heading:"Demo",
image_path:"/assets/projects/project1.jpg",
content:"Demo" 
  },
  {
    id:"2",
    heading:"Demo",
    image_path:"/assets/projects/project1.jpg",
    content:"Demo" 
      },{
        id:"3",
        heading:"Demo",
        image_path:"/assets/projects/project1.jpg",
        content:"Demo" 
          },
          {
            id:"4",
            heading:"Demo",
            image_path:"/assets/projects/project1.jpg",
            content:"Demo" 
              },{
                id:"5",
                heading:"Demo",
                image_path:"/assets/projects/project1.jpg",
                content:"Demo" 
                  },
                  {
                    id:"6",
                    heading:"Demo",
                    image_path:"/assets/projects/project1.jpg",
                    content:"Demo" 
                      },{
                        id:"7",
                        heading:"Demo",
                        image_path:"/assets/projects/project1.jpg",
                        content:"Demo" 
                          },
  
              
]);

const s=useRef(null);
const moveHandler =(e) => {
         const textRect =   e.target.getBoundingClientRect();
         const textX = e.clientX - textRect.left;
         const textY = e.clientY - textRect.top;

         const centerX = textRect.width / 2;
         const centerY = textRect.height / 2;

         const rotateX = (centerY - textY) / 12;
         const rotateY = (textX - centerX) / 12;
         e.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
   }

    const leaveHandler= (e) => {
      e.target.style.transform = `rotateX(0) rotateY(0)`;
     };
  
  const sliderContainer = useRef(null);
  const slideWidth = 250; 
  let currentlyShowingItems=Math.floor(width/slideWidth);

  const clickHandler = (dir) => {
    if (dir === "left") {
      if (index > 0) setIndex((prev) => prev - 1);
    } else {
      if (index <slides.length-currentlyShowingItems) setIndex((prev) => prev + 1); // 6 is the total number of items in this example
    }
  };

  useEffect(() => {
    let preValue=''
    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            const { width } = entry.contentRect;
            const newWidth = Math.floor(width / slideWidth) * slideWidth;
            let totalSlideShowAble= Math.floor(width / slideWidth);
            //set width only when there is a new width
            if(totalSlideShowAble!=preValue){
              setWidth(newWidth)
              preValue=totalSlideShowAble
            }
        }
    });
    resizeObserver.observe(sliderContainer.current);
    return () => resizeObserver.unobserve(sliderContainer.current);
    ;
  }, [slideWidth]);

const getDetails=()=>{
    fetch('http://localhost:5000/slideData')
    .then((response) =>  response.text())
    .then((data) =>{   
      alert(data)
      }
  ).catch((error)=>{
  console.log(error);
    })
  
}


  return (
    <div className='projectSlider flex flex-col w-full   p-[20px] pt-10 items-center '>
      <div className='text-2xl mr-auto text-white'>Projects</div>
      <div className='relative flex  w-full '>
        <div className='w-[50px] cursor-pointer min-h-full flex justify-center items-center '>
        <div 
          onClick={() => clickHandler("left")} 
          className='p-3   rounded-full flex justify-center w-[40px] items-center font-bold shadow-lg bg-white'>
          <FontAwesomeIcon icon={faArrowLeft} size='sm' />
        </div>
        </div>
        <div ref={sliderContainer}  className='flex  w-full justify-center overflow-hidden   '>
          <div style={{ width:width+12+"px" }}   className='  flex  items-center overflow-hidden  h-[160px] py-4 '>
            <div style={{ marginLeft: -index * 250+"px" }} className='  reviewSlider gap-3  transition-all w-full flex '>
             {
              slides.map((element,i)=>
                <div  key={i} onClick={getDetails}   className='slide relative flex items-center justify-center  min-w-[250px] '>
                 <div  onMouseMove={moveHandler} onMouseLeave={leaveHandler}  className='border slide-3d h-full w-full'>
                    <img  src={element.image_path} className='w-full h-full  object-cover' alt="" srcset="" />
                </div>
               </div>         
       
                )
             }
          
            </div>
          </div>
        </div>

        <div className='w-[50px] cursor-pointer  flex justify-center items-center'>
        <div 
          onClick={() => clickHandler("right")} 
          className='p-3   rounded-full flex justify-center mitems-center font-bold shadow-lg bg-white'>
          <FontAwesomeIcon icon={faArrowRight} size='sm' />
        </div>
        </div>
      </div>
      <div style={{width:width+'px'}} className={` min-w-[400px] flex flex-col gap-3 justify-center items-center md:items-start text-white py-10`}>
       <div className='text-xl'> Selected Project Descriptions</div>
       <div className='projectDetails flex flex-col md:flex-row'>
        <div className='projectPhoto w-[250px] h-[180px] bg-slate-50'>
        </div>
        <div className='flex'> 
          
        </div>
 
       </div>
      </div>
    </div>
  );
}
function Team(){
  return(<>
  <div className='team flex flex-col w-full justify-center items-center pt-10'>
    <div className='text-2xl text-white'>TEAMS</div>
    <div className='gap-3 p-2 rounded-lg flex'>
      
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[80px] h-[80px] rounded-full overflow-hidden bg-white'>
        <img src="../assets/photo/heroPhoto.png" className='w-full h-full object-cover' loading='lazy' alt="" srcset="" />
        </div>
        <div className="mateName text-center flex flex-col text-customTextColor">
          <span className=''>Taposh</span> 
          <span className='text-sm'>Web developer</span>  
          </div>
      </div>  
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[80px] h-[80px] rounded-full overflow-hidden bg-white'>
        <img src="../assets/team/Akash.png" className='w-full h-full object-cover'  loading='lazy' alt="" srcset="" />

        </div>
        <div className="mateName text-center flex flex-col text-customTextColor">
          <span className=''>Aakash</span> 
          <span className='text-sm'>Web developer</span>  
          </div>
      </div>  
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[80px] h-[80px] rounded-full overflow-hidden bg-white'>
        <img src="../assets/team/khusi.png" className='w-full h-full object-cover'  loading='lazy' alt="" srcset="" />

        </div>
        <div className="mateName text-center flex flex-col text-customTextColor">
          <span className=''>Khushi
            </span> 
          <span className='text-sm'>Ui designer</span>  
          </div>
      </div>  


</div>
<TrustedBy />
  </div>


  </>)

}
function effect3D({}){
  const moveHandler =(e) => {
    const textRect =   heroText.current.getBoundingClientRect();
    const textX = e.clientX - textRect.left;
    const textY = e.clientY - textRect.top;

    const centerX = textRect.width / 2;
    const centerY = textRect.height / 2;

    const rotateX = (centerY - textY) / 15;
    const rotateY = (textX - centerX) / 15;

    heroText.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

const leaveHandler= () => {
  heroText.current.style.transform = `rotateX(0) rotateY(0)`;
};
}
function AboutMe(){
   const useDis = useDispatch();
   const screenSize = useSelector((states)=> states.windowSize);
  
   const heroText=useRef(null);
   const moveHandler =(e) => {
            const textRect =   heroText.current.getBoundingClientRect();
            const textX = e.clientX - textRect.left;
            const textY = e.clientY - textRect.top;

            const centerX = textRect.width / 2;
            const centerY = textRect.height / 2;

            const rotateX = (centerY - textY) / 15;
            const rotateY = (textX - centerX) / 15;
            heroText.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }

       const leaveHandler= () => {
          heroText.current.style.transform = `rotateX(0) rotateY(0)`;
        };

    useEffect(()=>{
  const handler=()=>{
    useDis(setWidth(window.innerWidth));
    useDis(setHeight(window.innerHeight));
    }  
  
window.addEventListener("resize",handler)
handler()
    },[]);
    

return (
<>
<div className={` relative  flex flex-col w-full  `}>
  <section className=' relative p-0 m-0 hero flex flex-col w-full h-screen max-h-[1200px] ' >
  <NavBar />
   <div className={`flex ${  screenSize[0].width>=768 ?(screenSize[0].height<=700?'flex-row':"flex-row items-center") :'flex-col'}  w-full flex-1  relative  grid-lines`}>
        {/*^ Responsive swicth between flex-row and flex-col depending on width and height^ */}

     <section className= {`max-w-[600px] w-full  pl-[20px] ${screenSize[0].height<=700?'h-full justify-center ':' h-[400px] justify-end' }   flex flex-col `}>
        <div  className="relative  text-container text-white 
          max-w-[400px] my-5 " > 
            <div ref={heroText} onMouseMove={moveHandler} onMouseLeave={leaveHandler} className='headingAboutMe  text-3d md:text-4xl text-3xl tracking-wider  font-bold'> 
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
  <Button style={{color:"white",border:"1px solid lightgray",backgroundColor:"rgb(59,130,246)"}} text={"Contact me"}  />
  <Button style={{color:"white",border:"1px solid lightgray",marginLeft:"10px"}} text={"Resume"}  />
</>
}
</div>
<div className='  text-sm  text-white  flex h-[50px]  gap-5  mt-[20px]   '>
  <div className='relative follow h-full flex justify-center items-center  '> 
     <FontAwesomeIcon className='icon-hover' icon={faFacebook} size='2xl' />
  </div>
  <div className='relative  follow h-full flex justify-center items-center  ' > 
     <FontAwesomeIcon className='icon-hover' icon={faLinkedin}  size='2xl' />
  </div>
  <div className='relative  follow h-full flex justify-center items-center  '> 
      <FontAwesomeIcon className='icon-hover' icon={faTwitter}  size='2xl'  />
  </div>
  <div className='relative  follow h-full flex justify-center items-center '> 
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
               <div className="dp z-10 w-[200px] h-[200px] md:w-[200px] md:h-[200px] overflow-hidden flex justify-center items-center">
                   <img src="../assets/photo/heroPhoto.png" className='w-full h-full object-cover' loading='lazy' alt="" srcset="" />
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
 <div className='education  w-full  flex flex-col  '>


  <section className='flex grid-lines2 min-h-[500px] flex-col w-full py-[40px] justify-center  relative '>
 
  {/* <div className='text-xl bg-white ml-[20px] customBorderRadius z-[100] flex gap-5 w-[300px] pl-4 py-2 items-center  '> 
    <span className=" flex  items-center gap-2"> <GraduationCapIcon /> Educational Qualification</span>
  </div> */}
  <div className='flex flex-col lg:flex-row  w-full justify-center items-center '>
{/* Academic */}
  {/* <div className="flex inset-0 z-[100] rounded-sm w-full  h-[230px] shadow-md    items-center    "> 
    <div className='flex gap-5  w-full  max-w-[500px]  items-center  ' >
    <div className='myPhoto w-[150px] h-[150px] bg-white rounded-full overflow-hidden'>
    <img src="../assets/photo/heroPhoto.png" className='w-full h-full object-cover' loading='lazy' alt="" srcset="" />
    </div>
    <div className='flex flex-col gap-3 text-white'>
    <div className='heading text-lg  '>Academic Education </div>
      <ul className=' text-sm '>
        <li>Studied: BBA </li>
        <li>Major Subject: Accounting</li>
        <li>Institute: National University Of Bangladesh</li>
      </ul>
    </div>
    </div>
  </div> */}
{/* MERN */}
<div className='flex flex-col md:flex-row w-full   shadow-md rounded-sm  md:min-w-[500px] p-5 justify-between items-center '>
 
  <div className=' certificate  flex rounded justify-center flex-wrap w-full max-w-[25rem]  overflow-hidden '>
   <div className='w-[90%] h-[auto] mt-5 overflow-hidden'>
   <img src="../assets/fakeCertificate.jpeg" className=' w-full h-full object-contain' loading='lazy' alt="" srcset="" />

   </div>
  </div>

  <div className=' w-full flex flex-col gap-3 max-w-[500px]  lg:p-5 text-sm py-2 md:pl-5'>
  <h1 className='text-3xl md:text-4xl font-bold  text-white '> MERN Stack Course - <span className='text-blue-500'> Interactive Care</span></h1>
  <div className='text-white tracking-widest '>
  I successfully completed an intensive course on the MERN stack from Interactive Care.
  This course provided comprehensive training on the full-stack development process using MongoDB, Express.js, React, and Node.js.
  </div>
  <div className='text-white p-2 text-center bg-blue-500 w-[259px] rounded-md mr-auto'>Learn more about Interactive Cares</div>
  </div>
  </div>

  </div>
  {/* <div className="orb top-[50px] left-[50%]"></div>
  <div className="orb bottom-[30px]"></div>
  <div className="orb bottom-[0%] left-[70%]"></div> */}

  </section>
  <section className='min-h-[100vh] grid-lines3 pl-[20px]  flex w-full flex-col-reverse md:flex-row justify-center  items-center md:justify-between gap-3'>
  
  <div  className='aboutME  max-w-[500px] w-full h-full  min-h-[400px] flex flex-col gap-5'>
  <h1 className='font-bold md:text-4xl text-3xl text-white'> <span className='text-blue-500'>GET TO KNOW</span>  more about me</h1>
  <div className='text-white  tracking-wider  p-1'>
    I was born in Bangladesh and also grew up there.We are a small family made of cares, sympathies and loves.
    I have graduated from <u>National university</u> Bangladesh in Accounting as a major subject.
    When it comes to carrier, i have gathered experiences working in a few positions like cashier, seller, worker etc. Behind the scene,    &lt;Codeing&gt; was one of my passions and i have been working in various platforms and clients since 2 years.
    We are a <span className='font-bold text-blue-500'>TEAM</span>, expert in web developing, working togather. <strong> We believe in talent.</strong>
   
    

  </div>
  </div>
  <div  className='profilePhoto w-full max-w-[400px] h-[300px] md:mr-5 bg-white rounded-lg'>


  </div>
 
  </section>
<div className=' py-5' >
<div className='text-xl sticky top-[10px] md:top-0 md:relative flex justify-start md:justify-start   mb-auto w-full items-center gap-2 '>
 <div className='customBorderRadius ml-[20px]  flex gap-5 w-[300px] pl-4 py-2 bg-[#ebe8e8]'>
   <FontAwesomeIcon icon={faTasks} className='' size='lg' />Key Topics Covered</div>
 </div>

<div>
<div className='coveredTopics pl-[20px] pt-5 flex  flex-wrap  gap-5 justify-normal'>

<div className='card-item sticky top-[70px]  gap-3  md:top-0 md:relative rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px] shadow-lg p-5'>
 <div className='heading text-customTextColor flex justify-between lg:text-xl md:text-md text-md tracking-wider '>
  <strong>MongoDB:</strong> 
  <FontAwesomeIcon icon={faDatabase} className='' size='xl' />
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
<div className='card-item sticky top-[130px] gap-3 md:top-0 md:relative rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px]  p-5'>
 <div className='heading text-customTextColor flex justify-between  lg:text-xl md:text-md text-md tracking-wider '>
 <strong>  ExpressJs:</strong> 
 <div className='w-[30px] h-[30px] text-lg bg-white rounded-full font-bold text-blue-950 flex justify-center items-center'>
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
<div className='card-item sticky top-[190px] gap-3 md:top-0 md:relative rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px]  p-5'>
 <div className='heading text-customTextColor flex justify-between lg:text-xl md:text-md text-md tracking-wider '>
   <strong>React:</strong> 
   <FontAwesomeIcon icon={faReact} className='' size='xl' />
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
<div className='card-item sticky top-[250px] gap-3 md:top-0 md:relative rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px]  p-5'>
 <div className='heading text-customTextColor flex justify-between lg:text-xl md:text-md text-md tracking-wider '>
   <strong> NodeJs:
   </strong>
   <FontAwesomeIcon icon={faNodeJs} className='' size='xl' />  </div>
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
<div className='card-item sticky top-[310px] gap-3 md:top-0 md:relative rounded-lg flex flex-col w-full max-w-[500px]  md:w-[350px]  p-5'>
 <div className='heading text-customTextColor flex justify-between lg:text-xl md:text-md text-md tracking-wider '>
 <strong>NextJs:</strong>
 <div className='w-[30px] h-[30px] text-lg rounded-full font-bold text-blue-950 flex justify-center items-center'>
 <img src="../assets/icons/nextJs3.svg" alt="" srcset="" />
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
  <ProjectSlider />

  <Team />

</div>
<Testimonials />
<ContactForm />
</div>

</>
)
}



export default AboutMe;
