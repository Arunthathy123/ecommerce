import React from 'react'
import Header from '../commonUtils/Header'
import Menubar from '../commonUtils/Menubar'
import '../../assets/PageStyle/page.css'
import img1 from '../../assets/PageStyle/img/img1.png'
import img2 from '../../assets/PageStyle/img/img2.png'
import img3 from '../../assets/PageStyle/img/img3.png'
import img4 from '../../assets/PageStyle/img/img4.png'
import img5 from '../../assets/PageStyle/img/img5.png'
import img6 from '../../assets/PageStyle/img/img6.png'
import img7 from '../../assets/PageStyle/img/img7.png'
import img8 from '../../assets/PageStyle/img/img8.png'
import img9 from '../../assets/PageStyle/img/img9.png'
import img10 from '../../assets/PageStyle/img/img10.png'
import img11 from '../../assets/PageStyle/img/img11.png'
import img12 from '../../assets/PageStyle/img/img12.png'
import Footer from '../commonUtils/Footer'


const Article =[

  {
    img:img1,
    date:"January 3, 2023",
    description:"How to prepare a delicious gluten free sushi"
  },
  {
    img:img2,
    date:"January 3, 2023",
    description:"Exclusive baking lessons from the pastry king"
  },
  {
    img:img3,
    date:"January 3, 2023",
    description:"How to prepare the perfect fries in an air fryer"
  },
  {
    img:img4,
    date:"January 3, 2023",
    description:"How to prepare delicious chicken tenders"
  },
  {
    img:img5,
    date:"January 3, 2023",
    description:"5 great cooking gadgets you can buy to save time"
  },
  {
    img:img6,
    date:"January 3, 2023",
    description:"The secret tips & tricks to prepare a perfect burger"
  },
  {
    img:img7,
    date:"January 3, 2023",
    description:"7 delicious cheesecake recipes you can prepare"
  },
  {
    img:img8,
    date:"January 3, 2023",
    description:"5 great pizza restaurants you should visit this city"
  },
  {
    img:img9,
    date:"January 3, 2023",
    description:"5 great cooking gadgets you can buy to save time"
  },
  {
    img:img10,
    date:"January 3, 2023",
    description:"How to prepare a delicious gluten free sushi"
  },
  {
    img:img11,
    date:"January 3, 2023",
    description:"Top 20 simple and quick desserts for kids"
  },
  {
    img:img12,
    date:"January 3, 2023",
    description:"Top 20 simple and quick desserts for kids"
  },

]

const Page = () => {
  return (
    <div>
        <div>
            <Header />
            <br/>
            <Menubar />
        </div>
        <div className='main-container'>

         {/* ------------ first section ------------------ */}

            <div className='first_Section_page'>
              <h1>Our Blog & Articles</h1>
              <h5>We consider all the drivers of change gives you the components you need to change to create a truly happens.</h5>
            </div>

              {/* ------------- second section -------------- */}

            
            <div className='second_Section_page'>
              {Article.map((item, index) => (
                  <div className='card_section_page' key={index}>
                      <img src={item.img} alt={item.name} />
                      <h6>{item.date}</h6>
                      <h4>{item.description}</h4>
                  </div>
              ))}
            </div>
        </div>
        {/* ------------ footer -------------- */}
        <Footer />
    </div>
  )
}

export default Page
