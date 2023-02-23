import React from 'react'
import './Appart.css'
import {Link} from 'react-router-dom'


function Appart(props) {
  const state={
   AppartId: props.id
  }

return (
    
    <Link to={"/Appart/" + props.id+ "/#"} state={state} className='lienApp'>
      <div className='log-item'>
          <div className='card-wrapper'>
            <img className='card-img' src={props.image} alt={props.title}/>
              <div className='card-title'>
                  <h2 className='title'>
                    {props.title}
                  </h2>
              </div>
          </div>
      </div>
     </Link>
    )
}

export default Appart


