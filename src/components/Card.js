import React from 'react';
import './card.css'

const Card = ({robot}) => {
   const {id,name,email} = robot
    return (
 <div className='crd dib tc pa3 ma2 br3 shadow-5 grow'>
    <img src={`https://robohash.org/${id}`} alt='robos'/>
    <h2>{name}</h2>
    <p>{email}</p>

 </div>
    )
}

export default Card