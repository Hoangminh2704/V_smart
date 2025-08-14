import React, { useState, useEffect } from "react";
import "./ProductGrid.scss";
import Card from "../Card/Card";
import {
  Sort,
  ArrowLeftPagination,
  ArrowRightPagination,
  NoProductSelectIcon,
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
  const productsPerPage = () => {
    if (window.innerWidth >= 1280) {
      return 9;
    } else {
      return 6;
    }
  };

  const productTypeFilters = [
    "Cổng tự động",
    "Khóa cửa thông minh",
    "Công tắc thông minh",
    "Đèn LED tự động",
    "Bộ điều khiển trung tâm",
    "Cảm biến",
    "Sensor",
    "Bộ điều khiển hồng ngoại",
    "Rèm cửa thông minh",
    "Ổ cắm thông minh",
  ];

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

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage());
  const startIndex = (currentPage - 1) * productsPerPage();
  const endIndex = startIndex + productsPerPage();
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
        {displayedProducts.length > 0 ? (
          <div className="productGrid__list-items">
            {displayedProducts.map((product) => (
              <Card key={product.id} id={product.id} />
            ))}
          </div>
        ) : (
          <div className="productGrid__list-empty">
            <div className="productGrid__list-empty-icon">
              <NoProductSelectIcon className="productGrid__list-empty-icon-svg" />
            </div>
            <div className="productGrid__list-empty-text">
              Không có sản phẩm phù hợp
            </div>
          </div>
        )}

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
          {productTypeFilters.map((filterType, index) => (
            <label
              key={filterType}
              className="productGrid__filter-list-item"
              data-type={filterType}
            >
              <input
                className="productGrid__filter-list-item-checkbox"
                title={`Select${index + 1}`}
                type="checkbox"
                checked={currentFilter.type === filterType}
                onChange={() => handleTypeFilter(filterType)}
              />
              <span
                className="productGrid__filter-list-item-text"
                onClick={(e) => {
                  e.preventDefault();
                  handleTypeFilter(filterType);
                }}
              >
                {filterType}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
