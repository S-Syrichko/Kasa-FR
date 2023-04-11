import React, { lazy, Suspense } from "react";
import styles from "./Gallery.module.scss";
import data from "../../../data/logements.json";
import ThumbSkeleton from "../../../components/Thumb/skeleton/ThumbSkeleton.js";

const Thumb = lazy(() => import("../../../components/Thumb/Thumb.js"));

const Gallery = () => {
  return (
    <div className={styles.root}>
      {data.accomodations.map((item) => (
        <div className={styles.card} key={item.id}>
          <Suspense fallback={<ThumbSkeleton />}>
            <Thumb item={item} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
