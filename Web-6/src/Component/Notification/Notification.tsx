import React, { useEffect, useState } from "react";
import "./Notification.scss";
import { type CartItem as CartItemType } from "../../Utils/cartUtils";
import { CloseIcon } from "../../assets/svg/svg";
import { Link } from "react-router-dom";

interface NotificationProps {
  cartItem: CartItemType;
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ cartItem, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const formatPrice = (price: number): string => {
    return price.toLocaleString("vi-VN");
  };

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, 300);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`add-to-cart-notification ${isVisible ? "show" : "hide"}`}
      id="cartNotification"
      data-product-id={cartItem.id}
    >
      <div className="notification-content">
        <div className="notification-header">
          <h3 className="notification-title">Đã thêm vào giỏ hàng!</h3>
          <button
            title="close button"
            className="close-btn"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <CloseIcon fill="#858F9B" />
          </button>
        </div>
        <div className="notification-line"></div>

        <div className="notification-body">
          <div className="product-info">
            <img
              src={cartItem.imageUrl}
              alt={cartItem.productName}
              className="product-image"
            />
            <div className="product-details">
              <h1 className="product-name">{cartItem.productName}</h1>
              <div className="product-price">
                {formatPrice(cartItem.price)}đ
              </div>
              <div className="product-option">
                <div className="product-size">
                  {cartItem.selectedColor} - {cartItem.selectedSize}
                </div>
                <div className="product-quantity">X{cartItem.quantity}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-actions">
          <Link to="/cart" className="btn-view-cart">
            <span>Xem giỏ hàng</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notification;
