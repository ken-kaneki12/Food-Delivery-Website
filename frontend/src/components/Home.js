import React from 'react'
import Navbar from './Navbar';
import Slider from './Slider';
import Rest from './Rest';
import Foods from './Foods'
const Home = () => {
  return (
    <div>
    <Navbar/>
     <Slider/>
     <Rest/> 
     <Foods/>
    </div>
  )
}

export default Home