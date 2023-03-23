import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Training from './components/NavComponents/Training';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
// import Announcements from './components/Announcements';
import NIGSTAdmin from './Dashboard/NIGSTAdmin';
import About from  './about/About'
import FacultyGeodesy from  './components/faculty/FacultyGeodesy';
import FacultyAdmin from './Dashboard/FacultyAdmin';
import Signup from './Dashboard/Signup'

function App() {
  
  return (
    <>
      <Router>
      {/* <Fixed/> */}
      <NIGSTAdmin/>
      {/* <FacultyAdmin/> */}
      {/* <Header/> */}
      {/* <Navbar/> */}
      
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/training' element={<Training/>} />
           <Route path='/about/introduction' element={<About/>} />
           <Route path='/faculty/geodesy' element={<FacultyGeodesy/>}/>
           <Route path='/about/nigst_campus' element={<Nigst_campus/>} />
        </Routes>
        <Footer/>
        <Copyright/>
      </Router>
    </>
  );
}

export default App;
