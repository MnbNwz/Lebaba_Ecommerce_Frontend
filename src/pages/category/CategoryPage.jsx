import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../Data/products.json";
import sharedObjects from "../../common/commonData";
import ProductComponent from "../shop/Products"

const CategoryPage = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const { categoryName } = useParams();
  const { subHeader } = sharedObjects.categoryPage;

  useEffect(() => {
    const filtered = products.filter(
      (products) => products.category === categoryName.toLowerCase()
    );
    setFilterProducts(filtered);
    return () => {};
  }, [categoryName]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling
    });

    return () => {};
  }, []);

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">{subHeader}</p>
      </section>

      {/* Products card */}

      <div className="section__container">
        <ProductComponent products={filterProducts} />
      </div>
    </>
  );
};

export default CategoryPage;
