import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
  );
};

export default Nav;
