import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Footer from '../pages/Footer';
import InfoCards from '../components/InfoCards';
import { slides } from '../data/carouselData.json';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Carousel data={slides} />
      <InfoCards />
      <Footer />
    </div>
  );
};

export default Home;
