import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const TopNavigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="hd__container">
      <div className="navbar__wrapper">
        <Link to="/">
          <img
            src="../assets/images/logo.svg"
            alt="site-logo"
            width={260}
            height={40}
          />
        </Link>

        <ul className="pages__list">
          <NavLink className="pages__item" to="/">
            Home
          </NavLink>
          <NavLink className="pages__item" to="/about">
            About
          </NavLink>
          <NavLink className="pages__item" to="/recipes">
            Recipes
          </NavLink>
          <NavLink className="pages__item" to="/create">
            Create
          </NavLink>
        </ul>

        <Link to="/recipes" className="btn navbar__btn">
          Browse recipes
        </Link>

        <div className="hamburger__wrapper">
          <button onClick={toggleMenu}>
            <img
              className="hamburger__icon"
              src="../assets/images/icon-hamburger-menu.svg"
              alt="menu-icon"
            />
          </button>

          {menuVisible && (
            <div className="pages__wrapper">
              <ul className="pages">
                <li className="page">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="page">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="page">
                  <NavLink to="/recipes">Recipes</NavLink>
                </li>
                <li className="page">
                  <NavLink to="/create">Create</NavLink>
                </li>
              </ul>
              <Link to="/recipes" className="btn navbar__btn__tab">
                Browse recipes
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
