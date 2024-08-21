import React from 'react'
import Header from '../commonUtils/Header';
import Menubar from '../commonUtils/Menubar';
import '../../assets/Book_A__Table/book_a_table.css'
import InputField from '../commonUtils/InputField';
import Button from '../commonUtils/Button';
import Footer from '../commonUtils/Footer';

const input = [
    { label: "Name", type: "text", placeholder: "Enter the name" },
    { label: "Email", type: "email", placeholder: "Enter the email" },
    
];

const Send = ()=>{
    alert("send")
}
const Contact = () => {
  return (
    <div>
        <div>
            <Header />
            <br/>
            <Menubar />
        </div>
        <div className='main-container' style={{backgroundColor:'#f9f9f7'}}>
            <div className='first_Section1'>
                <h1>Contact Us</h1>
                <h5>We consider all the drivers of change gives you the components you need to change to create a truly happens.</h5>
            </div>
           

            {/* ------------- second section -------------- */}

            <div className='second_section_2'>
                <div className='cardBookAT'>
                    <div className='inputGrid'>
                        {input.map((item, index) => (
                            <InputField
                                key={index}
                                label={item.label}
                                type={item.type}
                                className="Booke_A_table_input"
                               placeholder={item.placeholder}
                            />
                        ))}
                    </div>
                    <div className='inputFullWidth'>
                        <InputField
                            label='Subject'
                            type='text'
                            className="Booke_A_table_input_person"
                            placeholder='Write a subject'
                            
                        />
                        <label>Message</label>
                        <textarea
                            label='Message'
                            type='textArea'
                            className="contact_message"
                            placeholder='Write your message'
                            rows="5"
                    
                        />
                        <Button type="submit" className="Book_A_table_Button" buttonValue="Send" onClick={Send}></Button>

                    </div>
                </div>
            </div>


            {/* -------------- THIRD sECTION -------------- */}

            <div className='thirdSec'>
                <div>
                    <h3>Call Us:</h3>
                    <h4>+1-234-567-8900</h4>
                </div>
                <div>
                    <h3>Hours:</h3>
                    <h5>Mon-Fri: 11am - 8pm Sat, <br/>Sun: 9am - 10pm</h5>
                </div>
                <div>
                    <h3>Our Location:</h3>
                    <h5>123 Bridge Street<br/> Nowhere Land,<br/> LA 12345 United States</h5>
                </div>
            </div>
        </div>
       
        <Footer  />
      
    </div>
  )
}

export default Contact
