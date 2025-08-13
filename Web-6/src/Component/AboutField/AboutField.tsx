import React from "react";
import "./AboutField.scss";
import {
  AboutControlIcon,
  AboutLightIcon,
  AboutConditionerIcon,
  AboutCurtainIcon,
  AboutHomeShieldIcon,
  AboutFireAlarmIcon,
  AboutGardenIcon,
  AboutElectronicIcon,
} from "../../assets/svg/svg";

const AboutField: React.FC = () => {
  return (
    <div className="aboutField">
      <div className="aboutField__title">
        <div className="aboutField__title-header">Lĩnh vực kinh doanh</div>
        <div className="aboutField__title-description">
          {" "}
          V SMART IDEARS cung cấp cho hệ thống nhà thông minh những sản phẩm đa
          dạng với giá thành ưu đãi nhất, nhiều tiện ích tiện lợi nhất đảm bảo
          chất lượng cho người sử dụng.
        </div>
      </div>
      <div className="aboutField__items">
        <div className="aboutField__items-category">
          <AboutControlIcon className="aboutField__items-category-icon"></AboutControlIcon>
          <div className="aboutField__items-category-name">
            Tiện ích điều khiển từ xa
          </div>
        </div>
        <div className="aboutField__items-category">
          <AboutLightIcon className="aboutField__items-category-icon"></AboutLightIcon>
          <div className="aboutField__items-category-name">
            Tiện ích điều khiển hệ thống chiếu sáng
          </div>
        </div>{" "}
        <div className="aboutField__items-category">
          <AboutConditionerIcon className="aboutField__items-category-icon"></AboutConditionerIcon>
          <div className="aboutField__items-category-name">
            Tự động điều chỉnh nhiệt độ máy lạnh
          </div>
        </div>{" "}
        <div className="aboutField__items-category">
          <AboutCurtainIcon className="aboutField__items-category-icon"></AboutCurtainIcon>
          <div className="aboutField__items-category-name">
            Tiện ích điều khiển rèm cửa tự động
          </div>
        </div>{" "}
        <div className="aboutField__items-category">
          <AboutHomeShieldIcon className="aboutField__items-category-icon"></AboutHomeShieldIcon>
          <div className="aboutField__items-category-name">
            Kiểm soát cảnh báo hệ thống an ninh
          </div>
        </div>{" "}
        <div className="aboutField__items-category">
          <AboutFireAlarmIcon className="aboutField__items-category-icon"></AboutFireAlarmIcon>
          <div className="aboutField__items-category-name">
            Cảnh báo cháy, khói kết hợp rò rỉ khí ga
          </div>
        </div>{" "}
        <div className="aboutField__items-category">
          <AboutGardenIcon className="aboutField__items-category-icon"></AboutGardenIcon>
          <div className="aboutField__items-category-name">
            Tiện ích tưới nước tự động
          </div>
        </div>{" "}
        <div className="aboutField__items-category">
          <AboutElectronicIcon className="aboutField__items-category-icon"></AboutElectronicIcon>
          <div className="aboutField__items-category-name">
            Quản lý thiết bị điện và tiết kiệm điện
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutField;
