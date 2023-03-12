import React from "react";
import styles from "./Gallery.module.scss";
import data from "../../../data/logements.json";
import Card from "../../../components/Card/Card.js";

const Gallery = () => {
  const renderedData = data.accomodations.map((item) => {
    return (
      <div key={item.id}>
        <Card item={item} />
      </div>
    );
  });

  return <div className={styles.container}>{renderedData}</div>;
};

export default Gallery;
