import React from "react";
import sharedObjects from "../../common/commonData";

const PromoBanner = () => {
  const { reviewText, moneyBackText, offers, deliveryText } =
    sharedObjects.PromoBannerText;
  return (
    <section className="section__container banner__container">
      <div className="banner__card">
        <span>
          <i className="ri-truck-line"></i>
        </span>
        <h4> {deliveryText}</h4>
        <p>{offers}</p>
      </div>

      <div className="banner__card">
        <span>
          <i className="ri-money-dollar-circle-line"></i>
        </span>
        <h4> {moneyBackText}</h4>
        <p>{reviewText}</p>
      </div>

      <div className="banner__card">
        <span>
          <i className="ri-user-voice-fill"></i>
        </span>
        <h4> {deliveryText}</h4>
        <p>{offers}</p>
      </div>
    </section>
  );
};

export default PromoBanner;
