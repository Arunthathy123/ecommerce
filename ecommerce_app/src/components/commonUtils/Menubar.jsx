import React from 'react'
import '../../assets/CommonStyle/menubar.css'
import italicImg from '../../assets/HomeStyles/italicImg.png'
import vector from '../../assets/HomeStyles/Vector.png'
const Menubar = () => {
  return (
    <div>
      <header className='menu-header'>
        
        <nav className='menu-navbar'>
            <div className='italicImg'>
                <img src={vector} alt='menuImg' />
                <img src={italicImg} alt='menuImg' />
            </div>
            
            <ul className='menu-nav-links'>
                <li><a href="#home">Homee</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Menu</a></li>
                <li><a href="#page">Page</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className='book-table'>
                <li><a href="#book">Book A Table</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Menubar
