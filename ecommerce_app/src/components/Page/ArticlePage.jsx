import React from 'react'
import Header from '../commonUtils/Header'
import Menubar from '../commonUtils/Menubar'
import '../../assets/PageStyle/page.css'
import article1 from '../../assets/PageStyle/img/article1.png'
import article2 from '../../assets/PageStyle/img/article2.png'
import img1 from '../../assets/PageStyle/img/img1.png'
import img2 from '../../assets/PageStyle/img/img2.png'
import img3 from '../../assets/PageStyle/img/img3.png'
import img4 from '../../assets/PageStyle/img/img4.png'
import {  useNavigate } from 'react-router-dom'
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
]
const ArticlePage = () => {
    const navigate = useNavigate()
  function articleFn(){
    navigate("/article")
  }
  return (
    <div>
      <div>
            <Header />
            <br/>
            <Menubar />
        </div>
        <div className='main-container' >

        <div style={{backgroundColor:'#f9f9f7'}}>
            {/* ------------ first section ------------------ */}
            
            <div className='first_Section_page'>
              <h1 >The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
            </div>

            {/* ------------ second section ------------------ */}

            <div className='second_Section_article'>
                <img src={article1} />
            </div>

            {/* ------------ third section ------------------ */}

            <div className='third_Section_article'>
                <div className='fisrtDivArticle'>
                    <h4>What do you need to prepare a home-made burger?</h4>
                    
                    <p>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
                    <div class="numbered-paragraphs">
                        <p><b>  Quality Beef:</b> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</p>
                        <p><b> Seasoning: </b> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</p>
                        <p><b> Don’t Overwork the Meat:</b> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</p>
                        <p><b> Cooking:</b> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</p>
                        <p><b> Resting:</b> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</p>
                    </div>
                </div>
                <div className='fisrtDivArticle'>
                    <h4>What are the right ingredients to make it delicious?</h4>
                    
                    <p>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
                    <div class="numbered-paragraphs">
                        <p><b>  Quality Beef:</b> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</p>
                        <p><b> Seasoning: </b> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</p>
                        <p><b> Don’t Overwork the Meat:</b> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</p>
                        <p><b> Cooking:</b> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</p>
                        <p><b> Resting:</b> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</p>
                    </div>
                </div>

                    {/* ------------ fourth section ------------------ */}

                <div className='second_Section_article'>
                    <img src={article2} />
                </div>

                {/* ------------ fifth section ------------------ */}

                <div className='fisrtDivArticle'>
                    <h4>What are the right ingredients to make it delicious?</h4>
                    <p>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..</p>
                </div>

            </div>
        </div>
        <div>
            <div className='first_Section_page'>
                <h1 >Read More Articles</h1>
                <h5> We consider all the drivers of change gives you the components you need to change to create a truly happens.</h5>
            </div>
            <div className='second_Section_page'>
              {Article.map((item, index) => (
                  <div className='card_section_page' key={index} onClick={articleFn}>
                      <img src={item.img} alt={item.name} />
                      <h6>{item.date}</h6>
                      <h4>{item.description}</h4>
                  </div>
              ))}
            </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default ArticlePage
