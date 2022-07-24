import React, { useState } from 'react'
import './index.css'

function Card({emoji,heading,detail,popUp}) {
 /*  const {state,setState}=useState(false); */
  return (
    <div className='Card'>
      <img src={emoji} alt="" />
    <span>{heading}</span>
    <p>{detail}</p>
    <button /* onClick={()=>setState(true)} */ className='button'>Learn More</button>
    
    {/* {state? <span>{popUp}</span>:null}  */}
    
    </div>
  )
}

export default Card