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
    elements.push(<StarPink key={`starPink-${i}`} />);
  }

  for (let i = 0; i < remainingPoints; i++) {
    elements.push(<StarGrey key={`starGrey-${i}`} />);
  }
  return <div className={styles.root}>{elements}</div>;
};

export default Rating;
