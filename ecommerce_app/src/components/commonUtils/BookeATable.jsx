import React, { useState } from 'react'
import Header from './Header';
import Menubar from './Menubar';
import '../../assets/Book_A__Table/book_a_table.css'
import InputField from './InputField';
import Button from './Button';
import Footer from './Footer';

const input = [
    { label: "Date", type: "date", placeholder: "" },
    { label: "Time", type: "time", placeholder: "" },
    { label: "Name", type: "text", placeholder: "Enter Name" },
    { label: "Phone Number", type: "tel", placeholder: "Enter Phone Number" }
];


const BookeATable = () => {
    const [totalPerson, setTotalPerson] = useState(1); 
    function BookATableFn(){
        alert("yes")
    }
    
  return (
    <div>
        <div>
            <Header />
            <br/>
            <Menubar />
        </div>
        <div className='main-container' style={{backgroundColor:'#f9f9f7'}}>
            <div className='first_Section1'>
                <h1>Book A Table</h1>
                <h5>We consider all the drivers of change gives you the components you need to change to create a truly happens.</h5>
            </div>
            <iframe 
                        className='mapBackground'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.783099740564!2d-122.41941528468127!3d37.77492927975996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e3d4ddc71%3A0x5a56b7a3f4e5a68d!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1614093316432!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>

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
                            label='Total Person'
                            type='number'
                            className="Booke_A_table_input_person"
                            placeholder=''
                            value={totalPerson}
                            onChange={(e) => setTotalPerson(e.target.value)}
                        />
                        <Button type="submit" className="Book_A_table_Button" buttonValue="Book A Table" onClick={BookATableFn}></Button>

                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
        <Footer  />
        </div>
        
    </div>
  )
}

export default BookeATable