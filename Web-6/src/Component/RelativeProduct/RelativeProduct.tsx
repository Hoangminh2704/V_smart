import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RelativeProduct.scss";
import { LeftIcon, RightIcon } from "../../assets/svg/svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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

interface RelativeProductProps {
  currentProductId?: number;
  currentProductType?: string;
}

const RelativeProduct: React.FC<RelativeProductProps> = ({
  currentProductId,
  currentProductType,
}) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data: ProductData[]) => {
        let relatedProducts = data;

        if (currentProductType) {
          relatedProducts = data.filter(
            (product) =>
              product.type === currentProductType &&
              product.id !== currentProductId
          );
        }

        if (relatedProducts.length < 8) {
          const otherProducts = data.filter(
            (product) =>
              product.id !== currentProductId &&
              !relatedProducts.find((p) => p.id === product.id)
          );
          relatedProducts = [...relatedProducts, ...otherProducts];
        }

        const shuffled = relatedProducts.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 10));
      })
      .catch((error) => console.error(error));
  }, [currentProductId, currentProductType]);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="Relative">
      <div className="Relative__header">Sản phẩm liên quan</div>
      <div className="Relative__content">
        <div className="Relative__content-back">
          <LeftIcon className="Relative__content-back-icon" />
        </div>
        <div className="Relative__content-center">
          <Swiper
            modules={[Navigation]}
            spaceBetween={35}
            slidesPerView={5}
            loop={true}
            className="RelativeSwiper"
            navigation={{
              prevEl: ".Relative__content-back-icon",
              nextEl: ".Relative__content-forward-icon",
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 35,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  className="relative-product-card"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="relative-product-card__image">
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      onError={(e) => {
                        e.currentTarget.src = "/src/assets/image/product1.png";
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="Relative__content-forward">
          <RightIcon className="Relative__content-forward-icon" />
        </div>
      </div>
    </div>
  );
};

export default RelativeProduct;
