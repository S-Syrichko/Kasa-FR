import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <img
        className="logo--footer"
        src="./media/logo.png"
        alt="Logo Kasa"
      ></img>
      © 2020 Kasa. All rights reserved
    </footer>
  );
};

export default Footer;
