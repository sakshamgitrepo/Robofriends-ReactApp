import React from 'react';
import './card.css'

const Card = ({id,names,email}) => {
   // const {id,names,email} = props
    return (
 <div className='crd dib tc pa3 ma2 br3 shadow-5 grow'>
    <img src={`https://robohash.org/${id}`} alt='robos'/>
    <h2>{names}</h2>
    <p>{email}</p>

 </div>
    )
}

export default Card