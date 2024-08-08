import React from "react"
import Footer from './footer/footer'

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