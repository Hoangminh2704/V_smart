import React from "react";
import "./AboutProcess.scss";
import {
  AboutProcessEditIcon,
  AboutProcessCallIcon,
  AboutProcessTransportIcon,
  AboutProcessGearIcon,
  AboutProcessRightArrow,
  VectorIcon,
  VectorNoArrowIcon,
} from "../../assets/svg/svg";

const AboutProcess: React.FC = () => {
  return (
    <div className="aboutProcess__background">
      <div className="aboutProcess">
        <div className="aboutProcess__intro">
          <div className="aboutProcess__intro-header">Quy trình làm việc</div>
          <div className="aboutProcess__intro-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
            magna nibh nunc neque aliquam ullamcorper. Ut consequat pellentesque
            feugiat fringilla libero diam natoque.
          </div>
        </div>
        <div className="aboutProcess__steps">
          <div className="aboutProcess__steps-item">
            <div className="aboutProcess__steps-item-name">Bước 1</div>
            <div className="aboutProcess__steps-item-icon">
              <AboutProcessEditIcon className="aboutProcess__steps-item-icon-svg"></AboutProcessEditIcon>
            </div>

            <AboutProcessRightArrow className="aboutProcess__steps-item-connector"></AboutProcessRightArrow>
            <VectorIcon className="aboutProcess__steps-item-vector"></VectorIcon>
            <div className="aboutProcess__steps-item-description">
              Tiếp nhận đơn hàng <br /> từ khách hàng
            </div>
          </div>
          <div className="aboutProcess__steps-item">
            <div className="aboutProcess__steps-item-name">Bước 2</div>
            <div className="aboutProcess__steps-item-icon">
              <AboutProcessCallIcon className="aboutProcess__steps-item-icon-svg"></AboutProcessCallIcon>
            </div>
            <AboutProcessRightArrow className="aboutProcess__steps-item-connector"></AboutProcessRightArrow>
            <VectorIcon className="aboutProcess__steps-item-vector"></VectorIcon>
            <div className="aboutProcess__steps-item-description">
              Tư vấn và xác nhận <br /> đơn hàng
            </div>
          </div>
          <div className="aboutProcess__steps-item">
            <div className="aboutProcess__steps-item-name">Bước 3</div>

            <div className="aboutProcess__steps-item-icon">
              <AboutProcessTransportIcon className="aboutProcess__steps-item-icon-svg"></AboutProcessTransportIcon>
            </div>
            <AboutProcessRightArrow className="aboutProcess__steps-item-connector"></AboutProcessRightArrow>
            <VectorIcon className="aboutProcess__steps-item-vector"></VectorIcon>
            <div className="aboutProcess__steps-item-description">
              Vận chuyển sản <br /> phẩm đến khách
            </div>
          </div>
          <div className="aboutProcess__steps-item">
            <div className="aboutProcess__steps-item-name">Bước 4</div>
            <div className="aboutProcess__steps-item-icon">
              <AboutProcessGearIcon className="aboutProcess__steps-item-icon-svg"></AboutProcessGearIcon>
            </div>

            <VectorNoArrowIcon className="aboutProcess__steps-item-vector"></VectorNoArrowIcon>
            <div className="aboutProcess__steps-item-description">
              Bàn giao sản phẩm <br /> và lắp đặt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProcess;
