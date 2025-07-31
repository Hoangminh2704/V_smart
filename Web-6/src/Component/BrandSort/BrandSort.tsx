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
const BrandSort: React.FC = () => {
  return (
    <div className="BrandSort">
      <div className="BrandSort__item">
        <Panasonic className="BrandSort__item-logo" />
      </div>
      <div className="BrandSort__item">
        <Lumi className="BrandSort__item-logo" />
      </div>
      <div className="BrandSort__item">
        <Acis className="BrandSort__item-logo" />
      </div>
      <div className="BrandSort__item">
        <Philips className="BrandSort__item-logo" />
      </div>
      <div className="BrandSort__item">
        <Siemens className="BrandSort__item-logo" />
      </div>
      <div className="BrandSort__item">
        <Vimar className="BrandSort__item-logo" />
      </div>
    </div>
  );
};

export default BrandSort;
