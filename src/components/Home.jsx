import React from 'react'
import Header from "./Header"
import Menu from "./Menu";
import Exch from "./Exch"
import ImageSlider from './ImageSlider'
import Services from './Services'
import Payment from './Payment'
import Trusted from './Trusted'

const Home = () => {
  return (
    <div>
      <Menu />
       <Header />
      <ImageSlider />
      <Exch />
      <Services />
      <Trusted />
      <Payment />
      
    </div>
  )
}

export default Home
