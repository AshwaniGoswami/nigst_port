import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiChevronRight } from "react-icons/hi"
import { AiOutlineSearch, AiOutlineLogin } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdOutlineAnnouncement } from 'react-icons/md'


import Searchbar from './Searchbar';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const location = useLocation()
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const [ispanelopen, setIspanelopen] = useState(false)
  const showSidePanel = () => {
    setIspanelopen(!ispanelopen)
  }
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);

  const handleGovernanceToggle = () => {
    setIsGovernanceOpen(!isGovernanceOpen);
  };
  const [isfacultyOpen, setIsfacultyOpen] = useState(false)
  const [isFacultyHovered, setIsFacultyHovered] = useState(false);

  const handleFacultyHover = () => {
    setIsFacultyHovered(true);
  };
  const handleFacultyHoverEnd = () => {
    setIsFacultyHovered(false);
  };
  const handleFacultyToggle = () => {
    setIsfacultyOpen(!isfacultyOpen)
  }
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const handleAnnouncementClick = () => {
    setShowAnnouncement(!showAnnouncement);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const announcements = [
    {
      date: 'Aug 22, 2022',
      text: 'Call for Proposal: Announcement of Opportunity (AO) for Capacity Building in Space Based Disaster Management Support'
    },
    {
      date: 'Sep 22, 2022',
      text: 'Call for Proposal: Announcement of Opportunity (AO) for Capacity Building in Space Based Disaster Management Support'
    },
    {
      date: 'Sep 22, 2022',
      text: 'Call for Proposal: Announcement of Opportunity (AO) for Capacity Building in Space Based Disaster Management Support'
    }
  ];

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? announcements.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === announcements.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#1050A2] p-2  w-full cursor-pointer relative" >
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2  rounded text-white hover:text-yellow-300 hover:border-white" >
          <GiHamburgerMenu onClick={toggle} />
        </button>
      </div>

      <div className='md:hidden lg:hidden flex items-center'>
        <Searchbar />
        <div className="flex items-center ml-2">
          <Link to='/login' className='flex items-center justify-center'>
            <BsFillPersonFill size='1.5em' color='white' />
          </Link>
          <div className="ml-2">
            <MdOutlineAnnouncement size='1.5em' color='white' />
          </div>
        </div>
      </div>


      <div className={`${isOpen ? "block" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow relative md:flex lg:flex ">
          <button className="hidden md:block mr-4 lg:block px-3 py-2 text-white" onClick={showSidePanel}>
            <GiHamburgerMenu size='1.7em' />
          </button>
          <ul className={`bg-[#1050A2] py-0 ml-0 absolute top-full md:-ml-4 lg:-ml-4  mt-1 z-50
             ${ispanelopen ? "block" : "hidden"}
            `}>
            <div className='w-40  flex flex-col h-screen'>
              <li>
                <Link to="/tenders" className="block px-4 py-2 text-white border-b-[1px] hover:font-semibold" onClick={showSidePanel}>Tenders</Link>
              </li>

              <li>
                <Link to="/rti" className="block px-4 py-2 text-white border-b-[1px] hover:font-semibold" onClick={showSidePanel}>RTI</Link>
              </li>
              <li>
                <Link to="/soi_annual_reports" className="block px-4 py-2 text-white border-b-[1px] hover:font-semibold" onClick={showSidePanel}>SOI Annual Reports</Link>
              </li>
              <li>
                <Link to="/raj_bhasha" className="block px-4 py-2 text-white border-b-[1px] hover:font-semibold" onClick={showSidePanel}>Raj Bhasha</Link>
              </li>
              <li>
                <Link to="/geo_spatial_policies" className="block px-4 py-2 text-white border-b-[1px] hover:font-semibold" onClick={showSidePanel}>Geo Spatial Policies</Link>
              </li>
              <li>
                <Link to="/public_grievances_office" className="block px-4 py-2 text-white border-b-[1px] hover:font-semibold" onClick={showSidePanel}>Public grievances Office</Link>
              </li>
            </div>
          </ul>

          <Link to="/" className="block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Home
          </Link>
          <div className="group block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            <span className="group-hover:text-yellow-300">About NIGST
              <HiChevronRight className={`inline-block h-5 w-5 ml-1 md:hidden `} />
            </span>

            <div className="absolute z-10 hidden group-hover:block bg-[#1050A2] py-2">
              <Link to="/about/introduction" className="block px-4 py-2 text-white hover:text-yellow-300">
                Introduction
              </Link>

              <div className="relative flex flex-col">
                <div
                  className="flex items-center text-white hover:text-yellow-300 mr-4 text-base cursor-pointer"
                  onMouseEnter={() => setIsGovernanceOpen(true)}
                  onClick={() => setIsGovernanceOpen(!isGovernanceOpen)}
                >
                  <span className="block px-4 py-2">Governance Structure</span>
                  <HiChevronRight
                    className={`inline-block h-5 w-5 ml-1 ${isGovernanceOpen ? "transform rotate-90" : ""}`}
                  />
                </div>

                <ul
                  className={`absolute bg-[#1050A2] py-2 top-9 md:top-0 md:left-full ${isGovernanceOpen ? "block order-last" : "hidden"
                    } w-full border-b-2 border-white`}
                  onMouseLeave={() => setIsGovernanceOpen(false)}
                >
                  <li className="block px-4 py-2 text-white hover:text-yellow-300"><Link to='/about/governance/board_of_governance'>Board Of Governance</Link></li>
                  <li className="block px-4 py-2 text-white hover:text-yellow-300"><Link to='/about/governance/board_of_evaluation'>Board Of Evaluation</Link></li>
                  <li className="block px-4 py-2 text-white hover:text-yellow-300"><Link to='/about/governance/board_of_studies'>Board Of Studies</Link></li>
                </ul>
              </div>

              <Link to="/about/nigst_campus" className="block px-4 py-2 text-white hover:text-yellow-300">NIGST Campus</Link>
              <Link to="/location" className="block px-4 py-2 text-white hover:text-yellow-300">Location</Link>
            </div>
          </div>




          <div className="group block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            <span className="group-hover:text-yellow-300">Training</span>
            <div className="absolute z-10 hidden group-hover:block bg-[#1050A2] py-2">



              <div
                onClick={handleFacultyToggle}
                onMouseEnter={handleFacultyHover}
                onMouseLeave={handleFacultyHoverEnd}
                className="relative"
              >
                <div className="flex items-center w-full text-white hover:text-yellow-300 mr-4 text-base cursor-pointer">
                  <span className="block px-4 py-2">Faculty</span>
                  <HiChevronRight
                    className={`inline-block h-5 w-5 ml-1 ${isfacultyOpen ? "transform rotate-90" : ""}`}
                    onClick={handleFacultyToggle}
                  />
                </div>
                <div
                  className={`absolute bg-[#1050A2] w-52 md:w-72  md:top-0 md:-left-[78%] ${isfacultyOpen || isFacultyHovered ? "block" : "hidden"
                    }`}
                  onMouseEnter={handleFacultyHover}
                  onMouseLeave={handleFacultyHoverEnd}
                >
                  <ul className="bg-[#1050A2] w-full flex flex-col justify-center py-0  ml-0 md:relative md:left-full lg:absolute lg:left-full">
                    <li className='inline-block border-b-[0.5px] px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/geodesy">
                        Faculty of Geodesy
                      </Link>
                    </li>
                    <li className='inline-block border-b-[0.5px] px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/photogrammetry">
                        Faculty of Photogrammetry & RS
                      </Link>
                    </li>
                    <li className='inline-block border-b-[0.5px] px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/cartography">
                        Faculty of Carto, DM & GIS
                      </Link>
                    </li>
                    <li className='inline-block border-b-[0.5px] px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/topographical">
                        Faculty of TS & LIS
                      </Link>
                    </li>
                    <li className='inline-block border-b-2 px-4 py-2 text-white hover:text-yellow-300'>
                      <Link to="/faculty/geo_ict">
                        Faculty of GEO-ICT
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>



              <Link to="/training/courses" className="block px-4 py-2 text-white hover:text-yellow-300">Courses</Link>
              <Link to="/training/registration" className="block px-4 py-2 text-white hover:text-yellow-300">Course Enrollment</Link>
              <Link to="/feesandpayment" className="block px-4 py-2 text-white hover:text-yellow-300">Fee and Payment</Link>
            </div>
          </div>
          <Link to="/training/registration" className="block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Training Registration
          </Link>
          <Link to="https://www.surveyofindia.gov.in/pages/nhp" target="_blank" className="block mt-4 md:py-2 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            SOI Projects
          </Link>
          <Link to="/sitemap" className="block md:py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Site Map
          </Link>
          <Link to="/gallery" className="block md:py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Gallery
          </Link>
          <Link to="/Contactus" className="block md:py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            Contact Us
          </Link>
          <Link to="/components/FAQ/faq" className="block md:py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base">
            FAQ
          </Link>
          <button className="block md:py-2 mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 text-base"
            onClick={handleAnnouncementClick}>Announcement</button>
            {showAnnouncement && (
        <div
          className="sticky z-50 bg-white p-4 absolute"
          style={{ top: 0, left: 0, right: 0 }}
        >
           <div className="announcement-container">
      <div id="ann-close-icon">
        <i className="fa fa-close close-icon"></i>
      </div>
      <a href="/Tables/Announcementtable">
        <h3 id="announcemnt-heading">Announcement</h3>
      </a>
      <div className="Acarousel-container">
        <div className="Acarousel-wrapper">
          {announcements.map((announcement, index) => (
            <div key={index} className={`Acarousel-card ${activeIndex === index ? 'active' : ''}`}>
              <h4>Posted on: {announcement.date}</h4>
              <p><span>Call for Proposal:</span> {announcement.text}</p>
            </div>
          ))}
        </div>
        <div className="Acarousel-indicators">
          {announcements.map((_, index) => (
            <div
              key={index}
              className={`Acarousel-indicator ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
        <button className="prev-btn" onClick={handlePrevClick}>❮</button>
        <button className="next-btn" onClick={handleNextClick}>❯</button>
      </div>
    </div>
        </div>
      )}
          
          {/* <DropdownMenu  /> */}

        </div>
        
        <ul className={`block md:hidden bg-[#1050A2] py-0 ml-0   
             
            `}>
          <div className='  flex flex-col'>
            <li>
              <Link to="/tenders" className="block py-2 text-white  hover:font-semibold">Tenders</Link>
            </li>

            <li>
              <Link to="/rti" className="block  py-2 text-white  hover:font-semibold">RTI</Link>
            </li>
            <li>
              <Link to="/soi_annual_reports" className="block  py-2 text-white  hover:font-semibold">SOI Annual Reports</Link>
            </li>
            <li>
              <Link to="/raj_bhasha" className="block  py-2 text-white  hover:font-semibold">Raj Bhasha</Link>
            </li>
            <li>
              <Link to="/geo_spatial_policies" className="block py-2 text-white  hover:font-semibold">Geo Spatial Policies</Link>
            </li>
            <li>
              <Link to="/public_grievances_office" className="block  py-2 text-white  hover:font-semibold">Public grievances Office</Link>
            </li>
          </div>
        </ul>

      </div>

    </nav>
    
  )
}



// function DropdownMenu() {
//   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
//   const [timeoutId, setTimeoutId] = useState(null);

//   function handleMouseEnter() {
//     setIsSubmenuOpen(true);
//     clearTimeout(timeoutId);
//   }

//   function handleMouseLeave() {
//     const newTimeoutId = setTimeout(() => setIsSubmenuOpen(false), 500);
//     setTimeoutId(newTimeoutId);
//   }

//   return (
//     <div className="relative">
//       <button
//         className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Dropdown
//       </button>
//       {isSubmenuOpen && (
//         <div
//           className="absolute z-10 bg-gray-800 text-white py-2 mt-2 w-72 rounded-md shadow-lg"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Option 1</a>
//           <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Option 2</a>
//           <div className="relative">
//             <button
//               className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               Submenu
//             </button>
//             {isSubmenuOpen && (
//               <div
//                 className="absolute z-10 left-full top-0 bg-gray-800 text-white w-full rounded-md shadow-lg"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <a href="#" className="inline-block px-4 py-2 text-sm hover:bg-gray-700">Submenu Option 1aaaaaaaaaaaaaa</a>
//                 <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Submenu Option 2aaaaaaaaaaaaaaa</a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



export default Navbar
