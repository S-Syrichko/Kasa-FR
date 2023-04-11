import React from "react";
import styles from "./BannerAbout.module.scss";
import bannerImg from "../../../assets/png/banner-about.png";

const BannerAbout = () => {
  return (
    <div className={styles.root}>
      <img src={bannerImg} alt="mountains" />
    </div>
  );
};

export default BannerAbout;
