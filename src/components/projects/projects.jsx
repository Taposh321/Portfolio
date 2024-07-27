import React ,{useEffect, useState}from "react";
import Button from "../buttons/button1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import Typing from '../typingAnimation/typingAnimation'
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Project({img,features,type}){
const [status,setStatus]=useState(0);
    const Overlay=({s})=>{
      return(
        <>
        <div className={`overlay absolute w-full h-full flex justify-center 
        items-center bg-[rgba(100,100,100,.5)]`}>
< Button text={"View full"}/>
< Button text={"Live Demo"}/>
        </div>
        </>
      )  
    }
const handler=()=>{
    setStatus(1)
}
const handler2=()=>{
    setStatus(0)
}
    return(
        <>
   <div className="card 
 mt-4 overflow-hidden flex flex-col
  md:flex-row  md:w-[600px]  items-center  md:h-auto   relative md:justify-around  p-3">
<div onMouseEnter={handler} onMouseLeave={handler2} className="img 
   w-[400px] h-[200px] bg-gray-400
 overflow-hidden  relative">
  <Overlay s={status} />
   {/* <img className="object-cover w-full h-full" src={img} alt={type}  />  */}
</div>

<div  className="features text-black w-[350px] md:pl-5  text-sm 
 flex flex-col
  flex-grow  py-3 overfull-hidden">
<div className="businessType">
    Business Type: <span className="type">{type}</span>
</div>
<div  className="pt-2 flex flex-col">Features</div>
<div style={{fontSize:"12px"}} className="feature  pt-2">
{features.map((arrayItem,index)=>(
<div key={index} className="flex items-center"> 
     <FontAwesomeIcon icon={faCheckCircle} style={{color:"black"}} className="mr-1  " />
     <div>{arrayItem}</div>
</div>
))
}
</div>
<div className=" mt-auto  ">
    <Button style={{color:"white",
                  border:'1px solid lightgray',
                  backgroundColor:"#404040"

            }} 
            text={"Get like this"}/>
 </div>
</div>

</div>

 </>)}


function Projects(){
    const screenSize = useSelector((states)=> states.windowSize);

    const data=[{
        img:"./src/assets/photo/resturant.jpg",
        features:[
            "Payment Intregretion",
            "Highly scaleable with great perfomance",
            "Online Order system",
        ]
        ,
        type:"Resturant",
    },{
        img:"./src/assets/photo/resturant.jpg",
        features:[
            "Payment Intregretion",
            "Highly scaleable with great perfomance",
            "Online Order system",
        ]
        ,
        type:"Resturant",
    },{
        img:"./src/assets/photo/resturant.jpg",
        features:[
            "Payment Intregretion",
            "Highly scaleable with great perfomance",
            "Online Order system",
        ]
        ,
        type:"Resturant",
    }
    ]

    return(<>

<div
 className="projectContainer  row-start-3 row-span-12 col-start-1
 col-span-12  flex flex-col w-full ">
<motion.div
 className="slideDown"
 initial={{scaleY:1}}
 animate={{scaleY:0}}
exit={{ scaleY:0}}
transition={{duration:1 ,ease:[.22,1,.33,1],type:"spring",damping:10}} >
</motion.div>
<motion.div
 className="slideUp"
 initial={{scaleY:1}}
 animate={{scaleY:0}}
exit={{ scaleY:0}}
transition={{duration:1 ,ease:[.22,1,.33,1]}}>
</motion.div>

<div className="header flex justify-center relative">
 <div className="text-md text-white md:text-lg lg:text-xl
  w-[350px] md:w-[400px] lg:w-[500px] h-[80px] 
  flex justify-center items-center linearBlack ">

    <Typing style={"word"} content={"Hi, these are the projects I have proudly contributed to as a skilled MERN developer." } 
    speed={300} />
 </div>
</div>

 <div className="projects  flex flex-wrap  
  md:flex-row  relative">
 <div className="flex w-full  shadow-lg p-3">
<div className="sorting   text-sm  text flex items-center px-2">Catagory:</div>
<div className=" border border-l-red-50 text-sm  px-2 rounded-md flex items-center">Wesites</div>
<div className=" border ml-4 text-sm  px-2 rounded-md flex items-center">Logo</div>
<div className=" border ml-4 text-sm  px-2 rounded-md flex items-center">Other designs</div>
</div>

<div className="flex  w-full justify-center  flex-wrap ">
                {
    data.map((d,index)=>(
<Project key={index} img={d.img} features={d.features} type={d.type}   /> 
    )) }  


</div>

</div>


</div>
        </>)
}

export default Projects;