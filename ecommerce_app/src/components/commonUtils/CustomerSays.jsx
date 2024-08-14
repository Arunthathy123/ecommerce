import React from 'react'
import cs1 from '../../assets/HomeStyles/cs1.png'
import cs2 from '../../assets/HomeStyles/cs2.png'
import cs3 from '../../assets/HomeStyles/cs3.png'
import '../../assets/CommonStyle/customerSays.css'

function CustomerSays() {
    const Customers =[
        {
          title:"“The best restaurant”",
          description:"Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
          img:cs1,
          name:"Sophire Robson",
          place:"Los Angeles, CA"
        },
        {
          title:"“Simply delicious”",
          description:"Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
          img:cs2,
          name:"Matt Cannon",
          place:"San Diego, CA"
        },
        {
          title:"“One of a kind restaurant”",
          description:"The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
          img:cs3,
          name:"Andy Smith",
          place:"San Francisco, CA"
        }
      ]
  return (
    <div>
      <div className='sixthSection'>
          <br/>
            <h1>What Our Customers Say</h1>
            <div className='customers'>
                {Customers.map((item, index)=>(
                    <div className='customersCard' key={index}>
                    <div className='title'>
                        <h3 style={{color:"#ad343e", fontFamily:"'DM Sans', sans-serif;"}}>{item.title}</h3>
                        <h6 style={{color:"#414536", fontFamily:"'DM Sans', sans-serif;", fontWeight:'normal', fontSize:'12px'}}>{item.description}</h6>
                    </div>

                    <hr className='divider' />

                    <div className='reviewer'>
                        <img src={item.img} alt="Reviewer" />
                        <div className='reviewer-details'>
                        <h6 style={{color:"#414536", fontFamily:"'DM Sans', sans-serif;", fontSize:'12px'}}>{item.name}</h6>
                        <h6 style={{color:"#414536", fontFamily:"'DM Sans', sans-serif;", fontWeight:'normal', fontSize:'12px'}}>{item.place}</h6>
                        </div>
                    </div>
                    </div>
                ))}
           </div>
        </div>
    </div>
  )
}

export default CustomerSays
