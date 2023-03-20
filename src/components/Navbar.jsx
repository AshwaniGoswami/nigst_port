import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiChevronRight } from "react-icons/hi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  const [ispanelopen, setIspanelopen] = useState(false)
const showSidePanel=()=>{
  setIspanelopen(!ispanelopen)
}
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);

  const handleGovernanceToggle = () => {
    setIsGovernanceOpen(!isGovernanceOpen);
  };
  const [isfacultyOpen, setIsfacultyOpen] = useState(false)

  const handleFacultyToggle = () => {
    setIsfacultyOpen(!isfacultyOpen)
  }

  return (

    <nav className="flex items-center justify-between flex-wrap bg-[#1050A2] p-6 w-full cursor-pointer">
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white hover:text-yellow-300 hover:border-white" >
          <GiHamburgerMenu onClick={toggle} />
        </button>
      </div>

     
      <div className={`${isOpen ? "block" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
      <div className="text-sm lg:flex-grow relative md:flex lg:flex ">
  <button className="hidden md:block lg:block px-3 py-2 text-white" onClick={showSidePanel}>
    <GiHamburgerMenu />
  </button>
  <ul className={`bg-[#1050A2] py-0 ml-0 absolute top-full  mt-1 z-50
             ${ispanelopen ? "block" : "hidden"}
            `}>
            <div className='w-40  flex flex-col h-screen'>
            <li>
      <Link to="#" className="block px-4 py-2 text-white hover:bg-yellow-300 hover:font-semibold">Faculty</Link>
    </li>
    <li>
      <Link to="#" className="block px-4 py-2 text-white hover:bg-yellow-300 hover:font-semibold">Training</Link>
    </li>
            </div>

  </ul>



          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Home
          </Link>
          <div className="group block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            <span className="group-hover:text-yellow-300">About NIGST    <HiChevronRight
                  className={`inline-block h-5 w-5 ml-1 md:hidden `}/></span>

            <div className="absolute z-10 hidden group-hover:block bg-[#1050A2] py-2">
              <Link
                to="/about/introduction"
                className="block px-4 py-2 text-white hover:text-yellow-300"
              >
                Introduction
              </Link>
              
              <div onClick={handleGovernanceToggle} className='flex items-center text-white hover:text-yellow-300 mr-4 text-base'>
                <span
                 
                  className="block px-4 py-2 text-white hover:text-yellow-300"
                >
                  Governance Structure
                </span>
                <HiChevronRight
                  className={`inline-block h-5 w-5 ml-1 ${isGovernanceOpen ? "transform rotate-90" : ""
                    }`}
                  onClick={handleGovernanceToggle}
                />
              </div>
              <div className={`${isGovernanceOpen ? "block" : "hidden"}`}>
                <ul className="bg-[#1050A2] py-0  ml-0 md:absolute md:left-full lg:absolute lg:left-full">
                  <li className="block px-4 py-2 text-white hover:text-yellow-300">
                    Board Of Governance
                  </li>
                  <li className="block px-4 py-2 text-white hover:text-yellow-300">
                    Board Of Evaluation
                  </li>
                  <li className="block px-4 py-2 text-white hover:text-yellow-300">
                    Board Of Studies
                  </li>
                </ul>
              </div>

              <Link to="/about/nigst_campus" className="block px-4 py-2 text-white hover:text-yellow-300">NIGST Campus</Link>
              <Link to="/about/location" className="block px-4 py-2 text-white hover:text-yellow-300">Location</Link>
            </div>
          </div>



          <div className="group block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            <span className="group-hover:text-yellow-300">Training</span>
            <div className="absolute z-10 hidden group-hover:block bg-[#1050A2] py-2">
            <div
                onClick={handleFacultyToggle}
                className="flex items-center text-white hover:text-yellow-300 mr-4 text-base cursor-pointer"
              >
                <span className="block px-4 py-2">Faculty</span>
                <HiChevronRight
                  className={`inline-block h-5 w-5 ml-1 ${isfacultyOpen ? "transform rotate-90" : ""
                    }`}
                  onClick={handleFacultyToggle}
                />
              </div>
              <div className={`${isfacultyOpen ? "block" : "hidden"}`}>

                <ul className="   bg-[#1050A2] py-0  ml-0 md:absolute md:left-full lg:absolute lg:left-full ">

                  <li className='block px-4 py-2 text-white hover:text-yellow-300'>
                    <Link to="/faculty/geodesy">
                      Faculty of Geodesy
                    </Link>

                  </li>
                  <li className='block px-4 py-2 text-white hover:text-yellow-300'>
                    <Link to="/faculty/photogrammetry">
                      Faculty of Photogrammetry
                    </Link>
                    y
                  </li>
                  <li className='block px-4 py-2 text-white hover:text-yellow-300'>
                    <Link to="/faculty/cartography">
                      Faculty of Cartography
                    </Link>

                  </li>
                  <li className='block px-4 py-2 text-white hover:text-yellow-300'>
                    <Link to="/faculty/topographical">
                      Faculty of Topographical
                    </Link>

                  </li>
                  <li className='block px-4 py-2 text-white hover:text-yellow-300'>
                    <Link to="/faculty/geo_ict">
                      Faculty of GEO-ICT
                    </Link>

                  </li>
                </ul>
              </div>
              <Link to="/training/courses" className="block px-4 py-2 text-white hover:text-yellow-300">Courses</Link>
              <Link to="/training/course_enrollment" className="block px-4 py-2 text-white hover:text-yellow-300">Course Enrollment</Link>
              <Link to="/training/fee_payment" className="block px-4 py-2 text-white hover:text-yellow-300">Fee and Payment</Link>
            </div>
          </div>
          <Link to="/training/registration" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Training Registration
          </Link>
          <Link to="https://www.surveyofindia.gov.in/pages/nhp" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            SOI Projects
          </Link>
          <Link to="/sitemap" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Site Map
          </Link>
          <Link to="/gallery" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Gallery
          </Link>
          <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Contact Us
          </Link>
          <Link to="/faq" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
