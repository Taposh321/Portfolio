import React from "react"
export default function light({position,animationName,size}){
return (
<>
<div className={`light   absolute`}
style={{
    top:position.y+"px",
    left:position.x+"px",
    animationName:animationName,
    width:size.width,
    height:size.height
}}
>
</div>
</>
)
}