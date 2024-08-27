import React, { useEffect, useState } from 'react'
import Header from '../commonUtils/Header';
import Menubar from '../commonUtils/Menubar';
import '../../assets/MenuStyle/menu.css'
import Button from '../commonUtils/Button'
// import secImg1 from '../../assets/MenuStyle/img/secImg1.png'
// import secImg2 from '../../assets/MenuStyle/img/secImg2.png'
// import secImg3 from '../../assets/MenuStyle/img/secImg3.png'
// import secImg4 from '../../assets/MenuStyle/img/secImg4.png'
// import secImg5 from '../../assets/MenuStyle/img/secImg5.png'
// import secImg6 from '../../assets/MenuStyle/img/secImg6.png'
// import secImg7 from '../../assets/MenuStyle/img/secImg7.png'
// import secImg8 from '../../assets/MenuStyle/img/secImg8.png'
import online1 from '../../assets/MenuStyle/img/online1.png'
import online2 from '../../assets/MenuStyle/img/online2.png'
import online3 from '../../assets/MenuStyle/img/online3.png'
import online4 from '../../assets/MenuStyle/img/online4.png'
import online5 from '../../assets/MenuStyle/img/online5.png'
import online6 from '../../assets/MenuStyle/img/online6.png'
import online7 from '../../assets/MenuStyle/img/online7.png'
import online8 from '../../assets/MenuStyle/img/online8.png'
import online9 from '../../assets/MenuStyle/img/online9.png'
import Footer from '../commonUtils/Footer';
import Loader from '../commonUtils/Loader'

// const menu = [
//   {
//     img: secImg1,
//     price: "$ 9.99",
//     name: "Fried Eggs",
//     description: "Made with eggs, lettuce, salt, oil and other ingredients.",
//     category: "Breakfast"
//   },
//   {
//     img: secImg2,
//     price: "$ 15.99",
//     name: "Hawaiian Pizza",
//     description: "Made with eggs, lettuce, salt, oil and other ingredients.",
//     category: "Main Dishes"
//   },
//   {
//     img: secImg3,
//     price: "$ 7.25",
//     name: "Martinez Cocktail",
//     description: "Made with eggs, lettuce, salt, oil and other ingredients.",
//     category: "Drinks"
//   },
//   {
//     img: secImg4,
//     price: "$ 20.99",
//     name: "Butterscotch Cake",
//     description: "Made with eggs, lettuce, salt, oil and other ingredients.",
//     category: "Desserts"
//   },
//   {
//     img: secImg5,
//     price: "$ 5.89",
//     name: "Mint Lemonade",
//     description: "Made with eggs, lettuce, salt, oil and other ingredients.",
//     category: "Drinks"
//   },
//   {
//     img: secImg6,
//     price: "$ 18.05",
//     name: "Chocolate Icecream",
//     description: "Made with eggs, lettuce, salt, oil and other ingredients.",
//     category: "Desserts"
//   },
//   {
//     img: secImg7,
//     price: "$ 12.55",
//     name: "Cheese Burger",
//     description: "Made with eggs, lettuce, salt, oil and other ingredients.",
//     category: "Main Dishes"
//   },
//   {
//     img: secImg8,
//     price: "$ 12.99",
//     name: "Classic Waffles",
//     description: "Made with eggs, lettuce, salt, oil and other ingredients.",
//     category: "Breakfast"
//   },
// ]

