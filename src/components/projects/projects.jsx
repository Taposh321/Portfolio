import React ,{useState}from "react";
import Button from "../buttons/button1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';


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
   <div className="card bg-[#303030] rounded-md 
    ml-4 mt-4 overflow-hidden flex flex-col w-[23rem] ">
<div onMouseEnter={handler} onMouseLeave={handler2} className="img w-full overflow-hidden  max-h-[200px] bg-red-400 relative">
  <Overlay s={status} />
   <img className="object-cover w-full h-full" src={img} alt={type}  /> 
</div>

<div style={{fontSize:"15px"}} className="features flex flex-col w-full  flex-grow text-white px-[20px] py-3">
<div className="businessType">
    Business Type: <span className="type">{type}</span>
</div>
<div  className="pt-2 flex flex-col">Features</div>
<div style={{fontSize:"12px"}} className="feature  pt-2">
{features.map((arrayItem,index)=>(
<div key={index} className="flex items-center"> 
     <FontAwesomeIcon icon={faCheckCircle} style={{color:"lightgreen"}} className="mr-1  " />
     <div>{arrayItem}</div>
</div>
))
}

</div>
</div>

<div className=" mr-auto ml-[20px] flex flex-col
 justify-center items-center p  pb-3"><Button text={"Get like this"}/></div>
</div>

 </>)}


function Projects(){

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
<div className="projectContainer pt-5   row-start-3 row-span-12 col-start-1
 col-span-12  flex flex-col w-full">
<div className="header">
<h4 className="text-white px-6 w-full text-xl">Projects</h4>
</div>
<div className="projects  flex-wrap  overflow-y-scroll justify-center p-3  flex 
 items-center md:flex-row ">
{
    data.map((d,index)=>(
<Project key={index} img={d.img} features={d.features} type={d.type}   /> 
    ))
}

</div>


</div>
        </>)
}

export default Projects;