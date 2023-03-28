import React from "react";
import { Link } from "react-router-dom";
import styles from "./Thumb.module.scss";

const Thumb = (props) => {
  const { item } = props;

  return (
    <Link to={`/product/${item.id}`}>
      <div className={styles.root}>
        <img src={item.cover} alt={item.title} />
        <h2>{item.title}</h2>
      </div>
    </Link>
  );
};

export default Thumb;
