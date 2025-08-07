import React from "react";
import "./Brand.scss";
import KermetImg from "../../assets/image/Kermet.png";
import SamsungImg from "../../assets/image/Samsung.png";
import PanasonicImg from "../../assets/image/Panasonic.png";
import PhilipsImg from "../../assets/image/Philips.png";

const Brand: React.FC = () => {
  return (
    <div className="brand">
      <img className="brand-logo1" src={KermetImg} alt="Brand 1" />
      <img className="brand-logo2" src={SamsungImg} alt="Brand 2" />
      <img className="brand-logo3" src={PanasonicImg} alt="Brand 3" />
      <img className="brand-logo4" src={PhilipsImg} alt="Brand 4" />
    </div>
  );
};

export default Brand;
