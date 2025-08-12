import { useState } from "react";
import "./ProductDetail.scss";
import { Rate, MinusIcon, PlusIcon } from "../../assets/svg/svg";
import {
  addToCart,
  getCartItemCount,
  type CartItem,
} from "../../Utils/cartUtils";
import Notification from "../Notification/Notification";

export interface ProductDataType {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  oldPrice: number;
  price: number;
  state: string;
  discount?: string;
  order: number;
  type: string;
  description?: string;
  brand: string;
  size: string[]; // từ 3 đến 4 size
  color: string[]; // 2 đến 3 color cơ bản
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductDetailProps {
  product: ProductDataType | null;
}

function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationCartItem, setNotificationCartItem] =
    useState<CartItem | null>(null);

  const formatPrice = (price: number): string => {
    return price.toLocaleString("vi-VN");
  };

  if (!product) {
    return null;
  }

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase" && quantity < product.quantity) {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleQuantityCount = () => {
    if (product.state === "sold") {
      return 0;
    }
    if (product.state === "contact") {
      return 0;
    }
    return quantity;
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

  const handleAddToCart = () => {
    if (
      !product ||
      product.quantity === 0 ||
      product.state === "sold" ||
      product.state === "contact"
    ) {
      return;
    }

    const finalColor =
      selectedColor || (product.color.length > 0 ? product.color[0] : "");
    const finalSize =
      selectedSize || (product.size.length > 0 ? product.size[0] : "");

    const cartItem: CartItem = {
      id: product.id,
      productName: product.productName,
      productType: product.productType,
      imageUrl: product.imageUrl,
      price: product.price,
      oldPrice: product.oldPrice,
      size: product.size,
      color: product.color,
      selectedColor: finalColor,
      selectedSize: finalSize,
      quantity: quantity,
      totalQuantityLeft: product.quantity,
      state: product.state,
      isChecked: true,
    };

    addToCart(cartItem);
    updateCartDisplay();

    setNotificationCartItem(cartItem);
    setShowNotification(true);

    console.log("Added to cart:", cartItem);
  };

  const handleBuyNow = () => {
    handleAddToCart();
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
    setNotificationCartItem(null);
  };

  const canAddToCart = () => {
    return (
      product.quantity > 0 &&
      product.state !== "sold" &&
      product.state !== "contact"
    );
  };

  return (
    <>
      <div className="productDetail">
        <div className="productDetail__img">
          <div className="productDetail__img-overall">
            <img src={product.imageUrl} alt={product.productName} />
          </div>
          <div className="productDetail__img-thumbnail">
            <div className="productDetail__img-thumbnail-item">
              <img src={product.imageUrl} alt={product.productName} />
            </div>
            <div className="productDetail__img-thumbnail-item">
              <img src={product.imageUrl} alt={product.productName} />
            </div>
            <div className="productDetail__img-thumbnail-item">
              <img src={product.imageUrl} alt={product.productName} />
            </div>
            <div className="productDetail__img-thumbnail-item">
              <img src={product.imageUrl} alt={product.productName} />
            </div>
            <div className="productDetail__img-thumbnail-item">
              <img src={product.imageUrl} alt={product.productName} />
            </div>
          </div>
        </div>
        <div className="productDetail__right">
          <div className="productDetail__info">
            <div className="productDetail__info-overall">
              <div className="productDetail__info-overall-name">
                {product.productName}
              </div>
              <div className="productDetail__info-overall-id">
                <div className="productDetail__info-overall-id-text">
                  Mã sản phẩm:
                </div>
                <div className="productDetail__info-overall-id-value">
                  {product.id}
                </div>
              </div>
              <div className="productDetail__info-overall-star">
                <Rate className="productDetail__info-overall-star-icon" />
                <Rate className="productDetail__info-overall-star-icon" />
                <Rate className="productDetail__info-overall-star-icon" />
                <Rate className="productDetail__info-overall-star-icon" />
                <Rate className="productDetail__info-overall-star-icon" />
              </div>
              {product.oldPrice && product.state !== "contact" && (
                <div className="productDetail__info-overall-oldPrice">
                  {formatPrice(product.oldPrice)}đ
                </div>
              )}
              {product.price && product.state !== "contact" && (
                <div className="productDetail__info-overall-currentPrice">
                  {formatPrice(product.price)}đ
                </div>
              )}
              {product.state === "contact" && (
                <div className="productDetail__info-overall-contact">
                  Liên hệ
                </div>
              )}
            </div>
            <div className="productDetail__info-description">
              <div className="productDetail__info-description-title">
                <div className="productDetail__info-description-title-text">
                  Mô tả
                </div>
                <ul className="productDetail__info-description-list">
                  <li className="productDetail__info-description-list-item">
                    Điều khiển và cấu hình khóa bằng App Lumi Life.
                  </li>
                  <li className="productDetail__info-description-list-item">
                    Tra cứu lịch sử đóng/mở khóa, kiểm soát người ra vào. Có
                    cảnh báo trạng thái khóa lên App Lumi Life
                  </li>
                  <li className="productDetail__info-description-list-item">
                    Mở khóa bằng vân tay.
                  </li>
                  <li className="productDetail__info-description-list-item">
                    Mở khóa bằng mã số (Hỗ trợ tính năng mã số ảo để tăng bảo
                    mật)
                  </li>
                  <li className="productDetail__info-description-list-item">
                    Mở khóa bằng thẻ từ.
                  </li>
                </ul>
              </div>
              <div className="productDetail__info-description-line"></div>
              <div className="productDetail__info-description-countText">
                Số lượng
              </div>
            </div>
            <div className="productDetail__info-counting">
              <div className="productDetail__info-counting-input">
                <div
                  className="productDetail__info-counting-input-minus"
                  onClick={() => handleQuantityChange("decrease")}
                >
                  <MinusIcon className="productDetail__info-counting-input-icon" />
                </div>
                <div className="productDetail__info-counting-input-content">
                  {handleQuantityCount()}
                </div>
                <div
                  className="productDetail__info-counting-input-plus"
                  onClick={() => handleQuantityChange("increase")}
                >
                  <PlusIcon className="productDetail__info-counting-input-icon" />
                </div>
              </div>
              <div className="productDetail__info-counting-quantity">
                {product.state !== "contact"
                  ? `Còn ${product.quantity} sản phẩm`
                  : ""}
              </div>
            </div>
            {(product.quantity === 0 || product.state === "sold") && (
              <div className="productDetail__info-sold">Hết hàng</div>
            )}

            {product.color &&
              product.color.length > 0 &&
              product.quantity > 0 &&
              product.state !== "contact" && (
                <div className="productDetail__info-color">
                  <div className="productDetail__info-color-text">Màu sắc</div>
                  <div className="productDetail__info-color-select">
                    {product.color.map((color, index) => (
                      <div
                        key={index}
                        className={`productDetail__info-color-select-item ${
                          selectedColor === color ? "active" : ""
                        }`}
                        onClick={() => setSelectedColor(color)}
                        title={color}
                        // backgroundColor={color}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            {product.size &&
              product.size.length > 0 &&
              product.quantity > 0 &&
              product.state !== "contact" && (
                <div className="productDetail__info-size">
                  <div className="productDetail__info-size-text">
                    Kích thước
                  </div>
                  <div className="productDetail__info-size-select">
                    {product.size.map((size, index) => (
                      <div
                        key={index}
                        className={`productDetail__info-size-select-item ${
                          selectedSize === size ? "active" : ""
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
          <div className="productDetail__button">
            <div
              className={`productDetail__button-addToCart ${
                !canAddToCart() ? "disabled" : ""
              }`}
              onClick={canAddToCart() ? handleAddToCart : undefined}
            >
              Thêm vào giỏ hàng
            </div>
            <div
              className={`productDetail__button-buyNow ${
                !canAddToCart() ? "disabled" : ""
              }`}
              onClick={canAddToCart() ? handleBuyNow : undefined}
            >
              Mua ngay
            </div>
          </div>
        </div>
      </div>

      {showNotification && notificationCartItem && (
        <Notification
          cartItem={notificationCartItem}
          onClose={handleCloseNotification}
        />
      )}
    </>
  );
}

export default ProductDetail;
