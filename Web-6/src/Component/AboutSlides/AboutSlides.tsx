import React from "react";
import "./AboutSlides.scss";
import AboutSlide from "../../assets/image/AboutSlide.png";

import AboutSlide2 from "../../assets/image/AboutSlide2.png";
import AboutSlide3 from "../../assets/image/AboutSlide3.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

const AboutSlides: React.FC = () => {
  return (
    <div className="aboutSlides">
      <div className="aboutSlides__title">
        <div className="aboutSlides__title-header">Dự án của chúng tôi</div>
        <div className="aboutSlides__title-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet magna
          nibh nunc neque aliquam ullamcorper. Ut consequat pellentesque feugiat
          fringilla libero diam natoque.
        </div>
      </div>
      <div className="aboutSlides__content">
        <div className="aboutSlides__content-slides">
          <div className="aboutSlides__content-slides-item">
            <div className="aboutSlides__content-slides-item-image">
              <img src={AboutSlide2} alt="About Slide" />
            </div>
            <div className="aboutSlides__content-slides-item-title">
              <div className="aboutSlides__content-slides-item-title-header">
                VinHomes
              </div>
              <div className="aboutSlides__content-slides-item-title-content">
                Smart Home
              </div>
            </div>
          </div>
          <div className="aboutSlides__content-slides-item active">
            <div className="aboutSlides__content-slides-item-image">
              <img src={AboutSlide} alt="About Slide" />
            </div>
            <div className="aboutSlides__content-slides-item-title">
              <div className="aboutSlides__content-slides-item-title-header">
                VinHomes
              </div>
              <div className="aboutSlides__content-slides-item-title-content">
                Smart Home
              </div>
            </div>
          </div>
          <div className="aboutSlides__content-slides-item">
            <div className="aboutSlides__content-slides-item-image">
              <img src={AboutSlide3} alt="About Slide" />
            </div>
            <div className="aboutSlides__content-slides-item-title">
              <div className="aboutSlides__content-slides-item-title-header">
                VinHomes
              </div>
              <div className="aboutSlides__content-slides-item-title-content">
                Smart Home
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSlides__content-pagination"></div>
      </div>
    </div>
  );
};

export default AboutSlides;
