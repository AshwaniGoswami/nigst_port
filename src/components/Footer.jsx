import React from 'react'
import { Link } from 'react-router-dom';
import {HiLocationMarker} from 'react-icons/hi'
import {GrMail} from 'react-icons/gr'
import {FaYoutube,FaPhoneAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-0'>
      <footer className="bg-gray-900 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">

            <div className="flex flex-col">
              <Link to="#" className="text-[#ffcb00] mb-2 font-bold ">Contact Us</Link>
              <div className="flex items-center mb-2">
               <HiLocationMarker color='black' size="1.5em" className='rounded-full w-auto h-auto p-2  bg-[#ffcb00]'/>        
              <p className="text-sm px-3">Additional Surveyor General, Survey of India <br /><span>Uppal, Hyderabad 500039, Telangana, INDIA</span></p>
              </div>
              <div className="flex items-center mb-2">
                 <FaPhoneAlt color='black' size="1.5em" className='rounded-full w-auto h-auto p-2  bg-[#ffcb00]' />
                 <p className="text-sm px-3">+91-40-27201181<br />+91-40-27201185<br />+91-40-27201186</p>
              </div>
              <div className="flex items-center mb-2">
              <GrMail color='black' size="1.5em" className='rounded-full w-auto h-auto p-2  bg-[#ffcb00]'/>

                <Link to="mailto:iism.soi@gov.in" className="text-sm px-3">iism.soi@gov.in</Link>
              
              </div>
              <div>
              <Link to="https://www.youtube.com/channel/UCntYNtrSf6eXL3O4yWVBt0w" target="_blank">
                  <FaYoutube color='red' size="2.5em" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg text-[#ffcb00]  font-bold mb-4">Quick Links</h3>
              <div className="flex flex-col   mb-2">
                <Link to="https://www.surveyofindia.gov.in/tenders" target="_blank" className="mr-2 mb-2 text-sm">Tender</Link>
                <Link to="#" className="mr-2 mb-2 text-sm">Sitemap</Link>
                <Link to="#" className="mr-2 mb-2 text-sm">Grievances</Link>
                <Link to="#" className="mr-2 mb-2 text-sm">Citizen Charter</Link>
                <Link to="#" className="mr-2 mb-2 text-sm">FAQ</Link>
              </div>
            </div>


            <div className="flex flex-col">
              <h3 className="text-lg text-[#ffcb00] mb-4 font-bold">Important Links</h3>
              <div className="flex flex-wrap mb-2">
                <Link to="https://www.india.gov.in/" target="_blank" className="mr-2 mb-2 text-sm">National Portal of India</Link>
                <Link to="https://dst.gov.in/" target="_blank" className="mr-2 mb-2 text-sm">Department of Science and Technology</Link>
                <Link to="https://onlinemaps.surveyofindia.gov.in/" target="_blank" className="mr-2 mb-2 text-sm">SOI online Maps</Link>
                <Link to="https://www.nrsc.gov.in/" target="_blank" className="mr-2 mb-2 text-sm">NRSC</Link>
                <Link to="https://bharatmaps.gov.in/" target="_blank" className="mr-2 mb-2 text-sm">NIC Bharat Maps</Link>
                <Link to="https://www.iirs.gov.in/" target="_blank" className="mr-2 mb-2 text-sm">IIRS</Link>
                <Link to="https://ggim.un.org/" target="_blank" className="mr-2 mb-2 text-sm">UNGGIM Portal</Link>
                <Link to="https://www.un-ggim-ap.org/" target="_blank" className="mr-2 mb-2 text-sm">UNGGIM-AP Portal</Link>
                <Link to="https://digitalsky.dgca.gov.in/airspace-map/#/app" target="_blank" className="mr-2 mb-2 text-sm">DigitalSky-Airspace Map</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
