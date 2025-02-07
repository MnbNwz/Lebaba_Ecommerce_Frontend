import React, { useEffect, useRef } from "react";
import Categories1 from "../../assets/category-1.jpg";
import Categories2 from "../../assets/category-2.jpg";
import Categories3 from "../../assets/category-3.jpg";
import Categories4 from "../../assets/category-4.jpg";
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
  // const categoriesRef = useRef(null);
  // const location = useLocation();

  // useEffect(() => {
  //   // Check if the current route matches the "categories/dress" path
  //   if (location.pathname.includes("/categories")) {
  //     if (categoriesRef.current) {
  //       categoriesRef.current.scrollIntoView({
  //         behavior: "smooth", // Smooth scrolling
  //         block: "start",
  //       });
  //     }
  //   }
  // }, [location]);
  const categories = [
    { name: "Accessories", path: "accessories", image: Categories1 },
    { name: "Dress Collection", path: "dress", image: Categories2 },
    { name: "Jewellery", path: "jewellery", image: Categories3 },
    { name: "Cosmetics", path: "cosmetics", image: Categories4 },
  ];

  return (
    <div className="product__grid">
      {categories.map((category, id) => (
        <Link
          key={id}
          to={`/categories/${category.path}`}
          className="categories__card"
        >
          <img src={category.image} alt={category.name} />
          <h4 className="">{category.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
