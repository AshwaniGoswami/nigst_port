import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import FontSizer from './fontsize/FontSizer';
import Searchbar from './Searchbar';
const Header = () => {
  return (
    <>
    <FontSizer/>
    <div className=" grid grid-cols-1 md:grid-cols-7  bg-white ">

    <div className='flex md:flex-row col-span-2 flex-col-reverse h-auto md:h-28'>
    <div className="flex flex-col-reverse md:flex-row">
    <div className="flex p-0 h-14 md:h-24 lg-28">
    <div className='flex flex-row'>
    <img
    src={require("../assests/75 Yrs Aazadi ka Mahautsav Small.png")}
    alt="Azadi_ka_amrit_mahotsav"
    className="w-[50%] md:h-full object-contain rounded-md"
  />
    <img
      src={require("../assests/G20Small.png")}
      alt="G-20"
      className="w-[50%] md:h-full object-contain rounded-md "
    />
    </div>

</div>
</div>
</div>



<div className="flex md:w-full md:col-start-3 md:col-end-5 h-24 md:h-full">
    <img
      src={require("../assests/Website Logo NIGST Small.png")}
      alt="SOI_logo"
      className="w-full h-full md:ml-24 object-contain"
    />
  </div>
   
  <div className="right-header hidden md:grid md:col-start-6 md:col-span-2 items-center ">
    <section className="search-bar flex flex-col py-2 space-y-4 col-start-2 col-span-2 ">
      <div className="survey-and-login flex flex-row items-center justify-center gap-4 ml-3">
        <Link to="https://www.surveyofindia.gov.in/" target="_blank" className=' text-blue-600 hover:bg-[#1050a2] hover:text-white hover:rounded-md text-base hover:py-1 px-2.5 hover:translate-y-0'>
            Survey of India Website
        </Link>
        <button className="login-btn bg-[#1050a2] rounded-md p-1">
          <Link to="/login" className='text-white p-5'>Login</Link>
        </button>
      </div>
      <div className='flex flex-row relative px-3 py-1'>
        <Searchbar />
      </div>
    </section>
  </div>


  </div>
  <div className='bg-yellow-500 h-1.5 w-full'>

</div>
    </>
 
  );
};





export default Header
