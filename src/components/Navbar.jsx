import React from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {

  return (

    <nav className="flex items-center justify-between flex-wrap bg-[#1050A2] p-6 w-full">
      <div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-white hover:text-yellow-300 hover:border-white">
        <GiHamburgerMenu/>
      </button>
    </div>

    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
      <button className=" px-3 py-2 text-white ">
        <GiHamburgerMenu/>
      </button>
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
          Home
        </Link>


        <div className="group block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
          <span className="group-hover:text-yellow-300">About NIGST</span>
          <div className="absolute z-10 hidden group-hover:block bg-[#1050A2] py-2">
            <Link to="/about/introduction" className="block px-4 py-2 text-white hover:text-yellow-300">Introduction</Link>
            <Link to="/about/governance" className="block px-4 py-2 text-white hover:text-yellow-300">Governance Structure</Link>
            <Link to="/about/nigst_campus" className="block px-4 py-2 text-white hover:text-yellow-300">NIGST Campus</Link>

            <Link to="/about/location" className="block px-4 py-2 text-white hover:text-yellow-300">Location</Link>
          </div>
        </div>


        <div className="group block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
          <span className="group-hover:text-yellow-300">Training</span>
          <div className="absolute z-10 hidden group-hover:block bg-[#1050A2] py-2">
            <Link to="/training/faculty" className="block px-4 py-2 text-white hover:text-yellow-300">Faculty</Link>
            <Link to="/training/courses" className="block px-4 py-2 text-white hover:text-yellow-300">Courses</Link>
            <Link to="/training/course_enrollment" className="block px-4 py-2 text-white hover:text-yellow-300">Course Enrollment</Link>
            <Link to="/training/fee_payment" className="block px-4 py-2 text-white hover:text-yellow-300">Fee and Payment</Link>
          </div>
        </div>
        <Link to="/training/registration" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
          Training Registration
        </Link>
        <Link to="https://www.surveyofindia.gov.in/pages/nhp"  target="_blank" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
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
    </div>
    <div>
    <h3>Announcements</h3>
    </div>
  </nav>
  )
}

export default Navbar
