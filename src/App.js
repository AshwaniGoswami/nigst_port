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
      {/* <Fixed/> */}
      {/* <Header/> */}
      {/* <Navbar/> */}
      
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/training' element={<Training/>} />
           <Route path='/about/introduction' element={<About/>} />
        </Routes>
        {/* <Footer/> */}
        {/* <Copyright/> */}
      </Router>
    </>
  );
}

export default App;
