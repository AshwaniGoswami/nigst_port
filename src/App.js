import './App.css';
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
import FacultyPandRS from './components/faculty/FacultyP&RS';
import Nigst_campus from './about/Nigst_campus';

// import Announcements from './components/Announcements';
import NIGSTAdmin from './Dashboard/NIGSTAdmin';
import FacultyAdmin from './Dashboard/FacultyAdmin';
import Signup from './Dashboard/Signup'
import NigstCampus from './about/Nigst_campus';
import OpenPageFromTop from './components/OpenPageFromTop';
import Board_of_governance from './about/Board_of_governance';

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
           <Route path='/about/nigst_campus' element={<NigstCampus/>}/>
           <Route path='/training/registration' element={<Signup/>}/>
           <Route path='/about/governance/board_of_governance' element={<Board_of_governance/>} />
           <Route path='/board_of_evalution'/>
        </Routes>
        <Footer/>
        <Copyright/>
      </Router>
    </>
  );
}

export default App;
