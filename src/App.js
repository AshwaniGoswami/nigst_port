import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';

import Training from './components/NavComponents/Training';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import About from './about/About';
import Fixed from './components/Fixed';
import FacultyGeodesy from './components/faculty/FacultyGeodesy';
import Nigst_campus from './about/Nigst_campus';


function App() {
  
  return (
    <>
      <Router>
      <Fixed/>
      
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
