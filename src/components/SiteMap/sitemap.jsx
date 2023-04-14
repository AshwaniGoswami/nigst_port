import React from "react";
import './sitemap.css'

function NavigationMenu() {
    return (
        <div>
            <div className="content-container">
                <div className="left-container" style={{ flex: 1 }}>
                    <ul className="main-navigation">
                        <li><a href="../Home.jsx" className="dropbtn">Home</a></li>
                        <li><a href="">About NIGST</a>
                        <ul><li><a href="../../../src/about/About.jsx" className="introLink">Introduction</a></li></ul></li>
                        <li><a >Governance Structure</a>
                            <ul>
                                <li id="sub-tab" ><a href="../../../src/about/Board_of_governance.jsx">Board of Governance</a></li>
                                <li id="sub-tab"><a href="../../../src/about/Board_of_evaluation.jsx">Board of Evaluation</a></li>
                                <li id="sub-tab"><a href="../../../src/about/Board_of_studies.jsx">Board of Studies</a></li>
                             </ul>
                        </li>
                            <li><a href="../../../src/about/Nigst_campus.jsx">NIGST Campus</a></li>
                            <li><a href="../../../src/about/Location.jsx">Location </a></li>

                        
                        <li><a href="#" className="dropbtn">Training</a></li>
                           
                                <li><a href="#">Faculties</a>
                                    <ul>
                                        <li id="sub-tab"><a href="../faculty/FacultyGeodesy.jsx">Faculty  of Geodesy</a></li>
                                        <li id="sub-tab"><a href="../faculty/FacultyPhotogrammetry.jsx">Faculty of Photogrammetry & Remote Sensing</a></li>
                                        <li id="sub-tab"><a href="../faculty/FacultyGeo.jsx">Faculty of Cartography</a></li>
                                        <li id="sub-tab"><a href="../faculty/FacultyTopo.jsx">Faculty of Faculty of Topographical </a></li>
                                        <li id="sub-tab"><a href="../faculty/FacultyGeo.jsx">Faculty of GEO-ICT</a></li>
                                    </ul>
                                </li>
                                <li><a href="../forms/Login.jsx">Courses</a></li>
                                <li><a href="../forms/Login.jsx">Course Enrollment</a></li>
                                <li><a href="../NavComponents/Feesandpayment/Feesandpayment.jsx">Fees and Payments</a></li>
                            </ul>
                </div>
                <div className="right-container" style={{ flex: 2 }}>
                    <ul>


                        <li><a href="../Buttons/Tables/Tendertable.jsx" className="dropbtn">Tenders</a></li>
                        <li><a href="../rajbhasha/rajbhasha.jsx">Raj Bhasha</a></li>
                        <li><a href="../Geospatial/geospatial.jsx" className="dropbtn">Geo Spatial Policies</a></li>
                        <li><a href="../publicgrievances/Publicgrievance.jsx" className="dropbtn">Public Grievances Office</a></li>
                        <li><a href="../../Dashboard/Signup.js" className="dropbtn">Training Registration</a></li>
                        <li><a href="../SiteMap/sitemap.jsx" className="dropbtn">Site Map</a></li>
                        <li><a href="../Gallery/gallery.jsx" className="dropbtn">Gallery</a></li>
                        <li><a href="../forms/Contactus.jsx" className="dropbtn">Contact Us</a></li>
                        <li><a href="../publicgrievances/Publicgrievance.jsx">Grievances</a></li>
                        <li><a href="../Citizens charter/citizen charter.html">Citize Charter</a></li>

                        <li><a href="../FAQ/faq.jsx" >FAQ</a></li>
                    </ul>
                </div>
            </div >
        </div >

    )
}
export default NavigationMenu