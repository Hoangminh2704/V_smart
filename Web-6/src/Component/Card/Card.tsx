import React, { useState, useEffect } from "react";
import "./Card.scss";
import { HeartIcon, CartIcon } from "../../assets/svg/svg";
import product1 from "../../assets/image/product1.png"; // Placeholder

interface CardProps {
  id: number;
}

interface ProductData {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  price: string;
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

  const getImageUrl = (imageName: string) => {
    if (imageName === "product1.png") {
      return product1;
    }
    return "";
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
        <img src={getImageUrl(product.imageUrl)} alt={product.productName} />
      </div>
      <div className="product__content-list-item-footer">
        <div className="product__content-list-item-price">
          <span className="product-price">{product.price}</span>
          <span className="product-currency">đ</span>
        </div>
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
    </div>
  );
};

export default Card;
