import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../Carousel';
import Footer from '../Footer';
import { slides } from '../../data/carouselData.json';
import InfoCards from '../InfoCards';
import Chatbot from '../Chatbot';

const Home = () => {
  const navigate = useNavigate();

  const toggleChatbot = () => {
    navigate('/chatbot');
  };

  return (
    <div>
      <Carousel data={slides} />
      <InfoCards />
      <button onClick={() => {navigate("/mandi-prices")}}>Go to Mandi Prices</button>
      <button onClick={toggleChatbot} className="chatbot-icon">Chat</button>
      <Footer />
    </div>
  );
};

export default Home;
