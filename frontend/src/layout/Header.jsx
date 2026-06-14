import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="img-logo" src="logo.png" width="120px" alt="logo du site" />
        <h1>Restaurant Bremontier</h1>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
