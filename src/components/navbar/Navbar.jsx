import React from "react";
import { Link } from "react-router-dom";
import sharedObjects from "../../common/commonData";

const Navbar = () => {
  const { navData, logoText } = sharedObjects;
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
            <button className="hover:text-primary">
              <i class="ri-shopping-bag-line"></i>
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                0
              </sup>
            </button>
          </span>
          <span>
            <Link to="/login">
              <i class="ri-user-line"></i>
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
