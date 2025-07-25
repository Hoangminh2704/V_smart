// header
import React from "react";
// import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/image/logo.png";
import {
  SearchIcon,
  CartIcon,
  DownIcon,
  RightIcon,
} from "../../assets/svg/svg";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header">
        <div className="header__nav">
          <div className="header__logo">
            <button
              title="hamburger"
              type="button"
              className="header-hamberger-mobile header-hamberger-mobile--htx"
            >
              <span className="header-hamberger-mobile-line"></span>
            </button>
            <img src={logo} alt="Logo" />
          </div>
          <div className="header__right">
            <div className="header__right-search">
              <input
                className="header__right-search-input"
                type="text"
                placeholder="Tìm kiếm"
              />
              <button
                className="header__right-search-button"
                title="Tìm kiếm"
                aria-label="Tìm kiếm"
              >
                <SearchIcon
                  className="header__right-search-icon"
                  fill="myColor"
                />
              </button>
            </div>
            <div className="header__right-cart">
              <CartIcon className="header__right-cart-icon" />
            </div>
          </div>
        </div>
        <div className="header__element">
          <div className="header__element-left">
            <div className="header__element-left-top active">
              Danh mục sản phẩm
            </div>
            <div className="header__element-left-bottom">
              <div className="header__element-left-bottom-item">
                <span>Bộ điều khiển trung tâm</span>
              </div>
              <div className="header__element-left-bottom-item active">
                <div className="header__element-left-bottom-active"></div>
                <span>Rèm cửa thông minh</span>
                <RightIcon className="header__element-left-bottom-item-icon" />
              </div>
              <div className="header__element-left-bottom-item">
                <span>Khóa cửa cao cấp</span>
                <RightIcon className="header__element-left-bottom-item-icon" />
              </div>
              <div className="header__element-left-bottom-item">
                <span>Ổ cắm cao cấp</span>
                <RightIcon className="header__element-left-bottom-item-icon" />
              </div>
              <div className="header__element-left-bottom-item">
                <span>Công tắc thông minh</span>
                <RightIcon className="header__element-left-bottom-item-icon" />
              </div>
              <div className="header__element-left-bottom-item">
                <span>Đèn thông minh</span>
                <RightIcon className="header__element-left-bottom-item-icon" />
              </div>
              <div className="header__element-left-bottom-item">
                <span>Thiết bị phụ trợ khác</span>
                <RightIcon className="header__element-left-bottom-item-icon" />
              </div>
            </div>
          </div>

          <div className="header__element-right">
            <div className="header__element-right-option active">
              <span>Trang chủ</span>
            </div>
            <div className="header__element-right-option">
              <span>Giới thiệu</span>
            </div>
            <div className="header__element-right-option">
              <span>Sản phẩm</span>
              <DownIcon className="header__element-right-option-icon" />
            </div>
            <div className="header__element-right-option">
              <span>Tin tức</span>
              <DownIcon className="header__element-right-option-icon" />
            </div>
            <div className="header__element-right-option">
              <span>Khuyến mãi</span>
            </div>
            <div className="header__element-right-option">
              <span>Đơn hàng</span>
            </div>
            <div className="header__element-right-option special">
              <span>Liên hệ</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
