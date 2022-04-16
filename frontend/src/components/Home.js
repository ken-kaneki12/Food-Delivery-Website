import React from 'react'

import Slider from './Slider';
import Rest from './Restaurant/Rest';


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