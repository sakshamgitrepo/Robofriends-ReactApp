import React from "react";

const Scroll =(props)=>{
return(
    
    <div style={{overflow:'scroll',height:'800px',border:'2px solid grey'}}>
        {props.children}
    </div>
)
}

export default Scroll