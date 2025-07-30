import React, { useState, useEffect } from "react";
import "./Card.scss";
import { HeartIcon, CartIcon } from "../../assets/svg/svg";

interface CardProps {
  id: number;
}

interface ProductData {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  price: string;
  discount?: string;
  state: string;
  order: number;
}

const Card: React.FC<CardProps> = ({ id }) => {
  const [product, setProduct] = useState<ProductData | null>(null);

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((response) => response.json())
      .then((data: ProductData[]) => {
        const productData = data.find((p) => p.id === id);
        setProduct(productData || null);
      })
      .catch((error) => console.error(error));
  }, [id]);

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

  return (
    <div className="product__content-list-item">
      <div className="product__content-list-item-title">
        <span className="product-type">{product.productType}</span>
        <span className="product-name">{product.productName}</span>
      </div>
      <div className="product__content-list-item-image">
        <img src={product.imageUrl} alt={product.productName} />
      </div>
      <div className="product__content-list-item-footer">
        {renderPrice()}
        <div className="product__content-list-item-active">
          <HeartIcon className="product__content-list-item-heart-icon" />
          <CartIcon className="product__content-list-item-cart-icon" />
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
    </div>
  );
};

export default Card;
