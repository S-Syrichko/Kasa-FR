import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import data from "../../data/logements.json";
import Head from "./Head/Head.js";
import Carrousel from "../../components/Carrousel/Carrousel.js";
import NotFound from "../not-found_404/NotFound.js";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const foundProduct = data.accomodations.find(
      (item) => item.id === `${productId}`
    );
    if (foundProduct) {
      setProduct(foundProduct);
      setError(false);
    } else {
      setError(true);
    }
  }, [productId]);

  if (error) {
    return <NotFound />;
  }

  return (
    <div>
      <Carrousel images={product.pictures} />
      <Head product={product} />
      <div className={styles.productDetails}>
        <Dropdown title="Description" content={product.description} halfSize />
        <Dropdown title="Equipements" content={product.equipments} halfSize />
      </div>
    </div>
  );
};

export default Product;
