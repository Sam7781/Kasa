import React from 'react'
import back from '../../Assets/back_banner.png'
import './Banner.css'
function Banner(props) {
  return (
    <div className='banner'>
    <img className='bannerimg' src={props.cover} alt=""/>
    <div className="banniere-sombre"></div>
        <h2>{props.text}</h2>
    </div>
  )
}

export default Banner