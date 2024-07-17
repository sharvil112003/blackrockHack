import React from 'react';
import Slider from 'react-slick';
import './componentCSS/Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import myImage1 from '../assets/Farmer1.jpeg';
import myImage2 from '../assets/Farmer2.jpeg';
import myImage3 from '../assets/Farmer3.jpeg';
import myImage4 from '../assets/Farmer4.jpeg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="full-width-carousel">
                <Slider {...settings}>
                    <div className="full-width-slide">
                        <img src={myImage1} alt="Slide 1" className="slide-image" />
                        <div className="slide-text-container">
                            <div className="slide-title" style={{fontSize: "30px"}}>Optimize your kisan funds with our easy-to-use management tools.</div>
                            <p className="slide-text" style={{fontSize: "15px"}}>Our platform offers simple and effective tools to help farmers manage their finances, ensuring they can focus on what they do best - farming.</p>
                        </div>
                    </div>
                    <div className="full-width-slide">
                        <img src={myImage2} alt="Slide 2" className="slide-image" />
                        <div className="slide-text-container">
                            <div className="slide-title" style={{fontSize: "30px"}}>Get expert investment advice tailored for Indian farmers.</div>
                            <p className="slide-text" style={{fontSize: "15px"}}>We provide personalized investment advice to help Indian farmers make informed decisions and maximize their returns.</p>
                        </div>
                    </div>
                    <div className="full-width-slide">
                        <img src={myImage3} alt="Slide 3" className="slide-image" />
                        <div className="slide-text-container">
                            <div className="slide-title" style={{fontSize: "30px"}}>Boost your farm’s income with smart financial planning.</div>
                            <p className="slide-text" style={{fontSize: "15px"}}>Utilize our financial planning tools to increase your farm's profitability and secure a stable financial future.</p>
                        </div>
                    </div>
                    <div className="full-width-slide">
                        <img src={myImage4} alt="Slide 4" className="slide-image" />
                        <div className="slide-text-container">
                            <div className="slide-title" style={{fontSize: "30px"}}>Helping farmers make informed investment decisions.</div>
                            <p className="slide-text" style={{fontSize: "15px"}}>Our website is dedicated to empowering Indian farmers with the tools and knowledge they need to make informed investment decisions.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Carousel;
