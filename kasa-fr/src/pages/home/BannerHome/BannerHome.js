import React from "react";
import styles from "./BannerHome.module.scss";
import bannerImg from "../../../data/media/banner-home.png";

const BannerHome = () => {
  return (
    <div className={styles.root}>
      <img src={bannerImg} alt="nature"/>
      <h1>Chez vous,<br></br> partout et ailleurs</h1>
    </div>
  );
};

export default BannerHome;
