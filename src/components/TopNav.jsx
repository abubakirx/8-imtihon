import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hd__container">
      <div className="navbar__wrapper">
        <Link to="/">
          <img src="../assets/images/logo.svg" alt="site-logo" width={260} height={40} />
        </Link>

        <ul className="pages__list">
          <NavLink className="pages__item" to="/">Home</NavLink>
          <NavLink className="pages__item" to="/about">About</NavLink>
          <NavLink className="pages__item" to="/recipes">Recipes</NavLink>
          <NavLink className="pages__item" to="/create">Create</NavLink>
        </ul>

        <Link to="/recipes" className="btn navbar__btn">Browse recipes</Link>

        <div className="hamburger__wrapper">
          <button onClick={() => setOpen(!open)}>☰</button>
          {open && (
            <ul className="pages__wrapper">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/recipes">Recipes</NavLink>
              <NavLink to="/create">Create</NavLink>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNav;

