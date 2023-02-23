import React from 'react'
import './Apparts.css'
import {Log} from '../../Datas/Log'
import Appart from '../Appart/Appart'

function Apparts() {
    const cards = Log.map(card => {
        return <Appart image={card.cover} title={card.title}  id={card.id} key={card.id}/>
    })

  return (
    <div className='section-wrapper'>
    <div className='log-items' >
           {cards}
        </div>
    </div>
    

  )
}

export default Apparts
