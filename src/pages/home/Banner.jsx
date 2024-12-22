import React from "react";
import { Link } from "react-router-dom";
import sharedObjects from "../../common/commonData";
import bannerImg from "../../assets/header.png";

const Banner = () => {
  const { explore, bannerText, fashionText, discountText } =
    sharedObjects.bannerText;
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase"> {discountText}</h4>
        <h1 className="">{fashionText}</h1>
        <p className="">{bannerText}</p>
        <button className="btn uppercase">
          <Link to="/shop">{explore}</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="Banner " />
      </div>
    </div>
  );
};

export default Banner;
