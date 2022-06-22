 import React from 'react';
 import Card  from './Card';

const Cardarray=({robots})=> {
    return(
        <div>
            {
                robots.map((user,i)=>{
                  return  <Card key={i} names = {robots[i].name } id = {robots[i].id} email = {robots[i].email}/> 
                })
            }
        </div>
   
    )
    
}

export default  Cardarray;