const onlineSites = [
  {
    img : online1,
  },
  {
    img : online2,
  },
  {
    img : online3,
  },
  {
    img : online4,
  },
  {
    img : online5,
  },
  {
    img : online6,
  },
  {
    img : online7,
  },
  {
    img : online8,
  },
  {
    img : online9,
  },
]
export const Menu = () => {
  const [activeButton, setActiveButton] = useState('All');
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [noItems, setNoItems] = useState(false);
  const [singleDish, setSingleDish] = useState([]);

  // const [category, setCategory] = useState([])
  const handleButton = (buttonValue) => {
    setActiveButton(buttonValue);
  };

  async function getAllCategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        // console.log("data data ====>>> ", data);
        const menuItems = data.categories.map(category => ({
          img: category.strCategoryThumb,
          price: "$ 9.99",
          name: category.strCategory,
          description: category.strCategoryDescription,
          category: category.strCategory
        }));
        // console.log("menu categories ====>>> ", menuItems.map(item => item.category));
        // const categoryList = ['All', ...new Set(menuItems.map(item => item.category))];
        // setCategory(categoryList)
        setMenu(menuItems);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data: ", error);
        
      }
  }

  // get only one dish 
  async function getOnlyOneFunction() {
    console.log("****************************************" )
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
      console.log("API_URL", API_URL)
      try {
        console.log("----------try------------")
        const response = await fetch(API_URL);
        console.log("response------", response)
        const singleDishData = await response.json();
        console.log("singleDish data data ====>>> ", singleDishData);
        const menuItems = singleDishData.categories.map(category => ({
          img: category.strCategoryThumb,
          price: "$ 9.99",
          name: category.strCategory,
          description: category.strCategoryDescription,
          category: category.strCategory
        }));
        console.log("menu categories ====>>> ", menuItems.map(item => item.category));
        // const categoryList = ['All', ...new Set(menuItems.map(item => item.category))];
        // setCategory(categoryList)
        setMenu(menuItems);
        setLoading(false);
      } catch (error) {
        console.log("----------catch------------")
        setLoading(false);
        console.error("Error fetching data: ", error);
        
      }
  }



  useEffect(() => {
    getAllCategories();
    getOnlyOneFunction();
  }, []);
  
  


  const filterdMenu = activeButton === 'All' ? menu : activeButton === "Main Dishes" ? menu.filter(item => item.category !== 'Breakfast' && item.category !== 'Dessert')
  : menu.filter(item => item.category === activeButton);

  useEffect(()=>{
    setNoItems(filterdMenu.length === 0 )
  })
   
  return (
    <div>
        <div>
            <Header />
            <br/>
            <Menubar />
        </div>
        <div className='main-container'>


          {/* ------------ first section ------------------ */}

          <div className='first_Section1'>
            <h1>Our Menu</h1>
            <h5>We consider all the drivers of change gives you the components you need to change to create a truly happens.</h5>
            <div className='buttons'>
              {['All', 'Breakfast', 'Main Dishes', 'Seafood','Drinks', 'Dessert'].map((buttonValue) => (
                <Button 
                  key={buttonValue} 
                  type="submit" 
                  className={`buttonsFirst ${activeButton === buttonValue ? 'active' : ''}`} 
                  buttonValue={buttonValue} 
                  onClick={() => handleButton(buttonValue)}
                />
              ))}
            </div>
          </div>

            {/* ------------- second section -------------- */}

          {loading ? 
          <Loader loading={loading} />
          :noItems ?
          <div className='no-items-message'>
            <h3 style={{color:"red", marginTop:'20%', fontFamily:"'DM Sans', sans-serif"}}>Sorry, No items available for this category ...!</h3>
            
          </div>
          :
          <div className='secondSection'>
          {filterdMenu.map((item, index) => (
              <div className={`card_section ${activeButton === item.category ? 'active-card' : ''}`} key={index}>
                  <img src={item.img} alt={item.name} />
                  <h3>{item.price}</h3>
                  <h4>{item.name}</h4>
                  <h6>{item.description}</h6>
              </div>
          ))}

          </div> }
          


            {/* ------------- third section -------------- */}

          <div className='thirdSectionMenu'>
            <div className='third_fisrt_div'>
              <h1>You can order through apps</h1>
              <h6>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</h6>
            </div>
            <div className='third_second_div'>
              {onlineSites.map((item,index)=>(
                <div className='white_Cards' key={index}>
                  <img src={item.img}  />
                </div>
              ))}
              
            </div>
          </div>

          
        </div>
        {/* ------------- fourth section -------------- */}

        <Footer />
    </div>
  )
}
