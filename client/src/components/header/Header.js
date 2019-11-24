import React from "react";
import Logo from "../../assets/images/mediasmart.png";

import "./Header.css";

const Header = () => (
  <div className="App-header">
    <img src={Logo} alt="mediasmart-logo" className="logo" />
    <p>MediaSmart Members</p>
  </div>
);

export default Header;
