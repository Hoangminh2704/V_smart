// import React from "react";
import Header from "../../Component/Header/Header";
import Slides from "../../Component/Slides/Slides";
import Banner from "../../Component/Banner/Banner";
import Product from "../../Component/Product/Product";
import HorizontalBanner from "../../Component/Horizontal_banner/Horizontal_banner";
function Home() {
  return (
    <>
      <Header />
      <Slides />
      <Banner />
      <Product />
      <HorizontalBanner />
    </>
  );
}

export default Home;
