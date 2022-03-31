import React from 'react'
import Navbar from './Navbar/Navbar';
import Slider from './Slider';
import Rest from './Restaurant/Rest';
import Foods from './RestaurantItem/Foods'

import Footer from './Footer/Footer';
const Home = () => {
  return (
    <div>
    {/* <Navbar/> */}
     <Slider/>
     <Rest/> 
   
     <Footer/>
    </div>
  )
}

export default Home