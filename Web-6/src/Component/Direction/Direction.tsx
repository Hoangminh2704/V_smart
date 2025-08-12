import React from "react";
import "./Direction.scss";
import { RightIcon } from "../../assets/svg/svg";

interface DirectionProps {
  directions: string;
}

const Direction: React.FC<DirectionProps> = ({ directions }) => {
  return (
    <div className="direction">
      <div className="direction__content">
        <div className="direction__content-item">
          <div className="direction__from">Trang chủ</div>
          <div className="direction__icon">
            <RightIcon className="direction__icon-svg" />
          </div>
          <div className="direction__to">{directions}</div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
