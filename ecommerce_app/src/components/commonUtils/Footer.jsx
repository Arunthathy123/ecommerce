import React from 'react'
import eight1 from '../../assets/HomeStyles/eight1.png'
import eight2 from '../../assets/HomeStyles/eight2.png'
import eight3 from '../../assets/HomeStyles/eight3.png'
import eight4 from '../../assets/HomeStyles/eight4.png'
import '../../assets/CommonStyle/footer.css'

const Footer = () => {
  return (
    <div>
      <div className='eighthSection'>
          <div className='mainDiv'>
            <div className='firstDiv'>
              <div >
                <img src={eight1} alt='menuImg'  />
                <img src={eight2} alt='menuImg'  />
              </div>
              <div style={{width:'200px', color:'#ADB29E'}}>
                <h6 >In the new era of technology we look a in the future with certainty and pride to for our company and.</h6>
              </div>
              <div><img src={eight3} /></div>  
            </div>
            <div className='secondDiv'>
              <h5>Pages</h5>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Delivery</li>
              </ul>
            </div>
            <div className='thirdDiv'>
              <h5>Utility Pages</h5>
              <ul>
                <li>Start Here</li>
                <li>Styleguide</li>
                <li>Password Protected</li>
                <li>404 Not Found</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>View More</li>
              </ul>
            </div>
            <div className='fourthDiv'>
              <h5>Follow Us On Instagram</h5>
              <img src={eight4} style={{width:'70%'}}/>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          

        </div>
    </div>
  )
}

export default Footer
