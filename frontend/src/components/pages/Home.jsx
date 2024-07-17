import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../Carousel';
import Footer from '../Footer';
import { slides } from '../../data/carouselData.json';
import InfoCards from '../InfoCards';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Carousel data={slides} />
      <InfoCards />
      <button onClick={() => {navigate("/mandi-prices")}}>Go to Mandi Prices</button>
      <Footer />
    </div>
  );
};

export default Home;
