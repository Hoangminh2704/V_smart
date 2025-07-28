import React from "react";
import "./Horizontal_banner.scss";
import Image from "../../assets/image/Horizontal_banner.png";
import { RightIcon } from "../../assets/svg/svg";
const HorizontalBanner: React.FC = () => {
  return (
    <div className="HorizontalBanner">
      <div className="HorizontalBanner__image">
        <img src={Image} alt="Horizontal Banner" />
      </div>
      <div className="HorizontalBanner__overall">
        <div className="HorizontalBanner__overall__content">
          <div className="HorizontalBanner__overall__content-header">
            Best seller
          </div>
          <div className="HorizontalBanner__overall__content-name">
            App watch series 6
          </div>
          <div className="HorizontalBanner__overall__content-discount">
            Get 15% off when buying online
          </div>
        </div>
        <div className="HorizontalBanner__overall__button">
          <span className="HorizontalBanner__overall__button-text">
            Shop Now
          </span>
          <RightIcon className="HorizontalBanner__overall__button-icon" />
        </div>
      </div>

      <div className="HorizontalBanner__circle1"></div>
      <div className="HorizontalBanner__circle2"></div>
      <div className="HorizontalBanner__circle3"></div>
      <div className="HorizontalBanner__circle4"></div>
      <div className="HorizontalBanner__circle5"></div>
    </div>
  );
};
export default HorizontalBanner;
