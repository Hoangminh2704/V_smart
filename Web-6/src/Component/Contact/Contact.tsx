import React from "react";
import "./Contact.scss";
import {
  ContactPhoneIcon,
  ContactMailIcon,
  ContactLocationIcon,
} from "../../assets/svg/svg";
const ContactComponent: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <div className="contact__header-title">Thông tin liên hệ</div>
        <div className="contact__header-info">
          Lorem ipsum dolor sit amet, consec adipisl elit, sed do eiusmod tempor
          <br />
          incidio ut labore et dolore magna.
        </div>
      </div>
      <div className="contact__content">
        <div className="contact__content-business">
          <div className="contact__content-business-info">
            <div className="contact__content-business-info-header">
              Liên hệ chúng tôi
            </div>
            <div className="contact__content-business-info-description">
              <div className="contact__phone">
                <div className="contact__phone-icon">
                  <ContactPhoneIcon className="contact__phone-icon-svg" />
                </div>
                <div className="contact__phone-content">
                  <div className="contact__phone-content-label">Hotline</div>
                  <div className="contact__phone-content-value">
                    + 84986 442 181
                  </div>
                </div>
              </div>
              <div className="contact__email">
                <div className="contact__email-icon">
                  <ContactMailIcon className="contact__email-icon-svg" />
                </div>
                <div className="contact__email-content">
                  <div className="contact__email-content-label">Email</div>
                  <div className="contact__email-content-value">info@gmail</div>
                </div>
              </div>
              <div className="contact__address">
                <div className="contact__address-icon">
                  <ContactLocationIcon className="contact__address-icon-svg" />
                </div>
                <div className="contact__address-content">
                  <div className="contact__address-content-label">Địa chỉ</div>
                  <div className="contact__address-content-value">
                    22/55 Nguyễn Huy Tự, phường Ngọc Trạo, Thanh Hóa
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__content-business-address">
            <img src="../../src/assets/image/address.png" alt="" />
          </div>
        </div>
        <div className="contact__content-personal">
          <div className="contact__content-personal-input">
            <div className="contact__personal-name">
              <div className="contact__personal-name-label">Họ và tên</div>
              <input
                className="contact__personal-name-input"
                type="text"
                placeholder="Nhập tên của bạn"
              />
            </div>
            <div className="contact__personal-phone">
              <div className="contact__personal-phone-label">Số điện thoại</div>
              <input
                className="contact__personal-phone-input"
                type="text"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="contact__personal-email">
              <div className="contact__personal-email-label">Email</div>
              <input
                className="contact__personal-email-input"
                type="text"
                placeholder="Nhập email"
              />
            </div>
            <div className="contact__personal-note">
              <div className="contact__personal-note-label">Ghi chú</div>
              <textarea
                className="contact__personal-note-input note"
                placeholder="Nhập nội dung"
              ></textarea>
            </div>
          </div>
          <button title="Gửi" className="contact__content-personal-button">
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactComponent;
