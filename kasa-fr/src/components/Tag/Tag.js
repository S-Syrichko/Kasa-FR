import React from "react";
import styles from "./Tag.module.scss";

const Tag = (props) => {
  const tagName = props.tagName.split(" ")[0];
  return <div className={styles.root}>
    <p>{tagName}</p>
  </div>;
};

export default Tag;
