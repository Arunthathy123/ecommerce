import React, { useState, useRef } from 'react';
import Header from '../commonUtils/Header';
import Menubar from '../commonUtils/Menubar';
import '../../assets/AboutStyle/About.css';
import first_1 from '../../assets/AboutStyle/imgs/fist_1.png';
import third from '../../assets/AboutStyle/imgs/third.png';
import hotelVdos from '../../assets/AboutStyle/imgs/hotelVdo.mp4';
import restaurant_menu from '../../assets/AboutStyle/imgs/restaurant-menu.png'
import icon from '../../assets/AboutStyle/imgs/Icon.png'
import timer from '../../assets/AboutStyle/imgs/timer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import CustomerSays from '../commonUtils/CustomerSays';
import Footer from '../commonUtils/Footer';
const features =[
  {
    icon:restaurant_menu,
    title:"Multi Cuisine",
    discription:"In the new era of technology we look in the future with certainty life."
  },
  {
    icon:icon,
    title:"Easy To Order",
    discription:"In the new era of technology we look in the future with certainty life."
  },
  {
    icon:timer,
    title:"Fast Delivery",
    discription:"In the new era of technology we look in the future with certainty life."
  }

]
const guest =[
  {
    count:"3",
    discription:"Locations"
  },
  {
    count:"1995",
    discription:"Founded"
  },
  {
    count:"65+",
    discription:"Staff Members"
  },
  {
    count:"100%",
    discription:"Satisfied Customers  "
  },
]
function About() {
  const [isPlaying, setIsPlaying] = useState(false); 
  const videoRef = useRef(null); 

  const handlePlayClick = () => {
    setIsPlaying(true);
    videoRef.current.play(); 
  };
  const handlePause = () => {
    setIsPlaying(false); 
  };

  return (
    <div>
      <div>
        <Header />
        <br />
        <Menubar />
      </div>
      <div className='main-container'>
        {/* ---------first section---------------- */}
        <div className='firstSection'>
          <div className='image-container'>
            <img src={first_1} alt='Description Image' className='image' />
          </div>
          <div className='overlay_card'>
            <h3>Come and visit us</h3>
            <div className='card_Details'>
              <FontAwesomeIcon icon={faPhone} size="xs" className="FontIcon" style={{ color: "#ffffff" }} />-
              <h4> 123456789</h4>
            </div>
            <div className='card_Details'>
              <FontAwesomeIcon size="sm" icon={faEnvelope} className="FontIcon" style={{ color: "#fcfcfd", }} />-
              <h4> abcd@gmail.com</h4>
            </div>
            <div className='card_Details'>
              <FontAwesomeIcon size="sm" icon={faLocationDot} className="FontIcon" style={{ color: "#fcfcfd", }} />-
              <h4>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</h4>
            </div>
          </div>
          <div className='description'>
            <h2>We provide healthy food for your family.</h2>
            <p className='para1'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
            <p className='para2'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
          </div>
        </div>

        {/* -----------second Section -------------------- */}
        <div className='second_section'>
          <div className='vdoPlay'>
            <video ref={videoRef} controls className='hotelVideo' onPause={handlePause} onPlay={() => setIsPlaying(true)}>
              <source src={hotelVdos} type='video/mp4' />
            </video>
            {!isPlaying && ( 
              <div className='overlay_video'>
                <button className='play-button' onClick={handlePlayClick}>
                  ▶
                </button>
                <p className='video-text'>Feel the authentic & original taste from us</p>
              </div>
            )}
          </div>
          <br/>
          <div className='vdo_card'>
            {features.map((item,index)=>(
              <div className='feature_Vdo_card' key={index}>
                <img src={item.icon} alt="feature_Vdo_card" />
                <div className='feature_Vdo_card-details'>
                  <h6 style={{color:"#414536", fontFamily:"'DM Sans', sans-serif;", fontSize:'12px'}}>{item.title}</h6>
                  <h6 style={{color:"#414536", fontFamily:"'DM Sans', sans-serif;", fontWeight:'normal', fontSize:'12px'}}>{item.discription}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------third section---------------- */}


        <div className='firstSection' style={{backgroundColor:"#f9f9f7"}}>
          
         
          <div className='description'>
            <div>
              <h2>A little information for our valuable guest</h2>
              <p className='para1' style={{  fontFamily:"'DM Sans', sans-serif;", fontSize:'12px', fontWeight:"normal",}}>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            </div>
            <div className='guest_card'>
              {guest.map((item,index)=>(
                <div className='feature_guest_card' key={index}>
                  <div className='feature_guest_card-details'>
                    <h1 style={{color:"#414536" }}>{item.count}</h1>
                    <h6 style={{color:"#414536", fontFamily:"'DM Sans', sans-serif;", fontWeight:'normal', marginTop:'-10px' }}>{item.discription}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='image-container' >
            <img src={third} alt='Description Image' className='third_image' />
          </div>
        </div>


        {/* ----------------- fourth section -----------  */}
        <CustomerSays />
        
      </div>
      {/* ------------ fifth section ------------------ */}
      <Footer />
    </div>
  );
}

export default About;
