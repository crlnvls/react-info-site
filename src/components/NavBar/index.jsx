import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <img src="/logo.png" alt="React Logo" className="img" />
        <h3 className="item">React Facts</h3>
      </nav>
    </>
  );
};

export default NavBar;
