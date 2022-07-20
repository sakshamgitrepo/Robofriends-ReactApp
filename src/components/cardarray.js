 import React from 'react';
 import Card  from './Card';

const Cardarray=({robots})=> {
    return(
        <div>
            {
                robots.map((robot)=>{
                  return  <Card key={robot.id} robot={robot}/> 
                })
            }
        </div>
   
    )
    
}

export default  Cardarray;