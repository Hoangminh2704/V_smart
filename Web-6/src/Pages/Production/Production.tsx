// import React from "react";
import Header from "../../Component/Header/Header";
import Slides from "../../Component/Slides/Slides";
import Footer from "../../Component/Footer/Footer";
import Discount from "../../Component/Discount/Discount";
import Role from "../../Component/Role/Role";
import Direction from "../../Component/Direction/Direction";
import BrandSort from "../../Component/BrandSort/BrandSort";
import ProductGrid from "../../Component/ProductGrid/ProductGrid";

function Production() {
  return (
    <>
      <Header />
      <Slides />
      <Direction />
      <BrandSort />
      <ProductGrid />
      <Discount />
      <Role />
      <Footer />
    </>
  );
}

export default Production;
