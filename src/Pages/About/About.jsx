import React from 'react'
import AboutContent from '../../Datas/About'
import './About.css'
import img from  '../../Assets/B_apropos.png'
import Banner from './../../components/Banner/Banner';

function About() {
  
  return (
    <div>
   
      <Banner cover={img} text={''}/>
      <div className='aboutCont'>
        <AboutContent/>
      </div>
      
    </div>
  )
}

export default About