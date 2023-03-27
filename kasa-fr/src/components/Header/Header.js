import React from "react";
import styles from "./Header.module.scss";
import Nav from "../Nav/Nav.js";
import logo from "../../data/media/logo.png";

const Header = () => {
  return (
    <header className={styles.root}>
      <img className="logo" src={logo} alt="Logo Kasa"></img>
      <Nav />
    </header>
  );
};

export default Header;
