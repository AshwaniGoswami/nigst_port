import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    <div className="grid grid-cols-3 items-center py-4">
      <div className="flex flex-row col-span-2">
        <section>
          <img
            src={require("../assests/75 Yrs Aazadi ka Mahautsav Small.png")}
            alt="Azadi_ka_amrit_mahotsav"
            className="w-full h-full object-contain"
          />
        </section>

        <a href="http://www.g20.org/en/"  target="_blank">
          <img
            src={require("../assests/G20Small.png")}
            alt="G-20"
            className="w-full h-full object-contain rounded-md ml-2"
          />
        </a>
        <section>
          <img
            src={require("../assests/Website Logo NIGST Small.png")}
            alt="SOI_logo"
            className="w-full h-full object-contain ml-2"
          />
        </section>
      </div>

      <div className="">
        <div className="right-header grid grid-cols-2 px-4 py-2 sm:py-4 items-center">
          <div className="survey-of-india">
            <a href="https://www.surveyofindia.gov.in/"  target="_blank">Survey of India Website</a>
            <div className="login-btn">
            <a href="">Login</a>
          </div>
          </div>
       

          <section className="search-bar flex items-center">
            <input
              type="search"
              name="search"
              placeholder="Search here.."
              className="flex-grow py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <AiOutlineSearch className="h-full ml-2" />
          </section>
        </div>
      </div>
    </div>
  );
};





export default Header
