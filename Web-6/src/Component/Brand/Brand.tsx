import React from "react";
import "./Brand.scss";
const Brand: React.FC = () => {
  return (
    <div className="brand">
      <img
        className="brand-logo1"
        src="../../src/assets/image/Kermet.png"
        alt="Brand 1"
      />
      <img
        className="brand-logo2"
        src="../../src/assets/image/Samsung.png"
        alt="Brand 2"
      />
      <img
        className="brand-logo3"
        src="../../src/assets/image/Panasonic.png"
        alt="Brand 3"
      />
      <img
        className="brand-logo4"
        src="../../src/assets/image/Philips.png"
        alt="Brand 4"
      />
    </div>
  );
};

export default Brand;
