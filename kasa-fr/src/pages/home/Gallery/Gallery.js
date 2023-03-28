import React from "react";
import styles from "./Gallery.module.scss";

import data from "../../../data/logements.json";
import Thumb from "../../../components/Thumb/Thumb.js";


const Gallery = () => {
  return (
    <div className={styles.root}>
      {data.accomodations.map((item) => (
        <div key={item.id}>
          <Thumb item={item} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
