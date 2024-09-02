import React, { useEffect, useState } from 'react';
import Header from '../commonUtils/Header';
import Menubar from '../commonUtils/Menubar';
import '../../assets/MenuStyle/menu.css';
import Button from '../commonUtils/Button';
import online1 from '../../assets/MenuStyle/img/online1.png';
import online2 from '../../assets/MenuStyle/img/online2.png';
import online3 from '../../assets/MenuStyle/img/online3.png';
import online4 from '../../assets/MenuStyle/img/online4.png';
import online5 from '../../assets/MenuStyle/img/online5.png';
import online6 from '../../assets/MenuStyle/img/online6.png';
import online7 from '../../assets/MenuStyle/img/online7.png';
import online8 from '../../assets/MenuStyle/img/online8.png';
import online9 from '../../assets/MenuStyle/img/online9.png';
import Footer from '../commonUtils/Footer';
import Loader from '../commonUtils/Loader';
import Pagination from '../commonUtils/Pagination';

const onlineSites = [
  { img: online1 },
  { img: online2 },
  { img: online3 },
  { img: online4 },
  { img: online5 },
  { img: online6 },
  { img: online7 },
  { img: online8 },
  { img: online9 },
];

export const Menu = () => {
  const [activeButton, setActiveButton] = useState('All');
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [noItems, setNoItems] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  let indexOfLastDish = currentPage * itemsPerPage;
  //  1 * 4 = 4
  //  2 * 4 = 8
  //  3 * 4 = 12
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;
  // 4 - 4 = 0
  // 8 - 4 = 4
  // 12 - 4 = 8

  
  const handleButton = (buttonValue) => {
    setActiveButton(buttonValue);
    setCurrentPage(1);
  };

  async function getAllCategories() {
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const menuItems = data.categories.map((category) => ({
        img: category.strCategoryThumb,
        price: '$ 9.99',
        name: category.strCategory,
        description: category.strCategoryDescription,
        category: category.strCategory,
      }));
      return menuItems;
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data: ', error);
      return [];
    }
  }

  async function getOnlyOneFunction() {
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    try {
      const response = await fetch(API_URL);
      const singleDishData = await response.json();
      const menuItems = singleDishData.meals.map((meal) => ({
        img: meal.strMealThumb,
        price: '$ 9.99',
        name: meal.strMeal,
        description: 'Tasty Seafood',
        category: 'Seafood',
      }));
      return menuItems;
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data: ', error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const categoriesData = await getAllCategories();
      const oneDishData = await getOnlyOneFunction();

      // Combine both datasets
      const combinedMenu = [...categoriesData, ...oneDishData];
      setMenu(combinedMenu);
      setLoading(false);
    }

    fetchData();
  }, []);

  const filterdMenu =
    activeButton === 'All'
      ? menu
      : activeButton === 'Main Dishes'
      ? menu.filter((item) => item.category !== 'Breakfast' && item.category !== 'Dessert')
      : menu.filter((item) => item.category === activeButton);

      
      let showTheseDishesNow = filterdMenu.slice(indexOfFirstDish,indexOfLastDish )

  useEffect(() => {
    setNoItems(showTheseDishesNow.length === 0);
  }, [showTheseDishesNow]);

  
  return (
    <div>
      <div>
        <Header />
        <br />
        <Menubar />
      </div>
      <div className='main-container'>
        <div className='first_Section1'>
          <h1>Our Menu</h1>
          <h5>We consider all the drivers of change gives you the components you need to change to create a truly happens.</h5>
          <div className='buttons'>
            {['All', 'Breakfast', 'Main Dishes', 'Seafood', 'Drinks', 'Dessert'].map((buttonValue) => (
              <Button
                key={buttonValue}
                type='submit'
                className={`buttonsFirst ${activeButton === buttonValue ? 'active' : ''}`}
                buttonValue={buttonValue}
                onClick={() => handleButton(buttonValue)}
              />
            ))}
          </div>
        </div>
        {/* ------------- scecond section ------------------- */}

        {loading ? (
          <Loader loading={loading} />
        ) : noItems ? (
          <div className='no-items-message'>
            <h3 style={{ color: 'red', marginTop: '20%', fontFamily: "'DM Sans', sans-serif" }}>
              Sorry, No items available for this category ...!
            </h3>
          </div>
        ) : (
          <div className='secondSection'>
            {showTheseDishesNow.map((item, index) => (
              <div className={`card_section ${activeButton === item.category ? 'active-card' : ''} ${!item.description ? 'auto-height' : ''}`} key={index}>
                <img src={item.img} alt={item.name} />
                <h3>{item.price}</h3>
                <h4>{item.name}</h4>
                <h6>{item.description}</h6>
              </div>
            ))}
            

            
          </div>

          
        )}
        <Pagination  filterd_Menu = {filterdMenu} itemsPerPage = {itemsPerPage} currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>

        {/* ------------- third section ------------------- */}

        <div className='thirdSectionMenu'>
          <div className='third_fisrt_div'>
            <h1>You can order through apps</h1>
            <h6>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</h6>
          </div>
          <div className='third_second_div'>
            {onlineSites.map((item, index) => (
              <div className='white_Cards' key={index}>
                <img src={item.img} alt={`Online site ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
