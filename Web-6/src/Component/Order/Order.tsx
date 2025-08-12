import React, { useState } from "react";
import "./Order.scss";
import delivery from "../../assets/image/amico.png";
import DeliveryOrder from "../DeliveryOrder/DeliveryOrder";
import { getOrderById } from "../../Utils/cartUtils";

const Order: React.FC = () => {
  const [orderCode, setOrderCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showDeliveryOrder, setShowDeliveryOrder] = useState<boolean>(false);
  const [currentOrderCode, setCurrentOrderCode] = useState<string>("");
  const handleSearch = () => {
    setError("");
    if (!orderCode.trim()) {
      setError("Vui lòng nhập mã đơn hàng!");
      return;
    }
    const order = getOrderById(orderCode.trim());
    if (order) {
      setCurrentOrderCode(orderCode.trim());
      setShowDeliveryOrder(true);
    } else {
      setError("Không tìm thấy đơn hàng nào!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderCode(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleBackToSearch = () => {
    setShowDeliveryOrder(false);
    setOrderCode("");
    setCurrentOrderCode("");
    setError("");
  };

  if (showDeliveryOrder) {
    return (
      <DeliveryOrder orderCode={currentOrderCode} onBack={handleBackToSearch} />
    );
  }

  return (
    <>
      <div className="order__background">
        <div className="order__content">
          <div className="order__content-action">
            <div className="order__content-action-header">
              Theo dõi đơn hàng
            </div>
            <div className="order__content-action-input">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Nhập mã đơn hàng"
                  value={orderCode}
                  onChange={handleInputChange}
                  className={error ? "error" : ""}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
                <button
                  className="order__content-action-input-button"
                  onClick={handleSearch}
                >
                  Tra cứu
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
            </div>
          </div>
          <div className="order__content-img">
            <img src={delivery} alt="Delivery" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
