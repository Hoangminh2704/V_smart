import React, { useState, useEffect } from "react";
import "./BestSellingProduct.scss";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

interface ProductData {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  oldPrice: number;
  price: number;
  state: string;
  discount?: string;
  order: number;
}

const BestSellingProduct: React.FC = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState<ProductData[]>(
    []
  );
  const navigate = useNavigate();
  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    fetch("/src/data/products.json")
      .then((response) => response.json())
      .then((data: ProductData[]) => {
        const sortedProducts = data
          .sort((a, b) => b.order - a.order)
          .slice(0, 5);
        setBestSellingProducts(sortedProducts);
      })
      .catch((error) => console.error(error));
  }, []);

  if (bestSellingProducts.length < 5) {
    return <div>Loading...</div>;
  }

  const [bestSeller, ...otherProducts] = bestSellingProducts;

  console.log(bestSeller, otherProducts);

  return (
    <div className="bestSelling">
      <div className="bestSelling__header">Sản phẩm bán chạy</div>
      <div className="bestSelling__content">
        <div className="bestSelling__content-left">
          <div className="bestSelling__small-card">
            <Card id={otherProducts[0].id} />
          </div>
          <div className="bestSelling__small-card">
            <Card id={otherProducts[1].id} />
          </div>
        </div>

        <div className="bestSelling__content-middle">
          <div className="bestSelling__main">
            <div className="bestSelling__main-header">
              <span className="bestSelling__main-header-type">
                {bestSeller.productType}
              </span>
              <span
                className="bestSelling__main-header-name"
                onClick={() => handleProductClick(bestSeller.id)}
              >
                {bestSeller.productName}
              </span>
            </div>
            <div className="bestSelling__main-image">
              <div
                className="bestSelling__main-image-wrapper"
                onClick={() => handleProductClick(bestSeller.id)}
              >
                <img src={bestSeller.imageUrl} alt={bestSeller.productName} />
              </div>
              <div className="bestSelling__main-image-overlay">
                <div className="bestSelling__main-image-overlay-inner">
                  <img src={bestSeller.imageUrl} alt={bestSeller.productName} />
                </div>
                <div className="bestSelling__main-image-overlay-inner">
                  <img src={bestSeller.imageUrl} alt={bestSeller.productName} />
                </div>
                <div className="bestSelling__main-image-overlay-inner">
                  <img src={bestSeller.imageUrl} alt={bestSeller.productName} />
                </div>
                <div className="bestSelling__main-image-overlay-inner">
                  <img src={bestSeller.imageUrl} alt={bestSeller.productName} />
                </div>
                <div className="bestSelling__main-image-overlay-inner">
                  <img src={bestSeller.imageUrl} alt={bestSeller.productName} />
                </div>
                <div className="bestSelling__main-image-overlay-inner">
                  <img src={bestSeller.imageUrl} alt={bestSeller.productName} />
                </div>
                <div className="bestSelling__main-image-overlay-inner">
                  <img src={bestSeller.imageUrl} alt={bestSeller.productName} />
                </div>
              </div>
            </div>
            <div className="bestSelling__main-price">
              <span className="bestSelling__main-price-old">
                {bestSeller.oldPrice.toLocaleString("vi-VN")}đ
              </span>

              <div className="bestSelling__main-price-current">
                <span className="bestSelling-price">
                  {bestSeller.price.toLocaleString("vi-VN")}
                </span>
                <span className="bestSelling-currency">đ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bestSelling__content-right">
          <div className="bestSelling__small-card">
            <Card id={otherProducts[2].id} />
          </div>
          <div className="bestSelling__small-card">
            <Card id={otherProducts[3].id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
