import React from 'react'
import Header from '../commonUtils/Header'
import Menubar from '../commonUtils/Menubar';
import homeBckground from '../../assets/HomeStyles/homeBckground.png'
import '../../assets/HomeStyles/home.css'
import Button from '../commonUtils/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMugHot, faBowlFood, faGlassWater, faCake, faPhone, faEnvelope, faLocationDot, faClock, faReceipt, faCartShopping} from "@fortawesome/free-solid-svg-icons"
import thirdImg from '../../assets/HomeStyles/thirdImg.png'
import event1 from '../../assets/HomeStyles/event1.png'
import event2 from '../../assets/HomeStyles/event2.png'
import event3 from '../../assets/HomeStyles/event3.png'
import event4 from '../../assets/HomeStyles/event4.png'
import shefImg from '../../assets/HomeStyles/shefImg.png' 
import dish1 from '../../assets/HomeStyles/dish1.png'
import dish2 from '../../assets/HomeStyles/dish2.png'
import articleImg1 from '../../assets/HomeStyles/articleImg1.png'
import articleImg2 from '../../assets/HomeStyles/articleImg2.png'
import articleImg3 from '../../assets/HomeStyles/articleImg3.png'
import articleImg4 from '../../assets/HomeStyles/articleImg4.png'
import articleImg5 from '../../assets/HomeStyles/articleImg5.png'
import CustomerSays from '../commonUtils/CustomerSays';
import Footer from '../commonUtils/Footer';

const Dishes = [
  {
    icon: faMugHot,
    title: "Breakfast",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
    buttonName: "Explore Menu"
  },
  {
    icon: faBowlFood,
    title: "Main Dishes",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
    buttonName: "Explore Menu"
  },
  {
    icon: faGlassWater,
    title: "Drinks",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
    buttonName: "Explore Menu"
  },
  {
    icon: faCake,
    title: "Desserts",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
    buttonName: "Explore Menu"
  }
];
const events =[
  {
    img: event1,
    title: "Caterings",
    description: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    img: event2,
    title: "Birthday",
    description: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    img: event3,
    title: "Wedding",
    description: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    img: event4,
    title: "Events",
    description: "In the new era of technology we look in the future with certainty for life.",
  }
]

const articles = [
  {
    img: articleImg2,
    date: "January 5, 2023",
    title: "How to make the perfect dessert",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit..."
  },
  {
    img: articleImg3,
    date: "January 5, 2023",
    title: "How to make the perfect dessert",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit..."
  },
  {
    img: articleImg4,
    date: "January 5, 2023",
    title: "How to make the perfect dessert",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit..."
  },
  {
    img: articleImg5,
    date: "January 5, 2023",
    title: "How to make the perfect dessert",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit..."
  },
]



