import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import FontSizer from './fontsize/FontSizer';
const Header = () => {
  return (
    <>
    <FontSizer/>
    <div className=" grid grid-cols-1 md:grid-cols-3 items-center bg-white ">


    <div className="flex flex-col-reverse md:flex-row md:col-span-1 ">

<div className='flex md:w-[50%] ' >

<div className=" md:w-full md:h-full md:flex-1">
        <img
          src={require("../assests/75 Yrs Aazadi ka Mahautsav Small.png")}
          alt="Azadi_ka_amrit_mahotsav"
          className="w-full  h-full object-contain"
        />
      </div>
      <div className="md:w-full md:h-full md:flex-1 md:ml-2">
        <Link to="http://www.g20.org/en/" target="_blank">
          <img
            src={require("../assests/G20Small.png")}
            alt="G-20"
            className="w-full  h-full object-contain rounded-md"
          />
        </Link>
      </div>
    

</div>
  
    </div>

    <div className='flex md:w-[80%] ' >
    <div className="md:w-full md:h-full md:flex-1 md:ml-2 lg:w-full lg:h-full lg:flex-1 lg:ml-3 " >
        <img
          src={require("../assests/Website Logo NIGST Small.png")}
          alt="SOI_logo"
          className="w-full h-full object-contain"
        />
      </div>

</div>

   

    <div className=" ">
      <div className="right-header hidden md:grid md:grid-cols-2 md:px-4 md:py-2 sm:py-4 items-center ">
  
        <section className="search-bar flex flex-col py-2 space-y-4 col-start-2 ">
        <div className="survey-of-india flex flex-row gap-4">
          <Link to="https://www.surveyofindia.gov.in/" target="_blank">
          <span className=' text-blue-600 hover:bg-[#1050a2] hover:text-white hover:rounded-md hover:p-3'>
          Survey of India Website
          </span>
          
          </Link>
          <div className="login-btn">
            <Link to="">Login</Link>
          </div>
          </div>
          <div className='flex flex-row relative'>
          <input
            type="search"
            name="search"
            placeholder="Search here.."
            className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
          <AiOutlineSearch className="h-full absolute right-2" />
          </div>
        </section>
      </div>
    </div>
  </div>
  <div className='bg-yellow-500 h-1.5 w-full'>

</div>
    </>
 
  );
};





export default Header
