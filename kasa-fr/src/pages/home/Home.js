import React from "react";
import BannerHome from "./BannerHome/BannerHome.js";
import Gallery from "./Gallery/Gallery.js";


const Home = () => {
  return (
    <div className='Home'>
      <BannerHome />
      <Gallery />
    </div>
  );
};

export default Home;
