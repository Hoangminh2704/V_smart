import React, { useState, useEffect } from "react";
import "./ProductGrid.scss";
import Card from "../Card/Card";
import { Sort } from "../../assets/svg/svg";

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
interface FilterOptions {
  type: string;
  brand: string;
}

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [displayCount, setDisplayCount] = useState(9);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((response) => response.json())
      .then((data: ProductData[]) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 1280) {
        setDisplayCount(9);
        setIsFilterOpen(false);
      } else if (window.innerWidth >= 768) {
        setDisplayCount(6);
      } else {
        setDisplayCount(6);
      }
    };

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const displayedProducts = products.slice(0, displayCount);
  return (
    <div className="productGrid">
      <div
        className={`productGrid__overlay ${
          isFilterOpen ? "productGrid__overlay--open" : ""
        }`}
        onClick={toggleFilter}
      ></div>

      <div className="productGrid__list">
        <div className="productGrid__list-header">
          <div className="productGrid__list-header-text">Tất cả sản phẩm</div>
          <div className="productGrid__list-header-actions">
            <div className="productGrid__list-header-count">
              Hiển thị 1 - {displayedProducts.length} trong số {products.length}{" "}
              sản phẩm
            </div>
            <div
              className="productGrid__list-header-sort"
              onClick={toggleFilter}
            >
              <Sort className="productGrid__list-header-sort-icon" />
              <span className="productGrid__list-header-sort-text">Lọc</span>
            </div>
          </div>
        </div>
        <div className="productGrid__list-items">
          {displayedProducts.map((product) => (
            <Card key={product.id} id={product.id} />
          ))}
        </div>
      </div>
      <div
        className={`productGrid__filter ${
          isFilterOpen ? "productGrid__filter--open" : ""
        }`}
      >
        <div className="productGrid__filter-close" onClick={toggleFilter}>
          ✕
        </div>
        <div className="productGrid__filter-header">Loại sản phẩm</div>
        <div className="productGrid__filter-list">
          <div className="productGrid__filter-list-item">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select1"
              type="checkbox"
            />
            <span className="productGrid__filter-list-item-text">
              Cổng tự động
            </span>
          </div>
          <div className="productGrid__filter-list-item">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select2"
              type="checkbox"
            />
            <span className="productGrid__filter-list-item-text">
              Khoá cửa thông minh
            </span>
          </div>
          <div className="productGrid__filter-list-item">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select3"
              type="checkbox"
            />
            <span className="productGrid__filter-list-item-text">
              Công tắc thông minh
            </span>
          </div>
          <div className="productGrid__filter-list-item">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select4"
              type="checkbox"
            />
            <span className="productGrid__filter-list-item-text">
              Đèn LED tự động
            </span>
          </div>
          <div className="productGrid__filter-list-item">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select5"
              type="checkbox"
            />
            <span className="productGrid__filter-list-item-text">
              Bộ điều khiển trung tâm
            </span>
          </div>
          <div className="productGrid__filter-list-item">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select6"
              type="checkbox"
            />
            <span className="productGrid__filter-list-item-text">Cảm biến</span>
          </div>
          <div className="productGrid__filter-list-item">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select7"
              type="checkbox"
            />
            <span className="productGrid__filter-list-item-text">
              Bộ điều khiển hồng ngoại
            </span>
          </div>
          <div className="productGrid__filter-list-item">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select8"
              type="checkbox"
            />
            <span className="productGrid__filter-list-item-text">
              Rèm cửa thông minh
            </span>
          </div>
          <div className="productGrid__filter-list-item">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select9"
              type="checkbox"
            />
            <span className="productGrid__filter-list-item-text">
              Ổ cắm thông minh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductGrid;
