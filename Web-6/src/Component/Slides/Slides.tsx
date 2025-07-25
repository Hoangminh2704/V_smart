import React from "react";
import "./Slides.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slides: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "Smart home makes everyday life easier",
      discount: 40,
    },
    {
      id: 2,

      title: "Smart home makes everyday life easier",
      discount: 40,
    },
    {
      id: 3,

      title: "Smart home makes everyday life easier",
      discount: 40,
    },
  ];

  return (
    <div className="slides">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={600}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {slides.map((slideItem) => (
          <SwiperSlide key={slideItem.id}>
            <div className="slides__content">
              <div className="slides__content-title">
                <span>{slideItem.title}</span>
              </div>
              <div className="slides__content-discount">
                <span>
                  UP TO <br />
                  <span className="slides__content-discount-amount">
                    {slideItem.discount}
                    <span className="slides__content-discount-percentage">
                      %
                    </span>{" "}
                    <span className="slides__content-discount-off">OFF</span>
                  </span>
                </span>
              </div>
              <button title="Tìm hiểu thêm" className="slides__content-button">
                Tìm hiểu thêm
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slides;
