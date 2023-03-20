import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Logo from "../assests/Website Logo NIGST Small.png";
import '../CSS/app.css'
import DepartmentCreation from './DepartmentCreation';
import CreationFacultyPosition from './CreationFacultyPosition'
import Button from "../components/Buttons/Button"
import CourseCategoryCreation from './CourseCategoryCreation';

export default function NIGSTAdmin() {
    const [departmentCreation , setDepartmentCreation] = useState(false)
    const [facultyPositionCreation , setFacultyPositionCreation] = useState(false)
    const [courseCategory , setCourseCategory] = useState(false);

    function departmentFun(){
        setDepartmentCreation(true)
        setFacultyPositionCreation(false)
        setCourseCategory(false)
    }
    function facultyPositionFun(){
        setFacultyPositionCreation(true)
        setDepartmentCreation(false)
        setCourseCategory(false)
    }
    function courseCategoryFun(){
        setCourseCategory(true)
        setDepartmentCreation(false)
        setFacultyPositionCreation(false)
    }
    function facultyAdminFun(){
        setDepartmentCreation(false)
        setFacultyPositionCreation(false)
        setCourseCategory(false)
    }
  return (
    <div className='flex justify-between'>
        <div className='side-bar border-r-2 side-bar-wrapper'> 
        <div className=' text-center pt-14 pb-14  border-b-2 mb-8'>
        <h3 className='text-lg   text-white font-bold '>Welcome NIGST Admin</h3>
        </div>
        <div>
            <ul className=' text-white cursor-pointer '>
                <li className='p-3 ' onClick={departmentFun}>Department/Organization Creation</li>
                <li className='p-3 ' onClick={facultyPositionFun}>Creation of Faculty Positions </li>
                <li className='p-3 ' onClick={courseCategoryFun}>Course Category Creation</li>
                <li className='p-3 ' onClick={facultyAdminFun}>Department/Organization-Course Assignment</li>
                <li className='p-3 '>New User verifications</li>
                <li className='p-3 '>Content Updation </li>
                <li className='p-3 '>Tender </li>
            </ul>
            
        </div>
        </div>
        <div className='content-wrapper-admin-panel w-full'>
            <header className='h-240  w-full flex justify-evenly items-center'>
                <div><TextField id="outlined-basic"  variant="outlined" placeholder='Search here' className='w-80' /></div>
                <div>
                    <img src={Logo} alt="logo" className='header-logo-admin-panel'></img>
                </div>
                <div><Button value={"Login"}  /> </div>
            </header>
            <div className='min-h-max flex justify-center border-t-2'>
                {departmentCreation ? <DepartmentCreation/> : ""}
                {facultyPositionCreation ? <CreationFacultyPosition/> : ""}
                {courseCategory ? <CourseCategoryCreation/> : ""}             
            </div>
        </div>
    </div>
  )
}
