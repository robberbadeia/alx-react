import Holberton_Logo from "../Holberton_Logo.jpg";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="App-header" role="banner">
      <img src={Holberton_Logo} className="App-logo" alt="logo" />
      <h2>School dashboard</h2>
    </header>
  );
};

export default Header;
