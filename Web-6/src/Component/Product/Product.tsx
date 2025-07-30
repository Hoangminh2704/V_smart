import React, { useEffect, useState } from "react";
import "./Product.scss";
import Card from "../Card/Card";
import banner_product from "../../assets/image/banner_product.png";
import { RightIcon } from "../../assets/svg/svg";

interface ProductInfo {
  id: number;
}

const Product: React.FC = () => {
  const [productId, setProductId] = useState<number[]>([]);

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((response) => response.json())
      .then((data: ProductInfo[]) => {
        setProductId(data.map((p) => p.id));
      })
      .catch((error) => console.error(error));
  }, []);
  const getProduct = productId.slice(0, 6);
  return (
    <div className="product">
      <div className="product__header">Sản phẩm mới nhất</div>
      <div className="product__content">
        <div className="product__content-list">
          {getProduct.map((id) => (
            <Card key={id} id={id} />
          ))}
        </div>
        <div className="product__content-banner">
          <div className="product__content-banner-info">
            <div className="product__content-banner-header">
              <span className="product__content-banner-name">
                Huawei matebook d15
              </span>
              <span className="product__content-banner-discount">
                Giảm 15% khi mua online
              </span>
            </div>
            <div className="product__content-banner-button">
              <span className="product__content-banner-button-text">
                Shop now{" "}
              </span>
              <RightIcon className="product__content-banner-button-icon" />
            </div>
          </div>
          <div className="product__content-banner-image">
            <img src={banner_product} alt="Banner Product" />
          </div>
          <div className="product__content-banner-circle-1"></div>
          <div className="product__content-banner-circle-2"></div>
        </div>
      </div>
    </div>
  );
};
export default Product;
