import React from "react";
import styles from "./Header.module.scss";
import Nav from "../Nav/Nav.js";

const Header = () => {
  return (
    <header className={styles.container}>
      <img className="logo" src="./media/logo.png" alt="Logo Kasa"></img>
      <Nav />
    </header>
  );
};

export default Header;
