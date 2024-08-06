import React from "react"
function Hero({children}){
return (
<>
 
<div className="hero flex flex-col " >
    {children}
</div>
</>
);
}
export default Hero