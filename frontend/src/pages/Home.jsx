import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Footer from "../pages/Footer";
import InfoCards from "../components/InfoCards";
import { slides } from "../data/carouselData.json";
import NewsTicker from "../components/NewsTicker";
import Calculator from "../components/Calculator";
import SupportVideo from "../components/SupportVideo";
import Chatbot from "../components/Chatbot";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Carousel data={slides} />
      <Chatbot />
      <InfoCards />
      <div className="content-container">
        <SupportVideo />
        <NewsTicker />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
