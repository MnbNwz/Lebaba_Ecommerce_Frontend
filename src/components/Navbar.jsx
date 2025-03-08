import React, { useState } from "react";
import { Link } from "react-router-dom";
import sharedObjects from "../common/commonData";
import { useSelector } from "react-redux";
import CartModal from "../pages/shop/CartModal";

const Navbar = () => {
  const { navData, logoText } = sharedObjects;
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2Xl mx-auto px-4 flex justify-between items-center">
        <ul className="nav__links">
          {navData.map(({ name, route }, id) => (
            <li className="link" key={id}>
              <Link to={route}>{name}</Link>
            </li>
          ))}
        </ul>

        <div className="nav__logo">
          <Link to="/">
            {logoText}
            <span>.</span>
          </Link>
        </div>

        {/* nav icons */}

        <div className="nav__icons relative">
          <span>
            <Link to="/search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button onClick={toggleCart} className="hover:text-primary">
              <i className="ri-shopping-bag-line"></i>
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                {products.length}
              </sup>
            </button>
          </span>
          <span>
            <Link to="/login">
              <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>
      </nav>
      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={toggleCart}
        />
      )}
    </header>
  );
};

export default Navbar;
