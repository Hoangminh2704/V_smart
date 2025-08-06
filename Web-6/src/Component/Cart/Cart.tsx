import React from "react";
import "./Cart.scss";
import {
  TrashIcon,
  ArrowRightPagination,
  MinusIcon,
  PlusIcon,
} from "../../assets/svg/svg";

const CartComponent: React.FC = () => {
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
              <div className="cart__item-element">
                <div className="cart__item-element-left">
                  <div className="cart__item-element-body">
                    <input
                      type="checkbox"
                      title="checkbox"
                      className="cart__item-element-body-checkbox"
                    />
                    <div className="cart__item-element-body-content">
                      <img
                        className="cart__item-element-body-content-img"
                        src="../../src/assets/image/product1.png"
                        alt="demo"
                      />
                      <div className="cart__item-element-body-content-text">
                        <div className="product-info">
                          <div className="product-info-name">
                            Khóa cửa thông minh Luvit
                          </div>
                          <div className="product-info-color">
                            <span className="product-info-color-text">
                              Màu xám/ Size XL
                            </span>
                            <ArrowRightPagination className="product-info-color-icon" />
                          </div>
                        </div>
                        <div className="product-quantity">
                          <div className="product-quantity-action">
                            <div className="product-quantity-action-minus">
                              <MinusIcon
                                className="product-quantity-action-icon"
                                width={16}
                                height={16}
                                fill="white"
                              />
                            </div>
                            <div className="product-quantity-action-number">
                              0
                            </div>
                            <div className="product-quantity-action-plus">
                              <PlusIcon
                                className="product-quantity-action-icon"
                                width={16}
                                height={16}
                                fill="white"
                              />
                            </div>
                          </div>
                          <div className="product-quantity-number">
                            Còn 50 sản phẩm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart__item-element-price">
                    <div className="cart__item-element-price-mobile">
                      Đơn giá:
                    </div>

                    <span>8.250.000đ</span>
                  </div>
                  <div className="cart__item-element-totalPrice">
                    <div className="cart__item-element-totalPrice-mobile">
                      Số tiền:
                    </div>

                    <span>8.250.000đ</span>
                  </div>
                </div>
                <div className="cart__item-element-right">
                  <TrashIcon className="cart__item-element-right-icon" />
                </div>
              </div>
              <div className="cart__item-element">
                <div className="cart__item-element-left">
                  <div className="cart__item-element-body">
                    <input
                      type="checkbox"
                      title="checkbox"
                      className="cart__item-element-body-checkbox"
                    />
                    <div className="cart__item-element-body-content">
                      <img
                        className="cart__item-element-body-content-img"
                        src="../../src/assets/image/product1.png"
                        alt="demo"
                      />
                      <div className="cart__item-element-body-content-text">
                        <div className="product-info">
                          <div className="product-info-name">
                            Khóa cửa thông minh Luvit
                          </div>
                          <div className="product-info-color">
                            <span className="product-info-color-text">
                              Màu xám/ Size XL
                            </span>
                            <ArrowRightPagination className="product-info-color-icon" />
                          </div>
                        </div>
                        <div className="product-quantity">
                          <div className="product-quantity-action">
                            <div className="product-quantity-action-minus">
                              <MinusIcon
                                className="product-quantity-action-icon"
                                width={16}
                                height={16}
                                fill="white"
                              />
                            </div>
                            <div className="product-quantity-action-number">
                              0
                            </div>
                            <div className="product-quantity-action-plus">
                              <PlusIcon
                                className="product-quantity-action-icon"
                                width={16}
                                height={16}
                                fill="white"
                              />
                            </div>
                          </div>
                          <div className="product-quantity-number">
                            Còn 50 sản phẩm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart__item-element-price">
                    {window.innerWidth < 768 ? (
                      <div className="cart__item-element-price-mobile">
                        Đơn giá:
                      </div>
                    ) : (
                      ""
                    )}
                    <span>8.250.000đ</span>
                  </div>
                  <div className="cart__item-element-totalPrice">
                    {window.innerWidth < 768 ? (
                      <div className="cart__item-element-price-mobile">
                        Số tiền:
                      </div>
                    ) : (
                      ""
                    )}
                    <span>8.250.000đ</span>
                  </div>
                </div>
                <div className="cart__item-element-right">
                  <TrashIcon className="cart__item-element-right-icon" />
                </div>
              </div>
              <div className="cart__item-element">
                <div className="cart__item-element-left">
                  <div className="cart__item-element-body">
                    <input
                      type="checkbox"
                      title="checkbox"
                      className="cart__item-element-body-checkbox"
                    />
                    <div className="cart__item-element-body-content">
                      <img
                        className="cart__item-element-body-content-img"
                        src="../../src/assets/image/product1.png"
                        alt="demo"
                      />
                      <div className="cart__item-element-body-content-text">
                        <div className="product-info">
                          <div className="product-info-name">
                            Khóa cửa thông minh Luvit
                          </div>
                          <div className="product-info-color">
                            <span className="product-info-color-text">
                              Màu xám/ Size XL
                            </span>
                            <ArrowRightPagination className="product-info-color-icon" />
                          </div>
                        </div>
                        <div className="product-quantity">
                          <div className="product-quantity-action">
                            <div className="product-quantity-action-minus">
                              <MinusIcon
                                className="product-quantity-action-icon"
                                width={16}
                                height={16}
                                fill="white"
                              />
                            </div>
                            <div className="product-quantity-action-number">
                              0
                            </div>
                            <div className="product-quantity-action-plus">
                              <PlusIcon
                                className="product-quantity-action-icon"
                                width={16}
                                height={16}
                                fill="white"
                              />
                            </div>
                          </div>
                          <div className="product-quantity-number">
                            Còn 50 sản phẩm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart__item-element-price">
                    {window.innerWidth < 768 ? (
                      <div className="cart__item-element-price-mobile">
                        Đơn giá:
                      </div>
                    ) : (
                      ""
                    )}
                    <span>8.250.000đ</span>
                  </div>
                  <div className="cart__item-element-totalPrice">
                    {window.innerWidth < 768 ? (
                      <div className="cart__item-element-price-mobile">
                        Số tiền:
                      </div>
                    ) : (
                      ""
                    )}
                    <span>8.250.000đ</span>
                  </div>
                </div>
                <div className="cart__item-element-right">
                  <TrashIcon className="cart__item-element-right-icon" />
                </div>
              </div>
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
                      9.650.000đ
                    </div>
                  </div>
                  <div className="Payment__content-price-afterCalculate">
                    <div className="Payment__content-price-afterCalculate-label">
                      Tổng thanh toán:
                    </div>
                    <div className="Payment__content-price-afterCalculate-value">
                      9.670.000đ
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
