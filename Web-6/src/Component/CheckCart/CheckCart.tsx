import React from "react";
import "./CheckCart.scss";
import { CheckCircle } from "../../assets/svg/svg";

interface CheckCartProps {
  isVisible: boolean;
  onClose: () => void;
}

const CheckCart: React.FC<CheckCartProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="check-cart-overlay" onClick={onClose}>
      <div className="check-cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="check-cart-content">
          <div className="check-cart-icon">
            <CheckCircle />
          </div>
          <div className="check-cart-overall">
            <div className="check-cart-title">Thành Công</div>

            <div className="check-cart-message">Đơn hàng đã được gửi!</div>

            <div className="check-cart-description">
              Chúng tôi sẽ liên hệ Quý khách trong thời gian sớm nhất!
            </div>
          </div>
          <button className="check-cart-button" onClick={onClose}>
            Tiếp tục mua hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckCart;
