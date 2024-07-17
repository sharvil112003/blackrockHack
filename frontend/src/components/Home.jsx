import React from 'react'
import Carousel from '../components/Carousel.jsx'
import Footer from '../pages/Footer.jsx'
import { slides } from '../data/carouselData.json'
import InfoCards from '../components/InfoCards.jsx'
import Chatbot from '../components/Chatbot.jsx'

const Home = () => {
  return (
    <div>
      <Carousel data={slides} />
      <InfoCards />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default Home
