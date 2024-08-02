import React from "react"
function Hero({children}){
return (
<>
 
<div className="hero  grid grid-cols-1fr
 grid-rows-1fr  grid-rows-auto min-h-screen h-full  p-0 m-0   " >
    {children}
</div>
</>
);
}
export default Hero