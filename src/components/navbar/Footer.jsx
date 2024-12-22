import React from "react";
import InstaImg1 from "../../assets/instagram-1.jpg";
import InstaImg2 from "../../assets/instagram-2.jpg";
import InstaImg3 from "../../assets/instagram-3.jpg";
import InstaImg4 from "../../assets/instagram-4.jpg";
import InstaImg5 from "../../assets/instagram-5.jpg";
import InstaImg6 from "../../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <a
              href="https://www.google.com/maps?q=Islamabad,Punjab,Pakistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="ri-map-pin-2-fill"></i>
              </span>
              Islamabad, Punjab, Pakistan
            </a>
          </p>
          <p>
            <a href="mailto:muneebnawaz2018@gmail.com">
              <span>
                <i className="ri-mail-fill"></i>
              </span>
              muneebnawaz2018@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+923027577308">
              <span>
                <i className="ri-phone-fill"></i>
              </span>
              (+92) 302 7577308
            </a>
          </p>
        </div>

        <div className="footer__col">
          <h4 className="">COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work With Us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Terms & Conditions</a>
        </div>

        <div className="footer__col">
          <h4 className="">USEFUL LINK</h4>
          <a href="/">Help</a>
          <a href="/">Track your order</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">Dresses</a>
        </div>
        <div className="footer__col">
          <h4 className="">INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={InstaImg1} alt="" />
            <img src={InstaImg2} alt="" />
            <img src={InstaImg3} alt="" />
            <img src={InstaImg4} alt="" />
            <img src={InstaImg5} alt="" />
            <img src={InstaImg6} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
