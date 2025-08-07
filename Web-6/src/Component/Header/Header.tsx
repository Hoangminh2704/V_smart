import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/image/logo.png";
import {
  SearchIcon,
  CartIcon,
  DownIcon,
  RightIcon,
} from "../../assets/svg/svg";
import { getCartItemCount } from "../../Utils/cartUtils";

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const location = useLocation();

  const menuItems = [
    { id: 0, name: "Bộ điều khiển trung tâm", hasIcon: false },
    { id: 1, name: "Rèm cửa thông minh", hasIcon: true },
    { id: 2, name: "Khóa cửa cao cấp", hasIcon: true },
    { id: 3, name: "Ổ cắm cao cấp", hasIcon: true },
    { id: 4, name: "Công tắc thông minh", hasIcon: true },
    { id: 5, name: "Đèn thông minh", hasIcon: true },
    { id: 6, name: "Thiết bị phụ trợ khác", hasIcon: true },
  ];

  const handleItemHover = (itemId: number) => {
    setActiveItem(itemId);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  return (
    <header>
      <div className="header__background">
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
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
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
                  <SearchIcon className="header__search-icon" />
                </button>
              </div>
              <Link to="/cart" className="header__right-cart">
                <CartIcon className="header__right-cart-icon" />
                <div className="header__right-cart-count">
                  {getCartItemCount()}
                </div>
              </Link>
            </div>
          </div>
          <div className="header__element">
            <div className="header__element-left">
              <div className="header__element-left-top active">
                Danh mục sản phẩm
              </div>
              <div className="header__element-left-bottom">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className={`header__element-left-bottom-item ${
                      activeItem === item.id ? "active" : ""
                    }`}
                    onMouseEnter={() => handleItemHover(item.id)}
                  >
                    {activeItem === item.id && (
                      <div className="header__element-left-bottom-active"></div>
                    )}
                    <span>{item.name}</span>
                    {item.hasIcon && (
                      <RightIcon className="header__element-left-bottom-item-icon" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="header__element-right">
              <Link
                to="/"
                className={`header__element-right-option ${
                  isActiveRoute("/") ? "active" : ""
                }`}
              >
                <span>Trang chủ</span>
              </Link>
              <Link
                to="/about"
                className={`header__element-right-option ${
                  isActiveRoute("/about") ? "active" : ""
                }`}
              >
                <span>Giới thiệu</span>
              </Link>
              <Link
                to="/production"
                className={`header__element-right-option ${
                  isActiveRoute("/production") ? "active" : ""
                }`}
              >
                <span>Sản phẩm</span>
                <DownIcon className="header__element-right-option-icon" />
              </Link>
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
              <Link
                to="/contact"
                className={`header__element-right-option special ${
                  isActiveRoute("/contact") ? "active" : ""
                }`}
              >
                <span>Liên hệ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
