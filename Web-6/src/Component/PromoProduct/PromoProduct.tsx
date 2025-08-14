import React, { useState, useEffect } from "react";
import "./PromoProduct.scss";
import Card from "../Card/Card";
import banner_product from "../../assets/image/banner_product.png";
import { RightIcon } from "../../assets/svg/svg";
import {
  ArrowLeftPagination,
  ArrowRightPagination,
} from "../../assets/svg/svg";
interface ProductData {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  oldPrice: number;
  price: number;
  discount?: string;
  state: string;
  order: number;
  type: string;
  brand: string;
}
const PromoProduct: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = () => {
    if (window.innerWidth >= 1280) {
      return 9;
    } else {
      return 6;
    }
  };

  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data: ProductData[]) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  const filterPromoProducts = products.filter((product) => product.discount);
  const totalPages = Math.ceil(filterPromoProducts.length / productsPerPage());
  const startIndex = (currentPage - 1) * productsPerPage();
  const endIndex = startIndex + productsPerPage();
  const displayedProducts = filterPromoProducts.slice(startIndex, endIndex);
  const promoProducts = displayedProducts.slice(0, 9);

  const handlePageChange = (page: number) => {
    const maxPages = Math.max(totalPages, 1);
    if (page >= 1 && page <= maxPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 1000, behavior: "smooth" });
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
    <div className="promoProduct">
      <div className="promoProduct__header">Sản phẩm khuyến mãi</div>
      <div className="promoProduct__content">
        <div className="promoProduct__content-item">
          <div className="promoProduct__content-item-element">
            {promoProducts.map((product) => (
              <Card key={product.id} id={product.id} />
            ))}
          </div>
          {renderPagination()}
        </div>
        <div className="promoProduct__content-banner">
          <div className="promoProduct__content-banner-info">
            <div className="promoProduct__content-banner-header">
              <span className="promoProduct__content-banner-name">
                Huawei matebook d15
              </span>
              <span className="promoProduct__content-banner-discount">
                Giảm 15% khi mua online
              </span>
            </div>
            <div className="promoProduct__content-banner-button">
              <span className="promoProduct__content-banner-button-text">
                Shop now{" "}
              </span>
              <RightIcon className="promoProduct__content-banner-button-icon" />
            </div>
          </div>
          <div className="promoProduct__content-banner-image">
            <img src={banner_product} alt="Banner Product" />
          </div>
          <div className="promoProduct__content-banner-circle-1"></div>
          <div className="promoProduct__content-banner-circle-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PromoProduct;
