import React from "react";
import "./BrandSort.scss";
import {
  Panasonic,
  Lumi,
  Acis,
  Philips,
  Siemens,
  Vimar,
} from "../../assets/svg/logo";

interface BrandSortProps {
  onBrandClick?: (brand: string) => void;
  selectedBrand?: string;
}

const BrandSort: React.FC<BrandSortProps> = ({
  onBrandClick,
  selectedBrand,
}) => {
  const handleBrandClick = (brand: string) => {
    if (onBrandClick) {
      onBrandClick(brand);
    }
  };

  return (
    <div className="BrandSort">
      <div
        className={`BrandSort__item ${
          selectedBrand === "Panasonic" ? "BrandSort__item--selected" : ""
        }`}
        data-brand="Panasonic"
        onClick={() => handleBrandClick("Panasonic")}
      >
        <Panasonic className="BrandSort__item-logo" />
      </div>
      <div
        className={`BrandSort__item ${
          selectedBrand === "Lumi" ? "BrandSort__item--selected" : ""
        }`}
        data-brand="Lumi"
        onClick={() => handleBrandClick("Lumi")}
      >
        <Lumi className="BrandSort__item-logo" />
      </div>
      <div
        className={`BrandSort__item ${
          selectedBrand === "Acis" ? "BrandSort__item--selected" : ""
        }`}
        data-brand="Acis"
        onClick={() => handleBrandClick("Acis")}
      >
        <Acis className="BrandSort__item-logo" />
      </div>
      <div
        className={`BrandSort__item ${
          selectedBrand === "Philips" ? "BrandSort__item--selected" : ""
        }`}
        data-brand="Philips"
        onClick={() => handleBrandClick("Philips")}
      >
        <Philips className="BrandSort__item-logo" />
      </div>
      <div
        className={`BrandSort__item ${
          selectedBrand === "Siemens" ? "BrandSort__item--selected" : ""
        }`}
        data-brand="Siemens"
        onClick={() => handleBrandClick("Siemens")}
      >
        <Siemens className="BrandSort__item-logo" />
      </div>
      <div
        className={`BrandSort__item ${
          selectedBrand === "Vimar" ? "BrandSort__item--selected" : ""
        }`}
        data-brand="Vimar"
        onClick={() => handleBrandClick("Vimar")}
      >
        <Vimar className="BrandSort__item-logo" />
      </div>
    </div>
  );
};

export default BrandSort;
