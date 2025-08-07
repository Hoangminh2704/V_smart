import React, { useState, useEffect } from "react";
import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import { ArrowRightPagination } from "../../assets/svg/svg";
import {
  getCartFromStorage,
  getCartTotal,
  type CartItem as CartItemType,
} from "../../Utils/cartUtils";

const CartComponent: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const loadCartData = () => {
      const items = getCartFromStorage();
      setCartItems(items);
      setCartTotal(getCartTotal());
    };
    loadCartData();
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "shopping_cart") {
        loadCartData();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const updateCartData = () => {
    const items = getCartFromStorage();
    setCartItems(items);
    setCartTotal(getCartTotal());
  };

  const formatPrice = (price: number): string => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  return (
    <div className="background">
      <div className="cart">
        <div className="cart__name">Giỏ hàng</div>
        <div className="cart__content">
          <div className="cart__content-list">
            {
              <div className="cart__header">
                <div className="cart__header-select">
                  <input
                    className="cart__header-select-checkbox"
                    type="checkbox"
                    title="Chọn tất cả"
                  />
                  <span className="cart__header-select-text">Sản phẩm</span>
                </div>
                <div className="cart__header-price">Đơn giá</div>
                <div className="cart__header-totalPrice">Số tiền</div>
              </div>
            }
            <div className="cart__item">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                    cartItem={item}
                    onUpdateCart={updateCartData}
                  />
                ))
              ) : (
                <div className="cart__empty">
                  <p>Empty cart</p>
                </div>
              )}
            </div>
          </div>
          <div className="cart__content-info">
            <div className="Customer">
              <div className="Customer__infomation">
                <div className="Customer__infomation-header">
                  Thông tin khách hàng
                </div>
                <div className="Customer__infomation-input">
                  <input
                    title="Name"
                    type="text"
                    className="Customer__infomation-input-item"
                    placeholder="Họ tên"
                  />
                  <input
                    title="Phone"
                    type="text"
                    className="Customer__infomation-input-item"
                    placeholder="Số điện thoại"
                  />
                  <input
                    title="Email"
                    type="text"
                    className="Customer__infomation-input-item"
                    placeholder="Email ( Vui lòng điền email để nhận hóa đơn VAT)"
                  />
                </div>
              </div>
              <div className="Customer__address">
                <div className="Customer__address-header">
                  Thông tin giao hàng
                </div>
                <div className="Customer__address-input">
                  <div className="Customer__address-input-city">
                    <input
                      type="text"
                      placeholder="Tỉnh/Thành phố"
                      className="Customer__address-input-city-input"
                    />
                    <ArrowRightPagination className="Customer__address-input-city-icon"></ArrowRightPagination>
                  </div>
                  <div className="Customer__address-input-other">
                    <div className="Customer__address-input-other-district">
                      <input
                        type="text"
                        placeholder="Quận/Huyện"
                        className="Customer__address-input-other-district-input"
                      />
                      <ArrowRightPagination className="Customer__address-input-other-district-icon"></ArrowRightPagination>
                    </div>
                    <div className="Customer__address-input-other-district">
                      <input
                        type="text"
                        placeholder="Phường"
                        className="Customer__address-input-other-district-input"
                      />
                      <ArrowRightPagination className="Customer__address-input-other-district-icon"></ArrowRightPagination>
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    className="Customer__address-input-address"
                  />
                  <textarea
                    placeholder="Ghi chú giao hàng"
                    className="Customer__address-input-note"
                  />
                </div>
              </div>
            </div>
            <div className="Payment">
              <div className="Payment__header">Thông tin thanh toán</div>
              <div className="Payment__content">
                <div className="Payment__content-price">
                  <div className="Payment__content-price-totalCart">
                    <div className="Payment__content-price-totalCart-label">
                      <span className="text1">Tổng tiền hàng:</span>
                      <span className="text2">
                        (Giá chưa bao gồm phí vận chuyển)
                      </span>
                    </div>
                    <div className="Payment__content-price-totalCart-value">
                      {formatPrice(cartTotal)}
                    </div>
                  </div>
                  <div className="Payment__content-price-afterCalculate">
                    <div className="Payment__content-price-afterCalculate-label">
                      Tổng thanh toán:
                    </div>
                    <div className="Payment__content-price-afterCalculate-value">
                      {formatPrice(cartTotal + 20000)}{" "}
                    </div>
                  </div>
                </div>
                <button className="Payment__content-button">Đặt hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
