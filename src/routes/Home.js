import React from 'react'
import Bed from '../components/Bed'
import Copy from '../components/Copy'
import Design from '../components/Design'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Rectangle from '../components/Rectangle'
import SignUp from '../components/SignUp'
import Vintage from '../components/Vintage'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Rectangle/>
      <Design/>
      <Vintage/>
      <Bed/>
      <Products/>
      <SignUp/>
      <Footer/>
      <Copy/>
    </div>
  )
}

export default Home
