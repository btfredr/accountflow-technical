import React from "react";
import { Link } from "react-router-dom";

const Header = ({ countCartItems }) => {
  return (
    <div className="header">
      <div className="links-container">
        <Link to="/" className="header-link">
          Accountflow Shop
        </Link>
      </div>
      <div>
        <Link to="/cart" className="header-link">
          Cart
          {countCartItems ? (
            <button className="cartSymbol">{countCartItems}</button>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
