import React from 'react';

const Searchbox = ({searchange})=>{
    return(
        <div>
            <input className='pa3 mb3 br3 ba b--green bg-lightest-blue' type="search" placeholder='Search Robo Names' onChange={searchange}/>
        </div>
    )
}

export default Searchbox