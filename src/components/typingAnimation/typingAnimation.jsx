import React, { useState , useEffect} from 'react';

export default function TypingAnimation({content,speed,style="latter"}){


    const[index,setIndex]=useState(0);
    const [displayContent,setDisplayContent]= useState('');
    let nc
    if(style=="latter"){
       nc=content
    }else{
      nc=content.split(" ").map((e,i)=>{
        return <span key={i} className="fadeIn">{e +" "}</span> 
          
      })
    }
    useEffect(()=>{
       const timeOut = setTimeout(()=>{
        if( index<nc.length){
          setIndex((index)=>index+1)
        }
        },speed);

        return () => {
          return clearTimeout(timeOut)
        };
    },[index,nc]);
    
    //set index to 0 to retstart typing animation when switching to other nav
    useEffect(()=>{
      setIndex(0)
    },[content])
  
    useEffect(() => {
      setDisplayContent(nc.slice(0,index));
  },[index]);
    
    
    return(<>
    <span className='typingContainer'>
    {displayContent}
    </span>
    </>)
    }
    

