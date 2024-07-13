import React from "react"
function Hero({children}){
return (
<>
 
<div className="hero overflow-y-hidden grid grid-cols-12
 grid-rows-1fr  grid-rows-auto h-[100vh] p-0 m-0  " >
    {children}
</div>
</>
);
}
export default Hero