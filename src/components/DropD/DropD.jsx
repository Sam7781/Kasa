import React from 'react'
import './DropD.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp  } from '@fortawesome/free-solid-svg-icons';
const Up = <FontAwesomeIcon icon={faAngleUp} />
const Down = <FontAwesomeIcon icon={faAngleDown} />

function DropD(props) {
  const [cont, setCont] =useState(false);
 const openHandler = () => {
  setCont((Cont) => !Cont);
 }
;


  return (
    <div onClick={openHandler} className='appart_desc'>
          <p className='desc_title'>
              <span>{props.title}</span>
                   {!cont ? <i className="icone" >{Down} </i> : <i className="icone">{Up}</i>}
          </p>
            {cont && <div className='cont'>{props.content}</div>}
          </div> 
  )
}

export default DropD