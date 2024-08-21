import React, { useState } from 'react';
import '../../assets/CommonStyle/menubar.css';
import italicImg from '../../assets/HomeStyles/italicImg.png';
import vector from '../../assets/HomeStyles/Vector.png';
import { FaBars } from 'react-icons/fa';

const Menubar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsmenuOpen(!isMenuOpen);
  };

  return ( 
    <div>
      <header className='menu-header'>
        <nav className='menu-navbar'>
          <div className={`italicImg ${isMenuOpen ? 'active' : ''}`}>
            <img className='img1' src={vector} alt='menuImg' />
            <img className='img2' src={italicImg} alt='menuImg' />
          </div>

          <ul className={`menu-nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/page">Page</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <ul className={`book-table ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/BookeATable">Book A Table</a></li>
          </ul>

          <div className='menu-bar-icon' onClick={toggleMenu}>
            <FaBars />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Menubar;
