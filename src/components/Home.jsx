import React from 'react'
import About from '../about/About'
import Carousel from '../carousel/Carousel'

const Home = () => {
  return (
    <div className=''>
      {/* <img src={require("../assests/G20Small.png")} alt="" srcset="" /> */}
      <Carousel/>
      <div className='flex flex-row  '>
      <img src={require('../assests/Mann ki Baat.jfif')} alt="Mann ki Baat" className='w-[49.8%]  '/>
      <img src={require('../assests/g20 Banner.jpg')} alt="G20" className='w-[49.8%] ' />
      </div>
      <About/>
    </div>
  )
}

export default Home
