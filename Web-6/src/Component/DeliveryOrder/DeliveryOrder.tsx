import React from "react";
import "./DeliveryOrder.scss";
import { LeftIcon } from "../../assets/svg/svg";
import { getOrderById } from "../../Utils/cartUtils";
import type { Order } from "../../Utils/cartUtils";
import { CheckCircle } from "../../assets/svg/svg";

interface DeliveryOrderProps {
  orderCode: string;
  onBack: () => void;
}

const DeliveryOrder: React.FC<DeliveryOrderProps> = ({ orderCode, onBack }) => {
  const order: Order | null = getOrderById(orderCode);

  if (!order) {
    return (
      <div className="delivery__background">
        <div className="delivery__content">
          <div className="delivery__error">
            <h2>Không tìm thấy đơn hàng</h2>
            <button onClick={onBack}>Quay lại</button>
          </div>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number): string => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const shippingFee = 20000;
  const totalWithShipping = order.total + shippingFee;

  return (
    <div className="delivery__background">
      <div className="delivery__content">
        <div className="delivery__state">
          <div className="delivery__state-action">
            <div className="delivery__state-action-back" onClick={onBack}>
              <LeftIcon className="delivery__state-action-back-icon" />
              <span className="delivery__state-action-back-text">Quay lại</span>
            </div>
            <div className="delivery__state-action-info">
              <div className="delivery__state-action-info-code">
                Mã đơn hàng: {orderCode}
              </div>
              <div className="delivery__state-action-info-line"></div>
              <div className="delivery__state-action-info-state">
                Chờ xác nhận
              </div>
            </div>
          </div>
          <div className="delivery__state-follow">
            <div className="delivery__status">
              <div className="delivery__status-confirm active">
                <CheckCircle className="delivery__status-icon" fill="white" />
              </div>
              <div className="delivery__status-line"></div>
              <div className="delivery__status-handle"></div>
              <div className="delivery__status-line"></div>
              <div className="delivery__status-complete"></div>
            </div>
            <div className="delivery__text">
              <div className="delivery__status-text">Xác nhận đặt hàng</div>
              <div className="delivery__status-text">Xử lí đơn hàng</div>
              <div className="delivery__status-text">Đang giao</div>
            </div>
          </div>
        </div>
        <div className="delivery__info">
          <div className="delivery__info-item">
            <div className="delivery__info-item-title">
              <div className="delivery__info-item-title-product">Sản phẩm</div>
              <div className="delivery__info-item-title-price">Đơn giá</div>
              <div className="delivery__info-item-title-total">Số tiền</div>
            </div>
            <div className="delivery__info-item-content">
              {order.items.map((item, index) => (
                <div
                  key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`}
                  className="delivery__info-item-content-order"
                >
                  <div className="delivery__item-overall">
                    <div className="delivery__item-overall-img">
                      <img src={item.imageUrl} alt={item.productName} />
                    </div>
                    <div className="delivery__item-overall-info">
                      <div className="delivery__item-overall-info-name">
                        {item.productName}
                      </div>
                      <div className="delivery__item-overall-info-quantity">
                        x{item.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="delivery__item-price">
                    <span>Đơn giá:</span>
                    {item.price.toLocaleString("vi-VN")}đ
                  </div>
                  <div className="delivery__item-totalPrice">
                    <span>Số tiền:</span>
                    {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="delivery__info-customer">
            <div className="delivery__info-customer-address">
              <div className="delivery__address-header">
                Thông tin giao hàng
              </div>
              <div className="delivery__address-content">
                <div className="delivery__address-content-name">
                  {order.customerName}
                </div>
                <div className="delivery__address-content-phone">
                  {order.customerPhone}
                </div>
                <div className="delivery__address-content-address">
                  112A Trần Hưng Đạo, Bến Nghé, Quận 1, Tp Hồ Chí Minh
                </div>
                <div className="delivery__address-content-note">
                  <div className="delivery__address-content-note-title">
                    Ghi chú:
                  </div>
                  <div className="delivery__address-content-note-text">
                    Giao hàng cuối tuần
                  </div>
                </div>
              </div>
            </div>
            <div className="delivery__info-customer-payment">
              <div className="delivery__payment-header">
                Thông tin thanh toán
              </div>
              <div className="delivery__payment-content">
                <div className="delivery__payment-content-total">
                  <div className="delivery__payment-content-total-label">
                    <span className="delivery__payment-content-total-label-text">
                      Tổng tiền hàng:{" "}
                    </span>
                    <span className="delivery__payment-content-total-label-note">
                      (Giá chưa bao gồm phí vận chuyển){" "}
                    </span>
                  </div>
                  <div className="delivery__payment-content-total-value">
                    {formatPrice(order.total)}
                  </div>
                </div>
                <div className="delivery__payment-content-afterShip">
                  <div className="delivery__payment-content-afterShip-label">
                    Tổng thanh toán:{" "}
                  </div>
                  <div className="delivery__payment-content-afterShip-value">
                    {formatPrice(totalWithShipping)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOrder;
