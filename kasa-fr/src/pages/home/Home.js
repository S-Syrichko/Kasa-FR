import React, { lazy, Suspense } from "react";
import BannerSkeleton from "./BannerHome/skeleton/BannerSkeleton.js";
//import BannerHome from "./BannerHome/BannerHome.js";
import Gallery from "./Gallery/Gallery.js";

const BannerHome = lazy(() => import("./BannerHome/BannerHome.js"));

const Home = () => {
  return (
    <div className="Home">
      <Suspense fallback={<BannerSkeleton />}>
        <BannerHome />
      </Suspense>
      <Gallery />
    </div>
  );
};

export default Home;
