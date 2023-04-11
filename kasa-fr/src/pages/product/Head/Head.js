import React from "react";
import Tag from "../../../components/Tag/Tag.js";
import Rating from "../../../components/Rating/Rating.js";
import styles from "./Head.module.scss";

const Head = (props) => {
  const { product } = props;
  return (
    <div className={styles.root}>
      <div className={styles.product}>
        <h1>{product.title}</h1>
        <p className={styles.location}>{product.location}</p>
        <ul className={styles.taglist}>
          {product && product.tags && product.tags.length
            ? product.tags.map((tag, index) => (
                <li key={index}>
                  <Tag tagName={tag} />
                </li>
              ))
            : ""}
        </ul>
      </div>
      <div className={styles.owner}>
              <div className={styles.profile}>
                <h2>{product?.host?.name}</h2>
                <img src={product?.host?.picture} alt="avatar" />
              </div>
              <Rating rating={product.rating} />
      </div>
    </div>
  );
};

export default Head;
