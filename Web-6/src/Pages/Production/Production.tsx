import { useState } from "react";
import Header from "../../Component/Header/Header";
import Slides from "../../Component/Slides/Slides";
import Footer from "../../Component/Footer/Footer";
import Discount from "../../Component/Discount/Discount";
import Role from "../../Component/Role/Role";
import Direction from "../../Component/Direction/Direction";
import BrandSort from "../../Component/BrandSort/BrandSort";
import ProductGrid from "../../Component/ProductGrid/ProductGrid";

interface FilterOptions {
  type: string;
  brand: string;
}

function Production() {
  const [currentFilter, setCurrentFilter] = useState<FilterOptions>({
    type: "",
    brand: "",
  });

  const handleBrandFilter = (selectedBrand: string) => {
    setCurrentFilter((prev) => ({
      ...prev,
      brand: prev.brand === selectedBrand ? "" : selectedBrand,
    }));
  };

  const handleTypeFilter = (selectedType: string) => {
    setCurrentFilter((prev) => ({
      ...prev,
      type: prev.type === selectedType ? "" : selectedType,
    }));
  };

  const getCurrentFilter = (): FilterOptions => {
    return currentFilter;
  };

  return (
    <>
      <Header />
      <Slides />
      <Direction />
      <BrandSort
        onBrandClick={handleBrandFilter}
        selectedBrand={currentFilter.brand}
      />
      <ProductGrid
        currentFilter={currentFilter}
        onTypeFilter={handleTypeFilter}
        getCurrentFilter={getCurrentFilter}
      />
      <Discount />
      <Role />
      <Footer />
    </>
  );
}

export default Production;
