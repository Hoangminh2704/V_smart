import React from "react";
import "./Product.scss";
import product1 from "../../assets/image/product1.png";
import banner_product from "../../assets/image/banner_product.png";
import { RightIcon } from "../../assets/svg/svg";
const Product: React.FC = () => {
  return (
    <div className="product">
      <div className="product__header">Sản phẩm mới nhất</div>
      <div className="product__content">
        <div className="product__content-list">
          <div className="product__content-list-item">
            <div className="product__content-list-item-title">
              <span className="product-type">Camera</span>
              <span className="product-name">
                Đèn cảm ứng thông minh Đèn cảm ứng thông minh...
              </span>
            </div>
            <div className="product__content-list-item-image">
              <img src={product1} alt="Product 1" />
            </div>
            <div className="product__content-list-item-price">
              <span className="product-price">4.500.000</span>
              <span className="product-currency">đ</span>
            </div>
          </div>
          <div className="product__content-list-item">
            <div className="product__content-list-item-title">
              <span className="product-type">Camera</span>
              <span className="product-name">
                Đèn cảm ứng thông minh Đèn cảm ứng thông minh...
              </span>
            </div>
            <div className="product__content-list-item-image">
              <img src={product1} alt="Product 1" />
            </div>
            <div className="product__content-list-item-price">
              <span className="product-price">4.500.000</span>
              <span className="product-currency">đ</span>
            </div>
          </div>
          <div className="product__content-list-item">
            <div className="product__content-list-item-title">
              <span className="product-type">Camera</span>
              <span className="product-name">
                Đèn cảm ứng thông minh Đèn cảm ứng thông minh...
              </span>
            </div>
            <div className="product__content-list-item-image">
              <img src={product1} alt="Product 1" />
            </div>
            <div className="product__content-list-item-price">
              <span className="product-price">4.500.000</span>
              <span className="product-currency">đ</span>
            </div>
          </div>
          <div className="product__content-list-item">
            <div className="product__content-list-item-title">
              <span className="product-type">Camera</span>
              <span className="product-name">
                Đèn cảm ứng thông minh Đèn cảm ứng thông minh...
              </span>
            </div>
            <div className="product__content-list-item-image">
              <img src={product1} alt="Product 1" />
            </div>
            <div className="product__content-list-item-price">
              <span className="product-price">4.500.000</span>
              <span className="product-currency">đ</span>
            </div>
          </div>
          <div className="product__content-list-item">
            <div className="product__content-list-item-title">
              <span className="product-type">Camera</span>
              <span className="product-name">
                Đèn cảm ứng thông minh Đèn cảm ứng thông minh...
              </span>
            </div>
            <div className="product__content-list-item-image">
              <img src={product1} alt="Product 1" />
            </div>
            <div className="product__content-list-item-price">
              <span className="product-price">4.500.000</span>
              <span className="product-currency">đ</span>
            </div>
          </div>
          <div className="product__content-list-item">
            <div className="product__content-list-item-title">
              <span className="product-type">Camera</span>
              <span className="product-name">
                Đèn cảm ứng thông minh Đèn cảm ứng thông minh...
              </span>
            </div>
            <div className="product__content-list-item-image">
              <img src={product1} alt="Product 1" />
            </div>
            <div className="product__content-list-item-price">
              <span className="product-price">4.500.000</span>
              <span className="product-currency">đ</span>
            </div>
          </div>
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
