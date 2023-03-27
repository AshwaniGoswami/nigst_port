
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Training from './components/NavComponents/Training';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import About from './about/About';
import Fixed from './components/Fixed';
import FacultyGeodesy from './components/faculty/FacultyGeodesy';
import FacultyPhotogrammetry from './components/faculty/FacultyPhotogrammetry';
import RightToInformation from './components/RTI/rti'
import LoginForm from './components/forms/Login';
import Privacypolicy from './components/Policies/Privacypolicy';
import Nigst_campus from './about/Nigst_campus';
import Faq from './components/FAQ/faq';
// import Announcements from './components/Announcements';
import NIGSTAdmin from './Dashboard/NIGSTAdmin';
import FacultyAdmin from './Dashboard/FacultyAdmin';
import Signup from './Dashboard/Signup'
import NigstCampus from './about/Nigst_campus';
import OpenPageFromTop from './components/OpenPageFromTop';
import Board_of_governance from './about/Board_of_governance';
import Publicgrievance from './components/publicgrievances/Publicgrievance';
import Websitepolicy from './components/Policies/Websitepolicy';

function App() {
  return (
    <>
      <Router>
      <OpenPageFromTop/>
      <Fixed/>
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/training' element={<Training/>} />
           <Route path='/about/introduction' element={<About/>} />
           <Route path='/faculty/geodesy' element={<FacultyGeodesy/>}/>
           <Route path='/faculty/Photogrammetry' element={<FacultyPhotogrammetry/>}/>
           <Route path='/about/nigst_campus' element={<NigstCampus/>}/>
           <Route path='/components/RTI/rti' element={<RightToInformation/>}/>
           <Route path='/training/registration' element={<Signup/>}/>
        </Routes>
        <Footer/>
        <Copyright/>
      </Router>
    </>
  );
}

export default App;
