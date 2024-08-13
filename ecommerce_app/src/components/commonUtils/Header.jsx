import React from 'react'
import '../../assets/CommonStyle/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div>
        <header className='header'>
        
            <div className='logo'>
                <FontAwesomeIcon icon={faPhone} size="xs" style={{ color: "#ffffff" , }} />
                &nbsp;&nbsp;- 123456789
                &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon  size="sm" icon={faEnvelope} style={{color: "#fcfcfd",}} />
                &nbsp;&nbsp; - abcd@gmail.com
            </div>
            <nav className='navbar'>
                <ul className='nav-links'>
                    <li className='social-media'>
                        <a href='https://facebook.com' target='_blank' rel="noopener noreferrer">
                         <i class="fa-brands fa-facebook"></i>
                        </a>&nbsp;&nbsp;
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>&nbsp;&nbsp;
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>&nbsp;
                    </li>

                </ul>
            </nav>
        </header>
      
    </div>
  )
}

export default Header
