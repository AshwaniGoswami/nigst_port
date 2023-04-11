import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./soiproject.css"
import Slider from 'react-slick'
import {useState} from 'react'
import img1 from './soiproject/01.jpg';
import img2 from './soiproject/coastal.jpg';
import img3 from './soiproject/nhp.jpg';
import img4 from './soiproject/vertical-datum.jpg';
import img5 from './soiproject/web-gis.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


function SCarousel () {

    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        // removes default buttons
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
      const settings = { 
        fade: true ,
        speed: 500, // ms
        autoplay: false,
        initialSlide: 2,
        lazyLoad: true,
        autoplaySpeed: 3000,
    }

    
    const hotelCards = [
      {
        imageSrc: img1,
        title: '',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: '',
        features: [''],
      },
      {
        imageSrc: img2,
        title: '',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: '',
        features: [''],
      },
      {
        imageSrc: img3,
        title: '',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: '',
        features: [],
      },
      {
        imageSrc: img4,
        title: '',
        description: '',
        pricingText: '',
        features: [''],
      },
      {
        imageSrc: img5,
        title: '',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: '',
        features: [],
      },
    ];

  return (
         <div className='content'>
             <button onClick={sliderRef?.slickPrev}>
        <FaArrowLeft />
      </button>
      <button onClick={sliderRef?.slickNext}>
        <FaArrowRight />
      </button>
      <Slider  ref={setSliderRef} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index}>
            <h2>{card.title}</h2>
            <img alt={card.title} src={card.imageSrc} width="400" height="400"  />
            <p>{card.description}</p>
            <ul>
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className='btn'>visit site</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default  SCarousel;