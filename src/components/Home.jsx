import React from 'react'
import About from '../about/About'
import Carousel from '../carousel/Carousel'

const Home = () => {
  return (
    <div className=''>
      {/* <img src={require("../assests/G20Small.png")} alt="" srcset="" /> */}
      <Carousel/>
      <div className='flex flex-col md:flex-row lg:flex-row  '>
      <img src={require('../assests/Mann ki Baat.jfif')} alt="Mann ki Baat" className=' w-full md:w-[50%] lg:w-[50%] '/>
      <img src={require('../assests/g20 Banner.jpg')} alt="G20" className='w-full md:w-[50%] lg:w-[50%] ' />
      </div>
      <About/>
    </div>
  )
}

export default Home
