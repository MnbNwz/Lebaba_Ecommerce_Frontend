import React from "react";
import dealsImg from "../../assets/deals.png";
import sharedObjects from "../../common/commonData";

const DealSection = () => {
  const { h4, h5, paraText } = sharedObjects.DealSection;
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img className="" src={dealsImg} alt="Deal" />
      </div>

      <div className="deals__content">
        <h5 className="">{h5}</h5>
        <h4 className="">{h4}</h4>
        <p className="">{paraText}</p>

        <div className="deals__countdown flex_wrap">
          <div className="deals__countdown__card">
            <h4 className="">14</h4>
            <p className="">Days</p>
          </div>
          <div className="deals__countdown__card">
            <h4 className="">20</h4>
            <p className="">Hours</p>
          </div>
          <div className="deals__countdown__card">
            <h4 className="">10</h4>
            <p className="">Mins</p>
          </div>
          <div className="deals__countdown__card">
            <h4 className="">40</h4>
            <p className="">Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
