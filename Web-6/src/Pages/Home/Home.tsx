// import React from "react";
import Header from "../../Component/Header/Header";
import Slides from "../../Component/Slides/Slides";
import Banner from "../../Component/Banner/Banner";
import Product from "../../Component/Product/Product";
import HorizontalBanner from "../../Component/Horizontal_banner/Horizontal_banner";
import BestSellingProduct from "../../Component/BestSellingProduct/BestSellingProduct";
import Brand from "../../Component/Brand/Brand";
function Home() {
  return (
    <>
      <Header />
      <Slides />
      <Banner />
      <Product />
      <HorizontalBanner />
      <BestSellingProduct />
      <Brand />
    </>
  );
}

export default Home;
