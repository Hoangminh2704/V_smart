import React from "react";
import "./Discount.scss";
const Discount: React.FC = () => {
  return (
    <div className="discount">
      <div className="discount__content">
        <div className="discount__content__text">
          <span className="discount__content__text-title">
            Đăng ký và nhận ưu đãi
          </span>
          <span className="discount__content__text-description">
            Nhận ưu đãi và khuyến mãi qua email
          </span>
        </div>
        <div className="discount__content__inputEmail">
          <input
            className="discount__content__inputEmail-field"
            type="text"
            placeholder="Email"
          />
          <button className="discount__content__inputEmail-button">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};
export default Discount;
