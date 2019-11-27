import React from "react";
import Logo from "../../assets/images/mediasmart.png";

import "./Header.scss";

const Header = () => (
  <div className="App-header">
    <img src={Logo} alt="mediasmart-logo" className="logo" />
    <p>Mediasmart members</p>
  </div>
);

export default Header;
