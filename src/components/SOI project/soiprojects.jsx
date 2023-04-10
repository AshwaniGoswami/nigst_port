import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {useState} from 'react'
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
      imageSrc:
        './soiproject/01.jpg',
      title: '',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: '',
      features: [''],
    },
    {
      imageSrc:
        './soiproject/coastal.jpg',
      title: '',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: '',
      features: [''],
    },
    {
        imageSrc:
          './soiproject/nhp.jpg',
        title: '',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: '',
        features: [],
      },
    {
      imageSrc:
        './soiproject/vertical-datum.jpg',
      title: '',
      description: '',
      pricingText: '',
      features: [''],
    },
    {
      imageSrc:
        './soiproject/web-gis.jpg',
      title: '',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: '',
      features: [
         ],
    },
  ]

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
            <img alt={card.title} src={card.imageSrc} width="100" height="100"  />
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