import React,{useState,useRef} from "react"



function Button({ text,style }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [transition, setTransition] = useState(0);
    const cta = useRef();
  
    const handler2 = (e) => {
      const boundingClientRect = cta.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - boundingClientRect.left - 75,
        y: e.clientY - boundingClientRect.top - 75,
      });
      setTransition(1);
    };
    const handler3 =()=>{
      setTransition(0);
    }
  
    return (
    <div ref={cta} onClick={handler2} style={style} onMouseLeave={handler3}  className={`cta-button
      overflow-hidden cursor-pointer
        relative text-center w-[90px] h-[35px] text-sm rounded-[20px]  p-1 `}>
        <div className={`shade  ${transition === 1 ? 'in ' : 'out'} bg-[lightgreen]`} style={{
          top: position.y + 'px',
          left: position.x + 'px',
        }}></div>
        <div className="absolute left-0 top-0
         w-full h-full flex justify-center items-center">{text}</div>
      </div>
    );
  }
  export default  Button
  