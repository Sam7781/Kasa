import React from 'react'
import './AppartHead.css'
function AppartHead(props) {
  
  return (
    <div className='appart_head'>
    <div className='appart-cont'>
        <h1 className='appart_title'>{props.selectAppart.title} </h1>
        <h2 className='appart_sub'>{props.selectAppart.location}</h2>
        <div className='appart_tags'>
           {props.selectAppart.tags.map((tag) => (
              <span key={tag}>{tag}</span>
   ) )}       
        </div>                
     </div>        
    <div className='appart_prop'>
    <div className='host_info'>
        <h3>
          <span>{props.selectAppart.host.name}</span>
          <span></span>
        </h3>
        <div className='host'>
          <img src={props.selectAppart.host.picture} alt='Image du propriétaire' />
        </div>
     </div>   
        <div className='rates'>

            {[1, 2, 3, 4, 5].map((num) =>(
                <span key={num} className={props.selectAppart.rating >= num ? "color" : ""}>★</span>))}
              
        </div>   

       </div>
       </div> 
  )
}

export default AppartHead