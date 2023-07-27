import React, {useState, useEffect} from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import './style.css'
import {  Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import History from './Pages/About/History/History'
import Mission from './Pages/About/Mission/Mission';
import Pastoral from './Pages/About/Pastoral/Pastoral';
import Ministry from './Pages/Ministries/Ministry';
import Sermons from './Pages/Sermons/Sermons';
import Live from './Pages/Live/Live';
import Young from './Pages/Ministries/Young/index';



function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach scroll event listener to the window
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/About/Mission' element={<Mission />} />
        <Route path='/ministries' element={<Ministry />} />
        <Route path='/About/Pastoral' element={<Pastoral />} />
        <Route path='/About/History' element={<History />} />
        <Route path='/Sermons/' element={<Sermons />} />
        <Route path='/Live/livestream' element={<Live />} />
        <Route path='/ministries/young-adults' element={<Young />} />
      </Routes>
      {showButton && (
        <button
          className="scroll-top-button"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
      <Footer />
    </>
  )
}

export default App