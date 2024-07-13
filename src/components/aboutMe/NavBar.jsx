
import React, { useState , useEffect,useRef} from 'react';
import Snowfall from './Snowfall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { open,close } from '../../features/model/modelSlice';
import {Link ,useLocation} from "react-router-dom"

const ListItem = ({ item, isActive, handleMouseEnter, handleMouseLeave }) => {
  return (
    <>
    <div className='flex flex-col  '>
    <div className='relative link overflow-hidden py-1 min-w-[100px] my-1 text-sm  cursor-pointer text-center'
     onMouseEnter={() => handleMouseEnter(item)}
     onMouseLeave={handleMouseLeave}>

        <div  className={isActive? "stick left animateY" :"stick left"} ></div>
        <div   className={isActive? "stick right animateY" :"stick right"}  ></div>
        <div   className={isActive? "stick top animateX" :"stick top"}  ></div>
        <div   className={isActive? "stick bottom animateX" :"stick bottom"}  ></div>

      {
                <Link to={`/${item.split(' ').join('')}`}> {item }
                </Link>

      }
    </div>  
    </div>

    </>

  );
};

 function NavBar(){
    const [activeItem, setActiveItem] = useState("Aboutme");
const currentPath=useLocation().pathname.replace('/','')
    const modelStates = useSelector((states)=> states.model);
    const dispatch = useDispatch()
    
const openSlider=()=>{
 dispatch(open())
 console.log(modelStates)
}
const closeSlider=()=>{
  dispatch(close())
}

    const handleMouseEnter = (item) => {
      setActiveItem(item);
    };


     const handleMouseLeave = () => {
      setActiveItem(false)
      // Do nothing if there's already an active item
      // Reset the activeItem state only if there's no other item active
    };

        const items = ['About me','Projects','GitHub','Blogs','Moments'];
   return (
<>

<div className="navLinks relative p-4 h-[80px] 
   row-start-1 row-end-3  w-full col-span-12  font-light flex   justify-end items-center  " >
<div className='mr-auto border rounded flex flex-col
 justify-around items-center ml-[20px] px-5 text-white '>

  <div className="name">&lt;Taposh Barman /&gt; </div>
  <div className="profession text-[#b3b3b3] " style={{fontSize:"12px"}}> - Full stack web developer</div>
 {currentPath=="Aboutme" ||currentPath=="" ? <Snowfall numFlakes={10} isActive={0}/> :""}
</div>
  <div className={`flex modelBox 
    md:relative  absolute
   z-10 min-w-[100px] justify-center
    items-center md:w-auto md:h-auto
     top-[30%]  md:top-0  
      text-sm font-mono md:mr-[30px] flex-col md:flex-row text-white `}>
    {items.map(
      (item) => (
      <ListItem
        key={item}
        item={item}
        isActive={activeItem === item}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave ={handleMouseLeave}
      />

    ))
    }
  </div>
</div> 
</>
)


 }
 export default NavBar