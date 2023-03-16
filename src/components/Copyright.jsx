import React from 'react'
import {BiCopyright} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <div className='grid grid-cols-3 bg-[#1050A2] p-2 text-sm text-white'>
      <div className='flex '>
        Copyright 
         <BiCopyright/>
        2023 All Rights reserved.
        This is the official website of NIGST and all contents in the website are the property of NIGST.
      </div>
      <div className=' pl-[20%]'>
        <Link to="#">
            Privacy Policy
        </Link>
        <span className='text-white px-1.5'>|</span>
        <Link to="#">
            Website Policies
        </Link>
        <span className='text-white px-1.5'>|</span>
        <Link to="#">
            Hyperlinking Policies
        </Link>
        <span className='text-white px-1.5'>|</span>
        <Link to="#">
            Copyeight Policies
        </Link>
      </div>
      <div className='pl-[40%]'>
        <Link to="https://ks-tech.in/" target="_blank">
            Develop and Designed By- KRITASUTRA PRIVATE LIMITED
        </Link>
      </div>
    </div>
  )
}

export default Copyright
