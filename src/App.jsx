import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Card from './components/card'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [showPopup,setShowPopup] = useState(false);

  const HandlePopup=()=>{
    setShowPopup(true)
  };

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);

  return (
    <div className='overflow-x-hidden'>
      <Navbar HandlePopup={HandlePopup}/>
      <Hero/>
      <Banner/>
      <Card/>
      <About HandlePopup={HandlePopup}/>
      <Services/>
      <Footer/>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
      </div>
  )
}

export default App