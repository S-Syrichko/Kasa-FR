import React from "react";
import styles from "./Rating.module.scss";
import { ReactComponent as StarPink } from "../../../data/svg/star-pink.svg";
import { ReactComponent as StarGrey } from "../../../data/svg/star-grey.svg";

const Rating = (props) => {
  const total = 5;
  const rating = Math.min(props.rating, total);
  const remainingPoints = total - rating;

  const elements = [];

  for (let i = 0; i < rating; i++) {
    elements.push(
      <span key={`starPink-${i}`}>
        <StarPink />
      </span>
    );
  }

  for (let i = 0; i < remainingPoints; i++) {
    elements.push(
      <span key={`starGrey-${i}`}>
        <StarGrey />
      </span>
    );
  }
  return <div className={styles.root}>{elements}</div>;
};

export default Rating;
