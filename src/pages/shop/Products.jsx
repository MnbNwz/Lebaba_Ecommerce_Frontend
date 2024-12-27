import React from "react";
import { Link } from "react-router-dom";
// import RatingStars from "./RatingStars";

const Products = (props) => {
  const { products } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => {
        const { id, image, name, price, oldPrice, rating } = product;
        return (
          <div key={index} className="product__card">
            <div className="relative">
              <Link to={`/shop/${id}`}>
                <img
                  className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
                  src={image}
                  alt={name}
                />
              </Link>

              <div className="hover:block absolute top-3 right-3">
                <button>
                  <i className="ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
                </button>
              </div>
            </div>

            <div className="product__card__content">
              <h4 className="">{name}</h4>
              <p className="">
                ${price} {oldPrice ? <s>${oldPrice}</s> : null}
              </p>

              <RatingStars rating={rating} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`ri-star${i <= rating ? "-fill" : "-line"}`}
      ></span>
    );
  }
  return <div className="product__rating">{stars}</div>;
};

export default Products;
