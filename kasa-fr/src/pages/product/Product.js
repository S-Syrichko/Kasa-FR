import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import data from "../../data/logements.json";
import Banner from "./Banner/Banner.js";
import Carrousel from "./Carrousel/Carrousel.js";

const pageStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const Product = (props) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(data.accomodations.find((item) => item.id === `${productId}`));
  }, [productId]);

  return (
    <div>
      <Carrousel images={product.pictures} />
      <Banner product={product} />
      <div style={pageStyle}>
        <Dropdown title="Description" content={product.description} halfSize />
        <Dropdown title="Equipements" content={product.equipments} halfSize />
      </div>
    </div>
  );
};

export default Product;
