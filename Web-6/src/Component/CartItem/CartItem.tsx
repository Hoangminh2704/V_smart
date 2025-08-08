import React from "react";
import "./CartItem.scss";
import {
  TrashIcon,
  ArrowRightPagination,
  MinusIcon,
  PlusIcon,
} from "../../assets/svg/svg";
import {
  removeFromCart,
  updateCartItemQuantity,
  updateCartItemColorSize,
  type CartItem as CartItemType,
  getCartItemCount,
} from "../../Utils/cartUtils";

interface CartItemProps {
  cartItem: CartItemType;
  onUpdateCart: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, onUpdateCart }) => {
  console.log("CartItem:", cartItem);
  const [popupCart, setPopupCart] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState<string>(
    cartItem.selectedColor || ""
  );
  const [selectedSize, setSelectedSize] = React.useState<string>(
    cartItem.selectedSize || ""
  );
  const [tempColor, setTempColor] = React.useState<string>(
    cartItem.selectedColor || ""
  );
  const [tempSize, setTempSize] = React.useState<string>(
    cartItem.selectedSize || ""
  );
  const [quantity, setQuantity] = React.useState<number>(cartItem.quantity);
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
  const togglePopupCart = () => {
    setTempColor(selectedColor);
    setTempSize(selectedSize);
    setPopupCart(!popupCart);
  };

  const handleColorSelect = (color: string) => {
    setTempColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setTempSize(size);
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTempColor(selectedColor);
    setTempSize(selectedSize);
    setPopupCart(false);
  };

  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateCartItemColorSize(
      cartItem.id,
      selectedColor,
      selectedSize,
      tempColor,
      tempSize
    );

    setSelectedColor(tempColor);
    setSelectedSize(tempSize);
    setPopupCart(false);
    onUpdateCart();
    console.log(
      `Updated item ${cartItem.id}, color: ${tempColor}, size: ${tempSize}`
    );
  };

  const handleRemoveItem = () => {
    console.log("Remove item");
    removeFromCart(cartItem.id, selectedColor, selectedSize);
    updateCartDisplay();

    onUpdateCart();
  };

  const handleDecreaseQuantity = () => {
    console.log("Decrease quantity");
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItemQuantity(
        cartItem.id,
        newQuantity,
        selectedColor,
        selectedSize
      );
      updateCartDisplay();
      onUpdateCart();
    } else {
      handleRemoveItem();
    }
  };
  const gettotalQuantityLeft = () => {
    return cartItem.totalQuantityLeft || 0;
  };

  const handleIncreaseQuantity = () => {
    console.log("Increase quantity");
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItemQuantity(
      cartItem.id,
      newQuantity,
      selectedColor,
      selectedSize
    );
    updateCartDisplay();
    onUpdateCart();
  };
  const formatPrice = (price: number | string): string => {
    console.log("formatPrice", typeof price, price);
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    return numPrice.toLocaleString("vi-VN") + " đ";
  };

  const calculateItemTotal = (): string => {
    const total = cartItem.price * quantity;
    return formatPrice(total);
  };

  return (
    <div className="cart__item-element">
      <div
        className={`cart__item-element__overlay ${
          popupCart ? "cart__item-element__overlay--open" : ""
        }`}
        onClick={() => setPopupCart(false)}
      ></div>
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
              src={cartItem.imageUrl}
              alt={cartItem.productName}
            />
            <div className="cart__item-element-body-content-text">
              <div className="product-info">
                <div className="product-info-name">{cartItem.productName}</div>
                <div
                  className={`product-info-color ${
                    popupCart ? "product-info-color--active" : ""
                  }`}
                  onClick={togglePopupCart}
                >
                  <span className="product-info-color-text">
                    Màu {selectedColor}/ Size {selectedSize}
                  </span>
                  <ArrowRightPagination className="product-info-color-icon" />
                  {popupCart && (
                    <div
                      className="product-info-color-popup"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="product-info-color-popup-content">
                        <div className="product-info-color-popup-content-color">
                          <div className="product-popup-color-label">
                            Màu sắc
                          </div>
                          <div className="product-popup-color-value">
                            {cartItem.color.map((color) => (
                              <div
                                key={color}
                                className={`item ${
                                  tempColor === color ? "active" : ""
                                }`}
                                onClick={() => handleColorSelect(color)}
                                style={{ backgroundColor: color }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className="product-info-color-popup-content-size">
                          <div className="product-popup-size-label">
                            Kích thước
                          </div>
                          <div className="product-popup-size-value">
                            {cartItem.size.map((size) => (
                              <div
                                key={size}
                                className={`size-item ${
                                  tempSize === size ? "active" : ""
                                }`}
                                onClick={() => handleSizeSelect(size)}
                              >
                                {size}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="product-info-color-popup-button">
                        <button
                          className="product-info-color-popup-button-cancel"
                          onClick={handleCancel}
                        >
                          Hủy
                        </button>
                        <button
                          className="product-info-color-popup-button-apply"
                          onClick={handleConfirm}
                        >
                          Xác nhận
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="product-quantity">
                <div className="product-quantity-action">
                  <div
                    className="product-quantity-action-minus"
                    onClick={handleDecreaseQuantity}
                  >
                    <MinusIcon
                      className="product-quantity-action-icon"
                      width={16}
                      height={16}
                      fill="white"
                    />
                  </div>
                  <div className="product-quantity-action-number">
                    {gettotalQuantityLeft() > 0 ? quantity : 0}
                  </div>
                  <div
                    className="product-quantity-action-plus"
                    onClick={handleIncreaseQuantity}
                  >
                    <PlusIcon
                      className="product-quantity-action-icon"
                      width={16}
                      height={16}
                      fill="white"
                    />
                  </div>
                </div>
                <div className="product-quantity-number">
                  Còn {gettotalQuantityLeft()} sản phẩm
                </div>

                {gettotalQuantityLeft() === 0 && (
                  <div className="product-quantity-out-of-stock">
                    Sản phẩm tạm hết hàng, vui lòng chọn sản phẩm khác!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="cart__item-element-price">
          <div className="cart__item-element-price-mobile">Đơn giá:</div>
          {gettotalQuantityLeft() > 0 ? (
            <span>{formatPrice(cartItem.price)}</span>
          ) : (
            <span className="sold-out">Hết hàng</span>
          )}
        </div>
        <div className="cart__item-element-totalPrice">
          <div className="cart__item-element-totalPrice-mobile">Số tiền:</div>
          {gettotalQuantityLeft() > 0 ? (
            <span>{calculateItemTotal()}</span>
          ) : (
            <span className="sold-out">{formatPrice(0)}</span>
          )}
        </div>
      </div>
      <div className="cart__item-element-right">
        <div onClick={handleRemoveItem}>
          <TrashIcon className="cart__item-element-right-icon" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
