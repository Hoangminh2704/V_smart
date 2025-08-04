import React, { useState, useEffect } from "react";
import "./ProductGrid.scss";
import Card from "../Card/Card";
import {
  Sort,
  ArrowLeftPagination,
  ArrowRightPagination,
} from "../../assets/svg/svg";

interface ProductData {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  price: string;
  discount?: string;
  state: string;
  order: number;
  type: string;
  brand: string;
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleTypeFilter = (selectedType: string) => {
    const newType = currentFilter.type === selectedType ? "" : selectedType;
    onTypeFilter(newType);
  };

  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data: ProductData[]) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const filter = getCurrentFilter();
    console.log("Current filter:", filter);
    setCurrentPage(1);
  }, [currentFilter, getCurrentFilter]);

  const filteredProducts = products.filter((product) => {
    const matchesType =
      !currentFilter.type || product.type === currentFilter.type;
    const matchesBrand =
      !currentFilter.brand || product.brand === currentFilter.brand;
    return matchesType && matchesBrand;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    const maxPages = Math.max(totalPages, 1);
    if (page >= 1 && page <= maxPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 630, behavior: "smooth" });
    }
  };

  const renderPagination = () => {
    const paginationTotalPages = Math.max(totalPages, 1);
    const pages = [];
    for (let i = 1; i <= paginationTotalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination__button ${
            currentPage === i ? "pagination__button--active" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination">
        <button
          className="pagination__button pagination__button--prev"
          onClick={() => handlePageChange(currentPage - 1)}
          title="Previous Page"
        >
          <ArrowLeftPagination className="pagination__icon" />
        </button>
        {pages}
        <button
          className="pagination__button pagination__button--next"
          onClick={() => handlePageChange(currentPage + 1)}
          title="Next Page"
        >
          <ArrowRightPagination className="pagination__icon" />
        </button>
      </div>
    );
  };
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
              Hiển thị {startIndex + 1} -{" "}
              {Math.min(endIndex, filteredProducts.length)} trong số{" "}
              {filteredProducts.length} sản phẩm
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

        {renderPagination()}
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
            data-type="Cổng tự động"
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select1"
              type="checkbox"
              checked={currentFilter.type === "Cổng tự động"}
              onChange={() => handleTypeFilter("Cổng tự động")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Cổng tự động");
              }}
            >
              Cổng tự động
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-type="Khóa cửa thông minh"
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select2"
              type="checkbox"
              checked={currentFilter.type === "Khóa cửa thông minh"}
              onChange={() => handleTypeFilter("Khóa cửa thông minh")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Khóa cửa thông minh");
              }}
            >
              Khóa cửa thông minh
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-type="Công tắc thông minh"
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select3"
              type="checkbox"
              checked={currentFilter.type === "Công tắc thông minh"}
              onChange={() => handleTypeFilter("Công tắc thông minh")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Công tắc thông minh");
              }}
            >
              Công tắc thông minh
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-type="Đèn LED tự động"
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select4"
              type="checkbox"
              checked={currentFilter.type === "Đèn LED tự động"}
              onChange={() => handleTypeFilter("Đèn LED tự động")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Đèn LED tự động");
              }}
            >
              Đèn LED tự động
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-type="Bộ điều khiển trung tâm"
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select5"
              type="checkbox"
              checked={currentFilter.type === "Bộ điều khiển trung tâm"}
              onChange={() => handleTypeFilter("Bộ điều khiển trung tâm")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Bộ điều khiển trung tâm");
              }}
            >
              Bộ điều khiển trung tâm
            </span>
          </label>
          <label className="productGrid__filter-list-item" data-type="Cảm biến">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select6"
              type="checkbox"
              checked={currentFilter.type === "Cảm biến"}
              onChange={() => handleTypeFilter("Cảm biến")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Cảm biến");
              }}
            >
              Cảm biến
            </span>
          </label>
          <label className="productGrid__filter-list-item" data-type="Sensor">
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select6b"
              type="checkbox"
              checked={currentFilter.type === "Sensor"}
              onChange={() => handleTypeFilter("Sensor")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Sensor");
              }}
            >
              Sensor
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-type="Bộ điều khiển hồng ngoại"
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select7"
              type="checkbox"
              checked={currentFilter.type === "Bộ điều khiển hồng ngoại"}
              onChange={() => handleTypeFilter("Bộ điều khiển hồng ngoại")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Bộ điều khiển hồng ngoại");
              }}
            >
              Bộ điều khiển hồng ngoại
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-type="Rèm cửa thông minh"
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select8"
              type="checkbox"
              checked={currentFilter.type === "Rèm cửa thông minh"}
              onChange={() => handleTypeFilter("Rèm cửa thông minh")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Rèm cửa thông minh");
              }}
            >
              Rèm cửa thông minh
            </span>
          </label>
          <label
            className="productGrid__filter-list-item"
            data-type="Ổ cắm thông minh"
          >
            <input
              className="productGrid__filter-list-item-checkbox"
              title="Select9"
              type="checkbox"
              checked={currentFilter.type === "Ổ cắm thông minh"}
              onChange={() => handleTypeFilter("Ổ cắm thông minh")}
            />
            <span
              className="productGrid__filter-list-item-text"
              onClick={(e) => {
                e.preventDefault();
                handleTypeFilter("Ổ cắm thông minh");
              }}
            >
              Ổ cắm thông minh
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default ProductGrid;
