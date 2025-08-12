import React, { useState, useEffect } from "react";
import "./PopupHoverCart.scss";
import { Link } from "react-router-dom";
import {
  getCartFromStorage,
  removeFromCart,
  getCartItemCount,
  type CartItem,
} from "../../Utils/cartUtils";
import cartEmpty from "../../assets/image/CartEmpty.png";

const PopupHoverCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartFromStorage());
  }, []);

  function updateCartDisplay(): void {
    const cartCountElements = document.querySelectorAll(
      ".header__right-cart-count"
    );
    const count = getCartItemCount();
    cartCountElements.forEach((element) => {
      if (element) {
        element.textContent = count.toString();
      }
    });
  }

  const handleRemoveItem = (item: CartItem) => {
    console.log("Remove item from popup");
    removeFromCart(item.id, item.selectedColor, item.selectedSize);
    setCartItems(getCartFromStorage());
    updateCartDisplay();

    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  return (
    <div className="header--search-hover active">
      <div className="header--search-hover-header">Giỏ hàng</div>
      <div className="header--search-hover-body">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
              className="header--search-hover-item"
            >
              <div className="header--search-hover-item-content">
                <img
                  src={item.imageUrl}
                  alt={item.productName}
                  className="header--search-hover-item-image"
                />
                <div className="header--search-hover-item-info">
                  <div className="header--search-hover-item-overall">
                    <h1 className="header--search-hover-item-title">
                      {item.productName}
                    </h1>
                    <div className="header--search-hover-item-price">
                      {item.price.toLocaleString("vi-VN")} đ
                    </div>
                  </div>
                  <div className="header--search-hover-item-option">
                    <div className="header--search-hover-item-size">
                      {item.selectedColor} - {item.selectedSize}
                    </div>
                    <div className="header--search-hover-item-quantity">
                      x{item.quantity}
                    </div>
                  </div>
                </div>

                <button
                  title="remove item"
                  className="header--search-hover-item-remove"
                  onClick={() => handleRemoveItem(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4.26665 12.6663L3.33331 11.733L7.06665 7.99967L3.33331 4.26634L4.26665 3.33301L7.99998 7.06634L11.7333 3.33301L12.6666 4.26634L8.93331 7.99967L12.6666 11.733L11.7333 12.6663L7.99998 8.93301L4.26665 12.6663Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="header--search-hover-item-divider"></div>
            </div>
          ))
        ) : (
          <div className="header--search-hover-empty">
            <img src={cartEmpty} alt="Giỏ hàng trống" />
            <div className="header--search-hover-empty-text">
              Chưa có sản phẩm nào
            </div>
          </div>
        )}
      </div>
      <Link to="/cart" className="header--search-hover-button">
        Xem giỏ hàng
      </Link>
    </div>
  );
};

export default PopupHoverCart;
