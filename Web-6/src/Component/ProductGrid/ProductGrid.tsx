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

interface ProductGridProps {
  currentFilter: FilterOptions;
  onTypeFilter: (type: string) => void;
  getCurrentFilter: () => FilterOptions;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  currentFilter,
  onTypeFilter,
  getCurrentFilter,
}) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [displayCount, setDisplayCount] = useState(9);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleTypeFilter = (selectedType: string) => {
    onTypeFilter(selectedType);
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

  useEffect(() => {
    const filter = getCurrentFilter();
    console.log("Current filter:", filter);
  }, [currentFilter, getCurrentFilter]);

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
              onClick={() => {
                toggleFilter();
                console.log("Current filter popup:", getCurrentFilter());
              }}
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
          <label
            className="productGrid__filter-list-item"
            data-filter="Automatic Gate"
            onClick={() => handleTypeFilter("Automatic Gate")}
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select1"
              type="checkbox"
              checked={currentFilter.type === "Automatic Gate"}
              readOnly
            />
            <span className="productGrid__filter-list-item-text">
              Cổng tự động
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-filter="Smart Door"
            onClick={() => handleTypeFilter("Smart Door")}
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select2"
              type="checkbox"
              checked={currentFilter.type === "Smart Door"}
              readOnly
            />
            <span className="productGrid__filter-list-item-text">
              Khoá cửa thông minh
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-filter="Smart Switch"
            onClick={() => handleTypeFilter("Smart Switch")}
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select3"
              type="checkbox"
              checked={currentFilter.type === "Smart Switch"}
              readOnly
            />
            <span className="productGrid__filter-list-item-text">
              Công tắc thông minh
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-filter="Automatic LED"
            onClick={() => handleTypeFilter("Automatic LED")}
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select4"
              type="checkbox"
              checked={currentFilter.type === "Automatic LED"}
              readOnly
            />
            <span className="productGrid__filter-list-item-text">
              Đèn LED tự động
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-filter="Central Controller"
            onClick={() => handleTypeFilter("Central Controller")}
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select5"
              type="checkbox"
              checked={currentFilter.type === "Central Controller"}
              readOnly
            />
            <span className="productGrid__filter-list-item-text">
              Bộ điều khiển trung tâm
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-filter="Sensor"
            onClick={() => handleTypeFilter("Sensor")}
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select6"
              type="checkbox"
              checked={currentFilter.type === "Sensor"}
              readOnly
            />
            <span className="productGrid__filter-list-item-text">Cảm biến</span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-filter="IR Controller"
            onClick={() => handleTypeFilter("IR Controller")}
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select7"
              type="checkbox"
              checked={currentFilter.type === "IR Controller"}
              readOnly
            />
            <span className="productGrid__filter-list-item-text">
              Bộ điều khiển hồng ngoại
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-filter="Smart Curtain"
            onClick={() => handleTypeFilter("Smart Curtain")}
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select8"
              type="checkbox"
              checked={currentFilter.type === "Smart Curtain"}
              readOnly
            />
            <span className="productGrid__filter-list-item-text">
              Rèm cửa thông minh
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-filter="Smart Socket"
            onClick={() => handleTypeFilter("Smart Socket")}
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select9"
              type="checkbox"
              checked={currentFilter.type === "Smart Socket"}
              readOnly
            />
            <span className="productGrid__filter-list-item-text">
              Ổ cắm thông minh
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default ProductGrid;
