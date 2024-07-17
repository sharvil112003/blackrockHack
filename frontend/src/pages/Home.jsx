import React from 'react'
import Carousel from '../Carousel'
import Footer from '../Footer'
import About from '../About'
import {slides} from '../../data/carouselData.json'
import InfoCards from '../InfoCards.jsx'
import Chatbot from '../Chatbot.jsx'

const Home = () => {
  return (
    <div>
     <Carousel data={slides} />   
     <InfoCards />
      <Footer/>        
      <Chatbot />   
    </div>
  )
}

export default Home
