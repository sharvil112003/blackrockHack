import React from "react";
import { Link } from "react-router-dom";

import "./InfoCards.css";

const InfoCards = () => {
  const [clickCard, setClickCard] = useState();
  const Navigate = useNavigate();
  const handleClick = (index) => {
    console.log(`Clicked card ${index}`);
    if (index === 3) {
      Navigate("/scholarship");
    }
  };

  return (
    <div className="main">
      <ul className="cards">
        {cardData.map((card, index) => (
          <li className="cards_item" key={index}>
            <div className="card">
              {index === 0 ? (
                <Link to="/cropModel">
                  <div className="card_image">
                    <img src={card.image} alt={`Card ${index}`} />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{card.title}</h2>
                    <p className="card_text">{card.text}</p>
                    <button className="btn card_btn">Explore Now</button>
                  </div>
                </Link>
              ) : (
                <div>
                  <div className="card_image">
                    <img src={card.image} alt={`Card ${index}`} />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{card.title}</h2>
                    <p className="card_text">{card.text}</p>
                    <button className="btn card_btn">Explore Now</button>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const cardData = [
  {
    image:
      "https://i0.wp.com/geopard.tech/wp-content/uploads/2022/06/63.3-min.jpg?resize=1024%2C555&ssl=1",
    title: "FarmSmart",
    text: "Smart crop choices based on detailed soil fertility and weather predictions.",
  },
  {
    image:
      "https://basichomeloan.com/admin/uploads/banner/Banner_Land_Purchase.jpg",
    title: "Land Lending Hub",
    text: "Lease or borrow farmland with ease through our secure land lending platform.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRus2O7aZ1qmarnIQI02XFuBUEpxii3kdHc7A&s",
    title: "Farmer Investments",
    text: "Explore a variety of investment schemes tailored to maximize your farming profits.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRus2O7aZ1qmarnIQI02XFuBUEpxii3kdHc7A&s",
    title: "Children's Welfare",
    text: "Discover benefits for your children based on your land size and income details.",
  },
];

export default InfoCards;
