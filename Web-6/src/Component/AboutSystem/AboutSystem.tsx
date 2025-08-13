import React from "react";
import "./AboutSystem.scss";
import SystemImg from "../../assets/image/system.png";
import { ContactLocationIcon, ContactPhoneIcon } from "../../assets/svg/svg";
const AboutSystem: React.FC = () => {
  return (
    <div className="aboutSystem">
      <img className="aboutSystem__img" src={SystemImg} alt="" />
      <div className="aboutSystem__content">
        <div className="aboutSystem__content-header">
          Welcome to V smart Ideas
        </div>
        <div className="aboutSystem__content-description">
          Thiết bị thông minh được ra đời đã đóng góp thành tựu vô cùng to lớn
          đặc biệt đối với người sử dụng nhà thông minh. V SMART IDEARS cung cấp
          cho hệ thống nhà thông minh những sản phẩm đa dạng .
        </div>
        <div className="aboutSystem__content-info">
          <div className="aboutSystem__content-info-location">
            <ContactLocationIcon className="aboutSystem__content-info-location-icon" />
            <div className="aboutSystem__content-info-location-text">
              22/55 Nguyễn Huy Tự, phường Ngọc Trạo, Thanh Hóa
            </div>
          </div>
          <div className="aboutSystem__content-info-phone">
            <ContactPhoneIcon className="aboutSystem__content-info-phone-icon" />
            <div className="aboutSystem__content-info-phone-text">
              0986 442 181
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSystem;
