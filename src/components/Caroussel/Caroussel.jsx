import React, {useState} from 'react'
import './Caroussel.css'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'


const Caroussel =({slides}) =>{
    const[current, setCurrent]=useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current +1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    if(!Array.isArray(slides)|| slides.length <=0){
        return null
    }


  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>

        {slides.map((slide, index)=> {
            return (
                <div 
                    className={index === current ? 'slide active' : 'slide'}
                     key={index}
                     >
                    {index === current && (
                        <img className='imageC' src={slide.pictures} alt="Image caroussel" />
                        )}
                     
                 </div>
                // <img key={index} className={index === current ? 'slide active' : 'slide'} src={slide.pictures} alt="Logement"/>
            )
        })}
    </section>
  )
}

export default Caroussel