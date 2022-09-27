import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img src="/Logo.svg" alt="Logo of Ema John" />
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
