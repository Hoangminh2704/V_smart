import React from "react";
import "./Role.scss";
import { Transit, Guarantee, HoursIcon, Headset } from "../../assets/svg/svg";
const Role: React.FC = () => {
  return (
    <div className="role">
      <div className="role__content">
        <div className="role__item">
          <div className="role__item-icon">
            <Transit className="role__item-icon-svg" />
          </div>
          <div className="role__item-description">
            <div className="role__item-description-title">
              Giao hàng toàn quốc
            </div>
            <div className="role__item-description-text">
              Thanh toán khi nhận hàng
            </div>
          </div>
        </div>
        <div className="role__item">
          <div className="role__item-icon">
            <Guarantee className="role__item-icon-svg" />
          </div>
          <div className="role__item-description">
            <div className="role__item-description-title">
              Cam kết chính hãng
            </div>
            <div className="role__item-description-text">
              Đảm bảo chất lượng 100%
            </div>
          </div>
        </div>
        <div className="role__item">
          <div className="role__item-icon">
            <HoursIcon className="role__item-icon-svg" />
          </div>
          <div className="role__item-description">
            <div className="role__item-description-title">
              Giao hàng hỏa tốc
            </div>
            <div className="role__item-description-text">
              Áp dụng tại Thanh Hóa
            </div>
          </div>
        </div>
        <div className="role__item">
          <div className="role__item-icon">
            <Headset className="role__item-icon-svg" />
          </div>
          <div className="role__item-description">
            <div className="role__item-description-title">
              Thời gian làm việc
            </div>
            <div className="role__item-description-text">
              Thứ 2-Chủ Nhật: 8h30 - 18h30
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Role;
