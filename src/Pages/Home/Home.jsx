import React from 'react'
import Banner from '../../components/Banner/Banner'
import Apparts from '../../components/Apparts/Apparts'
import img from '../../Assets/banner.png'

function Home() {
  return (
    <div>
 
      <Banner cover={img} text={'Chez vous, partout et ailleurs'}/>
      <Apparts/>
     
    </div>
  )
}

export default Home