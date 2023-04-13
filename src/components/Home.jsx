import axios from 'axios'
import React, { useEffect, useState } from 'react'
import About from '../about/About'
import Carousel from '../carousel/Carousel'
import banner1 from '../assests/Mann ki Baat.jfif'
import banner2 from '../assests/g20 Banner.jpg'
// import { HashScroll } from "react-hash-scroll";
import SCarousel from '../components/SOI project/soiprojects';



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


  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  fade: false,
  speed: 500,
  autoplay: true,
  initialSlide: 2,
  lazyLoad: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
  return (
    <>
      <div className=' m-auto'>
        <Carousel />
        <div className='flex flex-col md:flex-row lg:flex-row xl:row 2xl:flex-row ' >
          {Banner.map((image, index) => (
            <img src={image} alt="banner" className=' w-full md:w-[50%] object-cover  ' />
          ))}
        </div>
      {/* <HashScroll hash="#hash-section-1"> */}
      <About />
      {/* </HashScroll> */}
      <SCarousel />
      </div>

    </>
  )
}

export default Home
