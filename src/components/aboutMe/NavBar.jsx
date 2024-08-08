
import React, { useState , useEffect,useRef} from 'react';
import Snowfall from './Snowfall';
import { useDispatch, useSelector } from 'react-redux';
import { open,close } from '../../features/model/modelSlice';
import {Link ,useLocation} from "react-router-dom"
import Typing from '../typingAnimation/typingAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faTimes,faBars } from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ item, isActive, handleMouseEnter, handleMouseLeave }) => {
  return (
    <>
    <div className='flex flex-col mt-3'>
    <div className='relative link overflow-hidden py-1 min-w-[100px]  text-sm  cursor-pointer text-center'
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
}
const closeSlider=()=>{

  dispatch(close())

}
const handleMouseEnter = (item) => {
      setActiveItem(item);
    };
 const handleMouseLeave = () => {
      setActiveItem('')
    };

        const items = ['About me','Projects','GitHub','Blogs','Moments'];
   return (
<>
<div id='navLinks' className="navLinks relative 
   w-full col-span-12 py-5 h-[69px]  font-light flex   justify-end items-center  " >

<div className='logo mr-auto border rounded flex flex-col
 justify-around items-center ml-[20px] px-5 text-white '>

  <div className="name">&lt;{<Typing content={currentPath=="Aboutme" ||currentPath==""?"Taposh Barman " :currentPath } speed={100} />}/&gt; </div>
  <div className="profession text-[#b3b3b3] " style={{fontSize:"12px"}}> - Full stack web developer</div>
 {currentPath=="Aboutme" ||currentPath=="" ? <Snowfall numFlakes={10} isActive={0}/> :""}
</div>

<div onClick={openSlider} className='px-5 md:hidden'>
<FontAwesomeIcon icon={faBars} className='text-white' />

  </div>

  <div className={`flex modelBox 
   md:relative fixed md:p-0 w-[150px] bg-white transition-all  md:transition-none md:bg-transparent text-black h-screen
   z-10 min-w-[100px] justify-center  
  ${modelStates[0].status}  md:right-0
    items-center md:w-auto md:h-auto top-0  
      text-sm font-mono md:mr-[30px] flex-col md:flex-row md:text-white `}>

    <div onClick={closeSlider} className='top-[10px] absolute  text-center md:hidden'>
    <FontAwesomeIcon icon={faTimes} style={{color:'red'}} />
    </div>
    
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