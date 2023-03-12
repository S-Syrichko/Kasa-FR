import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { item } = props;

  return (
    <Link to="/product">
      <div className={styles.container}>
        <h2>{item.title}</h2>
      </div>
    </Link>
  );
};

export default Card;
