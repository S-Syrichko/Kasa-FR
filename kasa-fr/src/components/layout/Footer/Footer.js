import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/png/logo.png";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <img className="logo--footer" src={logo} alt="Logo Kasa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
