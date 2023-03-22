import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';

import Training from './components/NavComponents/Training';
// import Footer from './components/Footer';
// import Copyright from './components/Copyright';
// import Announcements from './components/Announcements';
import NIGSTAdmin from './Dashoboard/NIGSTAdmin';

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
        </Routes>
        {/* <Footer/> */}
        {/* <Copyright/> */}
      </Router>
    </>
  );
}

export default App;
