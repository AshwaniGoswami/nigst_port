import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
import Training from './components/NavComponents/Training';
// import Footer from './components/Footer';
// import Copyright from './components/Copyright';
// import Announcements from './components/Announcements';
import NIGSTAdmin from './Dashoboard/NIGSTAdmin';

function App() {
  return (
    <>
      <Router>
        <Routes>
           <Route path="/nigstadmin" element={<NIGSTAdmin />}></Route>
        </Routes>
        {/* <Header /> */}
        {/* <Navbar /> */}
        {/* <Announcements /> */}
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/training' element={<Training/>} />
        </Routes>
        {/* <Footer/> */}
        {/* <Copyright/> */}
      </Router>
    </>
  );
}

export default App;
