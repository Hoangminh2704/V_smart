import React, { useState, useEffect } from "react";
import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import CheckCart from "../CheckCart/CheckCart";
import { ArrowRightPagination } from "../../assets/svg/svg";
import {
  getCartFromStorage,
  getCartTotal,
  updateAllCartItemsChecked,
  isAllCartItemsChecked,
  createOrder,
  getCartItemCount,
  type CartItem as CartItemType,
} from "../../Utils/cartUtils";
import cartEmpty from "../../assets/image/CartEmpty.png";

const CartComponent: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [currentOrderCode, setCurrentOrderCode] = useState<string>("");

  useEffect(() => {
    const loadCartData = () => {
      const items = getCartFromStorage();
      setCartItems(items);
      setCartTotal(getCartTotal());
      setIsAllSelected(isAllCartItemsChecked());
    };
    loadCartData();
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "shopping_cart") {
        loadCartData();
      }
    };
    const handleCartUpdate = () => {
      loadCartData();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const updateCartData = () => {
    const items = getCartFromStorage();
    setCartItems(items);
    setCartTotal(getCartTotal());
    setIsAllSelected(isAllCartItemsChecked());
  };

  const handleSelectAll = () => {
    const newSelectAllState = !isAllSelected;
    updateAllCartItemsChecked(newSelectAllState);
    setIsAllSelected(newSelectAllState);

    const updatedItems = getCartFromStorage();
    setCartItems([...updatedItems]);
    setCartTotal(getCartTotal());
  };

  const formatPrice = (price: number): string => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const validateForm = (): boolean => {
    let isValid = true;

    setNameError("");
    setPhoneError("");
    if (!customerName.trim()) {
      setNameError("Vui lòng nhập họ tên của bạn");
      isValid = false;
    }

    if (!customerPhone.trim()) {
      setPhoneError(
        "Số điện thoại không đúng định dạng. Xin vui lòng nhập lại"
      );
      isValid = false;
    } else {
      const phoneRegex = /^[0-9]{10,11}$/;
      if (!phoneRegex.test(customerPhone.replace(/\s/g, ""))) {
        setPhoneError(
          "Số điện thoại không đúng định dạng. Xin vui lòng nhập lại"
        );
        isValid = false;
      }
    }

    return isValid;
  };

  const updateCartDisplay = (): void => {
    const cartCountElements = document.querySelectorAll(
      ".header__right-cart-count"
    );
    const count = getCartItemCount();

    cartCountElements.forEach((element) => {
      if (element) {
        element.textContent = count.toString();
      }
    });

    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      console.log("Order success");
      const newOrder = createOrder(customerName, customerPhone, customerEmail);
      console.log("Created order:", newOrder);

      // Set order code for popup
      setCurrentOrderCode(newOrder.id);

      // Cập nhật cart data và header count
      updateCartData();
      updateCartDisplay();

      setShowSuccessPopup(true);
      setCustomerName("");
      setCustomerPhone("");
      setCustomerEmail("");
    }
  };
  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
    setCurrentOrderCode("");
  };

  return (
    <>
      <div className="background">
        <div className="cart">
          <div className="cart__name">Giỏ hàng</div>
          {cartItems.length > 0 ? (
            <div className="cart__content">
              <div className="cart__content-list">
                {
                  <div className="cart__header">
                    <div className="cart__header-select">
                      <input
                        className="cart__header-select-checkbox"
                        type="checkbox"
                        title="Chọn tất cả"
                        checked={isAllSelected}
                        onChange={handleSelectAll}
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
                      <img src={cartEmpty} alt="Giỏ hàng trống" />
                      <div className="cart__empty-text">
                        Giỏ hàng của bạn hiện đang trống
                      </div>
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
                      <div className="input-field">
                        <input
                          title="Name"
                          type="text"
                          className={`Customer__infomation-input-item ${
                            nameError ? "error" : ""
                          }`}
                          placeholder="Họ tên"
                          value={customerName}
                          onChange={(e) => {
                            setCustomerName(e.target.value);
                            if (nameError) setNameError("");
                          }}
                        />
                        {nameError && (
                          <div className="error-message">
                            <span className="error-icon">!</span>
                            {nameError}
                          </div>
                        )}
                      </div>

                      <div className="input-field">
                        <input
                          title="Phone"
                          type="text"
                          className={`Customer__infomation-input-item ${
                            phoneError ? "error" : ""
                          }`}
                          placeholder="Số điện thoại"
                          value={customerPhone}
                          onChange={(e) => {
                            setCustomerPhone(e.target.value);
                            if (phoneError) setPhoneError("");
                          }}
                        />
                        {phoneError && (
                          <div className="error-message">
                            <span className="error-icon">!</span>
                            {phoneError}
                          </div>
                        )}
                      </div>

                      <input
                        title="Email"
                        type="text"
                        className="Customer__infomation-input-item"
                        placeholder="Email ( Vui lòng điền email để nhận hóa đơn VAT)"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
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
                          {formatPrice(cartTotal + 20000)}
                          {""}
                        </div>
                      </div>
                    </div>
                    <button
                      className="Payment__content-button"
                      onClick={handlePlaceOrder}
                    >
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart__empty">
              <img src={cartEmpty} alt="Giỏ hàng trống" />
              <div className="cart__empty-text">
                Bạn chưa có sản phẩm nào trong giỏ hàng
              </div>

              <button
                className="cart__empty-button"
                onClick={() => (window.location.href = "/")}
              >
                Quay lại trang chủ
              </button>
            </div>
          )}
        </div>
      </div>

      <CheckCart
        isVisible={showSuccessPopup}
        onClose={handleCloseSuccessPopup}
        orderCode={currentOrderCode}
      />
    </>
  );
};

export default CartComponent;
