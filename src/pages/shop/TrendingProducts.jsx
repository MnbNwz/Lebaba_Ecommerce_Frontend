import React, { useState } from "react";
import commonData from "../../common/commonData.js";
import Products from "./Products.jsx";
import products from "../../Data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadMoreProducts = () => setVisibleProducts((prev) => prev + 4);
  return (
    <section className="section__container product__container">
      <h2 className="section__header"> Trending Products</h2>
      <p className="section__subheader mb-12">
        {commonData.TrendingProducts.text}
      </p>

      {/* Product page */}
      <div className="mt-12">
        <Products products={products.slice(0, visibleProducts)} />
      </div>

      {/* load more products btn */}
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button className="btn" onClick={loadMoreProducts}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
