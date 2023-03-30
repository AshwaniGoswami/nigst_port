import axios from 'axios'
import React, { useEffect, useState } from 'react'
import About from '../about/About'
import Carousel from '../carousel/Carousel'
import banner1 from '../assests/Mann ki Baat.jfif'
import banner2 from '../assests/g20 Banner.jpg'
// import { HashScroll } from "react-hash-scroll";


const Banner = [banner1, banner2]

const Home = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    async function fetchBannerImages() {
      const response = await axios.get('/api/banner_images');
      setImages(response.data);
    }
    fetchBannerImages();
  }, [])

  return (
    <>
      <div className=''>
        <Carousel />
        <div className='flex flex-col md:flex-row lg:flex-row xl:row 2xl:flex-row ' >
          {Banner.map((image, index) => (
            <img src={image} alt="banner" className=' w-full md:w-[50%] object-cover  ' />
          ))}
        </div>
      </div>
      {/* <HashScroll hash="#hash-section-1"> */}
      <About />
      {/* </HashScroll> */}
    </>
  )
}

export default Home
