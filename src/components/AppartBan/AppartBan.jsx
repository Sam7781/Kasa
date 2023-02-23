import React from 'react'
import './AppartBan.css'
import { useState } from 'react';
function AppartBan(props) {
  const pictures= props.pictures;
  const [pict, setPict]= useState(0);

  const getclass = (index) =>{
    if(index === pict) return "actif";
    return "";
}

const next = () =>{
  setPict((pict + 1) % pictures.length)
}
const prev = () => {
  const newP = pict -1;
  if(newP < 0){
      setPict(pictures.length - 1 )
  return;
}
setPict(pict - 1) ;
}

  return (
    <div className='slide' >
      <div className='pictures'>
        {pictures.map((pic, index) => <img key={pic} src={pic} alt="" className={getclass(index)}></img>
        )}
    </div>
     <button className='butPrev' onClick={prev}>
      <i className='fas fa-chevron-left'></i>
    </button> 

    <span className='slideNum'>
        {pict + 1} / {pictures.length}
     </span>   
      <button className='butNext' onClick={next}>
      <i className='fas fa-chevron-right'></i>
    </button>
    
    

    
    </div>
  )
}

export default AppartBan