import React, { useState } from "react";
import "./Description__Detail.scss";

const DescriptionDetail: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="description">
      <div className="description__content">
        <div className="description__content-header">
          <div className="description__content-header-detail active">
            <span>Mô tả chi tiết</span>
            <div className="description__content-header-detail-line active"></div>
          </div>
          <div className="description__content-header-testimonial">
            <span>Đánh giá</span>
            <div className="description__content-header-testimonial-line"></div>
          </div>
        </div>
        <div
          className={`description__content-body ${
            isExpanded ? "expanded" : "collapsed"
          }`}
        >
          <span className="description__content-body-text">
            5 chế độ mở khóa đa dạng đem đến lựa chọn tiện dụng với nhiều hoàn
            cảnh và đối tượng người dùng: mở bằng vân tay - nhận diện trong 1
            giây, mở bằng thẻ từ, mở bằng mật khẩu chống nhìn trộm, mở bằng chìa
            khóa cơ trong trường hợp khẩn cấp và mở bằng ứng dụng trên điện
            thoại.
          </span>
          <ul className="description__content-body-list">
            <li className="description__content-body-list-item">
              Điều khiển và cấu hình khóa bằng App Lumi Life.
            </li>
            <li className="description__content-body-list-item">
              Tra cứu lịch sử đóng/mở khóa, kiểm soát người ra vào. Có cảnh báo
              trạng thái khóa lên App Lumi Life{" "}
            </li>
            <li className="description__content-body-list-item">
              Mở khóa bằng vân tay.
            </li>
            <li className="description__content-body-list-item">
              Mở khóa bằng mã số (Hỗ trợ tính năng mã số ảo để tăng bảo mật)
            </li>
            <li className="description__content-body-list-item">
              Mở khóa bằng thẻ từ.
            </li>
            <li className="description__content-body-list-item">
              Tích hợp chuông cửa và cổng sạc dự phòng Type-C
            </li>
          </ul>
          {!isExpanded && (
            <div className="description__content-body-fade"></div>
          )}
        </div>
      </div>
      <div className="description__button" onClick={handleToggleExpand}>
        {isExpanded ? "Thu gọn" : "Xem thêm"}
      </div>
    </div>
  );
};
export default DescriptionDetail;