const Home = () => {
  function bookATable(){
    alert("hai")
  }
  return (
    <div >
      <div>
        <Header />
        <br/>
        <Menubar />
      </div>
      <div >


        {/* --------- first section ----------------- */}

          <div className='homeBckground'>
            <img src={homeBckground}/>
            <div className='overlay'>
              <div>
                <h1 style={{ marginBottom: '0' }}>Best food for</h1>
                <h1 style={{ marginTop: '-25px' }}>your taste</h1>
                <h4>Discover delectable cuisine and unforgettable moments </h4>
                <h4 style={{ marginTop: '-10px' }}>in our welcoming, culinary haven.</h4>
              </div>
            
              <div className="HomeImgBtn">
                <Button type="submit" className="HomeImgBtn-BookATable" buttonValue="Book A Table" onClick={bookATable}/>
                <Button type="submit" className="HomeImgBtn-ExploreMenu" buttonValue="Explore Menu" onClick={bookATable}/>
              </div>
            </div>
          </div>


        {/* --------- second section ----------------- */}

        <div className='browseMenu'>
          <h1>Browse Our Menu</h1>
          <br/>
          <div className='container'>
           {Dishes.map((item,index)=>(
            <div className='cards' key={index}>
              <div><FontAwesomeIcon className='icon' icon={item.icon} size="xl" style={{ color: "#333" }} /></div>
              <h3>{item.title}</h3>
              <div className='paragraph'>
              <h6>{item.description}</h6>
              <a href='#'>{item.buttonName}</a>
              </div>
            </div>
           ))}
          </div>
        </div>


           {/* --------- third section ----------------- */}


        <div className='thirdSection'>
          <div className='Img'>
            <img src={thirdImg}/>
          </div>
          <div className='dialogue'>
            <h1>We provide healthy food for your family.</h1>
            <h5>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h5>
            <h6>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</h6>
          </div>
        </div>
          <div className='contactDetails'>
            <h3>Come and visit us</h3>
            <br/>
            <div>
              <FontAwesomeIcon icon={faPhone} size="xs" style={{ color: "#ffffff" , }} />
              &nbsp;&nbsp; - 123456789
            </div>
            <br/>
            <div>
            <FontAwesomeIcon  size="sm" icon={faEnvelope} style={{color: "#fcfcfd",}} />
            &nbsp;&nbsp; - abcd@gmail.com
            </div>
            <br/>
            <div className='location'>
              <FontAwesomeIcon  size="sm" icon={faLocationDot} style={{color: "#fcfcfd",}} />
              &nbsp;&nbsp; - 837 W.  Lane, Los Angeles
            </div>
            
          </div>


          {/* --------- fourth section ----------------- */}


          
          <br/><br/>
        <div className='fourthSection'>
          <h1>We also offer unique services for your events</h1>
          <div className='events'>
            {events.map((item,index)=>(
              <div className='event-cards' key={index}>
                <div><img src={item.img}/></div>
                <h3>{item.title}</h3>
                <h5>{item.description}</h5>
              </div>
            ))} 
          </div>
        </div>

        {/* --------- fifth section ----------------- */}

        <div className='fifthSection'>
          <div className='shefImg'>
            <img src={shefImg}/>
          </div>
          <div className='dishes'>
            <img src={dish1} className='dish1'/>
            <img src={dish2} className='dish2'/>
            
            
          </div>
          <div>
            <div className='dialogue2'>
              <h1>Fastest Food Delivery in City</h1>
              <h6>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </h6>
            </div>
            <div className='features'>
              <div className='featureList'>
                <FontAwesomeIcon className='featureIcon' icon={faClock} size="xs" />
                  <h5>Delivery within 30 minutes</h5>
              </div>
              <div className='featureList'>
                <FontAwesomeIcon className='featureIcon' icon={faReceipt} size="xs" />
                  <h5>Best Offer & Prices</h5>
              </div>
              <div className='featureList'>
                <FontAwesomeIcon className='featureIcon' icon={faCartShopping} size="xs" />
                  <h5>Online Services Available</h5>
              </div>
            </div>
          </div>
        </div>

        {/* --------- sixth section ----------------- */}

        
        <CustomerSays />

        {/* ------------ seventh section ------------------ */}

        <br/><br/>
        <div className='seventhSection'>
          <div className='articleHead'>
            <h1>Our Blog & Articles</h1>
            <Button className="articleBtn" buttonValue="Read All Articles" onClick={bookATable} type="submit"/>
          </div>
          <div className='articleCards'>
            <div className='firstImg'>
              <img src={articleImg1} alt="First Article"/>
              <div className='fistImgDescription'>
                <h6 style={{color:'#848978'}}>January 3, 2023</h6>
                <h5>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h5>
                <h6>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</h6>
              </div>
            </div>
            <div className='gridContainer'>
              {articles.map((item,index)=>(
                <div key={index} className='gridItem'>
                  <img src={item.img} />
                  <h6>{item.date}</h6>
                  <h5>{item.title}</h5>
                </div>
              ))}

            </div>
          </div>
        </div>


        {/* ------------ eight section ------------------ */}
        <Footer />

        
      </div>

    </div>
  )
}

export default Home
