import React, { useState, useEffect } from "react";
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
import PopupHoverCart from "../PopupHoverCart/PopupHoverCart";

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [showCartPopup, setShowCartPopup] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(getCartItemCount());
  const location = useLocation();

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartItemCount());
    };
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

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

  const handleCartMouseEnter = () => {
    setShowCartPopup(true);
  };

  const handleCartMouseLeave = () => {
    setShowCartPopup(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
                className={`header-hamberger-mobile header-hamberger-mobile--htx ${
                  isMenuOpen ? "is-active" : ""
                }`}
                onClick={handleMenuToggle}
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
              <div
                className="header__right-cart-container"
                onMouseEnter={handleCartMouseEnter}
                onMouseLeave={handleCartMouseLeave}
              >
                <Link to="/cart" className="header__right-cart">
                  <CartIcon className="header__right-cart-icon" />
                  <div className="header__right-cart-count">{cartCount}</div>
                </Link>
                {showCartPopup && (
                  <div
                    className={`popup-hover-cart ${
                      showCartPopup ? "popup-hover-cart--active" : ""
                    }`}
                  >
                    <PopupHoverCart />
                  </div>
                )}
              </div>
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
              <Link
                to="/promotion"
                className={`header__element-right-option ${
                  isActiveRoute("/promotion") ? "active" : ""
                }`}
              >
                <span>Khuyến mãi</span>
              </Link>
              <Link
                to="/order"
                className={`header__element-right-option ${
                  isActiveRoute("/order") ? "active" : ""
                }`}
              >
                <span>Đơn hàng</span>
              </Link>
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

      <div
        className={`mobileMenu-overlay ${
          isMenuOpen ? "mobileMenu-overlay--active" : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div className={`mobileMenu ${isMenuOpen ? "mobileMenu--active" : ""}`}>
        <div className="mobileMenu-header">
          <button
            title="close menu"
            className="mobileMenu-close"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mobileMenu-content">
          <div className="mobileMenu-main">
            <Link
              to="/"
              className={`mobileMenu-item ${
                isActiveRoute("/") ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/about"
              className={`mobileMenu-item ${
                isActiveRoute("/about") ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Giới thiệu
            </Link>
            <Link to="/production" className="mobileMenu-item">
              <span>Sản phẩm</span>
              <RightIcon className="mobileMenu-arrow" />
            </Link>
            <div className="mobileMenu-item ">
              <span>Tin tức</span>
              <RightIcon className="mobileMenu-arrow" />
            </div>
            <div className="mobileMenu-item">
              <span>Khuyến mãi</span>
            </div>
            <div className="mobileMenu-item">
              <span>Đơn hàng</span>
            </div>
          </div>

          <div className="mobileMenu-category">
            <div className="mobileMenu-category-title">Danh mục sản phẩm</div>
            <div className="mobileMenu-category-item">
              Bộ điều khiển trung tâm
            </div>
            <div className="mobileMenu-category-item ">
              <span>Rèm cửa thông minh</span>
              <RightIcon className="mobileMenu-arrow" />
            </div>
            <div className="mobileMenu-category-item ">
              <span>Khóa cửa cao cấp</span>
              <RightIcon className="mobileMenu-arrow" />
            </div>
            <div className="mobileMenu-category-item ">
              <span>Ổ cắm cao cấp</span>
              <RightIcon className="mobileMenu-arrow" />
            </div>
            <div className="mobileMenu-category-item ">
              <span>Công tắc thông minh</span>
              <RightIcon className="mobileMenu-arrow" />
            </div>
            <div className="mobileMenu-category-item ">
              <span>Đèn thông minh</span>
              <RightIcon className="mobileMenu-arrow" />
            </div>
            <div className="mobileMenu-category-item ">
              <span>Thiết bị phụ trợ khác</span>
              <RightIcon className="mobileMenu-arrow" />
            </div>
          </div>

          <div className="mobileMenu-footer">
            <Link
              to="/contact"
              className="mobileMenu-contact-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
