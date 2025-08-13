import React from "react";
import "./AboutBanner.scss";
import {
  AboutSettingIcon,
  AboutPhoneIcon,
  AboutRocketIcon,
} from "../../assets/svg/svg";
const AboutBanner: React.FC = () => {
  return (
    <div className="aboutBanner">
      <div className="aboutBanner-content">
        <div className="aboutBanner-content-title">Wellcome </div>
        <div className="aboutBanner-content-description">
          It's Time for <br /> Smart Living
        </div>
      </div>
      <div className="aboutBanner-features">
        <div className="aboutBanner-features-setting">
          <AboutSettingIcon className="aboutBanner-features-setting-icon" />
          <div className="aboutBanner-features-setting-text">
            Lắp đặt tiện lợi & nhanh chóng
          </div>
        </div>
        <div className="aboutBanner-features-phone">
          <AboutPhoneIcon className="aboutBanner-features-phone-icon" />
          <div className="aboutBanner-features-phone-text">
            Tư vấn hỗ trợ lắp đặt và bảo trì
          </div>
        </div>
        <div className="aboutBanner-features-rocket">
          <AboutRocketIcon className="aboutBanner-features-rocket-icon" />
          <div className="aboutBanner-features-rocket-text">
            Lắp đặt tiện lợi & nhanh chóng
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
