import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/mediasmart.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="App-header">
      <Link to="/">
        <img src={Logo} alt="mediasmart-logo" className="logo" />
      </Link>
      <p>Mediasmart members</p>
    </div>
  );
};

export default Header;
