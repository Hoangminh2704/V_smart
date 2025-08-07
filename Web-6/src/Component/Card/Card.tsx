import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";
import { HeartIcon, CartIcon, CloseIcon } from "../../assets/svg/svg";
import { addToCart, getCartItemCount } from "../../Utils/cartUtils";

interface CardProps {
  id: number;
}

interface ProductData {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  oldPrice: string;
  price: string;
  state: string;
  discount?: string;
  order: number;
  type: string;
  description?: string;
  brand: string;
  size: string[];
  color: string[];
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

const Card: React.FC<CardProps> = ({ id }) => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data: ProductData[]) => {
        const productData = data.find((p) => p.id === id);
        if (productData) {
          setProduct(productData);
          if (productData.color && productData.color.length > 0) {
            setSelectedColor(productData.color[0]);
          }
          if (productData.size && productData.size.length > 0) {
            setSelectedSize(productData.size[0]);
          }
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleAddToCart = () => {
    setShowAddToCartPopup(true);
  };

  const handleClosePopup = () => {
    setShowAddToCartPopup(false);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleConfirmAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      productName: product.productName,
      productType: product.productType,
      imageUrl: product.imageUrl,
      price: product.price,
      oldPrice: product.oldPrice,
      size: product.size,
      color: product.color,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
      quantity: 1,
      totalQuantityLeft: product.quantity,
    };

    const updatedCart = addToCart(cartItem);
    console.log("Update New:", cartItem);
    console.log("Cart:", updatedCart);

    updateCartDisplay();
    setShowAddToCartPopup(false);
  };

  const renderPrice = () => {
    if (product?.state === "sold") {
      return (
        <div className="product__content-list-item-price">
          <span className="product-price sold">Hết hàng</span>
        </div>
      );
    }
    if (product?.state === "contact") {
      return (
        <div className="product__content-list-item-price">
          <span className="product-price">Liên hệ</span>
        </div>
      );
    }
    return (
      <div className="product__content-list-item-price">
        <span className="product-price">{product?.price}</span>
        <span className="product-currency">đ</span>
      </div>
    );
  };

  if (!product) {
    return null;
  }
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

  return (
    <div className="product__content-list-item">
      <div className="product__content-list-item-title">
        <span className="product-type">{product.productType}</span>
        <span className="product-name clickable" onClick={handleProductClick}>
          {product.productName}
        </span>
      </div>
      <div
        className="product__content-list-item-image clickable"
        onClick={handleProductClick}
      >
        <img src={product.imageUrl} alt={product.productName} />
      </div>
      <div className="product__content-list-item-footer">
        {renderPrice()}
        <div className="product__content-list-item-active">
          <HeartIcon className="product__content-list-item-heart-icon" />
          <div
            className="product__content-list-item-cart-icon"
            onClick={handleAddToCart}
          >
            <CartIcon className="product__content-list-item-cart-icon" />
          </div>

          <div className="product__content-list-item-popup">
            <div className="product__content-list-item-popup-inner">
              Thêm vào giỏ hàng
            </div>
            <div className="product__content-list-item-popup-footer"></div>
          </div>
        </div>
      </div>
      {product.discount && (
        <div className="product__content-list-item-discount">
          {product.discount}
        </div>
      )}

      {showAddToCartPopup && (
        <div className="add-to-cart-overlay">
          <div className="add-to-cart-popup">
            <div className="add-to-cart-header">
              <h3>Thêm vào giỏ hàng</h3>
              <button
                title="close button"
                className="close-btn"
                onClick={handleClosePopup}
              >
                <CloseIcon fill="#858F9B" />
              </button>
            </div>
            <div className="add-to-cart-content">
              <div className="product__selected-img">
                <img src={product.imageUrl} alt={product.productName} />
              </div>
              <div className="product__selected-info">
                <div className="product__selected-info-nonact">
                  <div className="product__selected-info-nonact-name">
                    {product.productName}
                  </div>
                  <div className="product__selected-info-nonact-oldPrice">
                    {product.oldPrice}đ
                  </div>
                  <div className="product__selected-info-nonact-currentPrice">
                    {product.price}đ
                  </div>
                </div>
                <div className="product__selected-info-act">
                  <div className="product__selected-info-act-color">
                    <div className="product__selected-info-act-color-label">
                      Màu sắc
                    </div>
                    <div className="product__selected-info-act-color-box">
                      {product.color.map((color, index) => (
                        <div
                          key={index}
                          className={`product__selected-info-act-color-box-item ${color.toLowerCase()} ${
                            selectedColor === color ? "selected" : ""
                          }`}
                          onClick={() => handleColorSelect(color)}
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="product__selected-info-act-size">
                    <div className="product__selected-info-act-size-label">
                      Kích thước
                    </div>
                    <div className="product__selected-info-act-size-box">
                      {product.size.map((size, index) => (
                        <div
                          key={index}
                          className={`product__selected-info-act-size-box-item ${size.toLowerCase()} ${
                            selectedSize === size ? "selected" : ""
                          }`}
                          onClick={() => handleSizeSelect(size)}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add-to-cart-actions">
              <button className="cancel-btn" onClick={handleClosePopup}>
                Hủy
              </button>
              <button className="confirm-btn" onClick={handleConfirmAddToCart}>
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
