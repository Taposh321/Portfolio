import React from "react"
export default function light({position,animationName}){
return (
<>
<div className={`light   absolute`}
style={{
    top:position.y+"px",
    left:position.x+"px",
    animationName:animationName,
}}
>
</div>
</>
)
}