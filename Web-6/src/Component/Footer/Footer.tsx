import React from "react";
import "./Footer.scss";
import logo from "../../assets/image/Footer__logo.png";
import { PhoneIcon, MailIcon, LocationIcon } from "../../assets/svg/svg";
const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__content-contact">
          <div className="Footer__intro">
            <div className="Footer__intro-logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="Footer__intro-description">
              It is a long established fact that a reader will be distracted by
              the readable content.
            </div>
          </div>
          <div className="Footer__detail">
            <div className="Footer__detail-item">
              <div className="Footer__detail-item-icon">
                <PhoneIcon className="Footer__detail-item-icon-svg" />
              </div>
              <div className="Footer__detail-item-content">0986 442 181</div>
            </div>
            <div className="Footer__detail-item">
              <div className="Footer__detail-item-icon">
                <MailIcon className="Footer__detail-item-icon-svg" />
              </div>
              <div className="Footer__detail-item-content">
                Gosto@google.com
              </div>
            </div>
            <div className="Footer__detail-item">
              <div className="Footer__detail-item-icon">
                <LocationIcon className="Footer__detail-item-icon-svg" />
              </div>
              <div className="Footer__detail-item-content">
                22/55 Nguyễn Huy Tự, phường Ngọc Trạo, Thanh Hóa
              </div>
            </div>
          </div>
        </div>
        <div className="Footer__content-info">
          <div className="Footer__about">
            <div className="Footer__about-header">Về chúng tôi</div>
            <div className="Footer__about-body">
              <a className="Footer__about-body-item" href="#" title="Trang chủ">
                Trang chủ
              </a>
              <a
                className="Footer__about-body-item"
                href="#"
                title="Giới thiệu"
              >
                Giới thiệu
              </a>
              <a className="Footer__about-body-item" href="#" title="Sản phẩm">
                Sản phẩm
              </a>
              <a className="Footer__about-body-item" href="#" title="Tin tức">
                Tin tức
              </a>
            </div>
          </div>
          <div className="Footer__support">
            <div className="Footer__support-header">Hỗ trợ</div>
            <div className="Footer__support-body">
              <a className="Footer__about-body-item" href="#" title="Tìm kiếm">
                Tìm kiếm
              </a>
              <a className="Footer__about-body-item" href="#" title="Đăng nhập">
                Đăng nhập
              </a>
              <a className="Footer__about-body-item" href="#" title="Đăng ký">
                Đăng ký
              </a>
              <a className="Footer__about-body-item" href="#" title="Giỏ hàng">
                Giỏ hàng
              </a>
            </div>
          </div>
          <div className="Footer__guide">
            <div className="Footer__guide-header">Hướng dẫn</div>
            <div className="Footer__guide-body">
              <a
                className="Footer__about-body-item"
                href="#"
                title="Hướng dẫn mua hàng"
              >
                Hướng dẫn mua hàng
              </a>
              <a
                className="Footer__about-body-item"
                href="#"
                title="Hướng dẫn thanh toán"
              >
                Hướng dẫn thanh toán
              </a>
              <a
                className="Footer__about-body-item"
                href="#"
                title="Hướng dẫn giao nhận"
              >
                Hướng dẫn giao nhận
              </a>
              <a
                className="Footer__about-body-item"
                href="#"
                title="Điều khoản dịch vụ"
              >
                Điều khoản dịch vụ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
