import React from "react";
import "./Banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import banner1 from "../../assets/image/banner.png";
import banner2 from "../../assets/image/banner2.png";
import banner3 from "../../assets/image/banner3.png";
import banner4 from "../../assets/image/banner4.png";
import { LeftArrow, RightArrow } from "../../assets/svg/svg";
const Banner: React.FC = () => {
  const banners = [
    {
      id: 1,
      image: banner1,
      title: "Tất cả",
      header: "Tất cả",
      description: "Tất cả danh mục",
    },
    {
      id: 2,
      image: banner2,
      title: "Tất cả",
      header: "Cảm biến chuyển động...",
      description: "Cảm biến chuyển động",
    },
    {
      id: 3,
      image: banner3,
      title: "Tất cả",
      header: "SmartTV",
      description: "TV BoxTV Box",
    },
    {
      id: 4,
      image: banner4,
      title: "Tất cả",
      header: "Dọn dẹp",
      description: "Máy hút bụi cầm tay hút bụi cầm...",
    },
    {
      id: 5,
      image: banner1,
      title: "Tất cả",
      header: "Tất cả",
      description: "Tất cả danh mục",
    },
    {
      id: 6,
      image: banner4,
      title: "Tất cả",
      header: "Dọn dẹp",
      description: "Máy hút bụi cầm tay hút bụi cầm...",
    },
  ];

  return (
    <div className="banner">
      <div className="banner__arrow-left">
        <LeftArrow className="banner__arrow-left-icon" />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={4}
        slidesPerGroup={1}
        loop={true}
        watchOverflow={true}
        className="BannerSwiper"
        navigation={{
          prevEl: ".banner__arrow-left",
          nextEl: ".banner__arrow-right",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="banner__content">
              <div className="banner__content-description">
                <div className="banner__content-description-header">
                  {banner.header}
                </div>
                <div className="banner__content-description-text">
                  {banner.description}
                </div>
              </div>
              <div className="banner__content-image">
                <img src={banner.image} alt={banner.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="banner__arrow-right">
        <RightArrow className="banner__arrow-right-icon" />
      </div>
    </div>
  );
};
export default Banner;
