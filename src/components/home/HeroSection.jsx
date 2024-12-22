import React from "react";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";

const HeroSection = () => {
  const cards = [
    { id: 1, image: card1, trends: "2024 Trends", title: "Women Shirts" },
    { id: 2, image: card2, trends: "2024 Trends", title: "Women Dresses" },
    { id: 3, image: card3, trends: "2024 Trends", title: "Women Casuals" },
  ];
  return (
    <section className="section__container hero__container">
      {cards.map((card) => {
        const { id, image, trends, title } = card;
        return (
          <div key={id} className="hero__card">
            <img src={image} alt={title} />
            <div className="hero__content">
              <p className="">{trends}</p>\<h4 className="">{title}</h4>
              <a href="#" className="">
                Discover More
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HeroSection;
