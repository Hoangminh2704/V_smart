import React from "react";
import "./AboutProcess.scss";
const AboutProcess: React.FC = () => {
  return (
    <div className="about-process">
      <div className="about-process__content">
        <div className="about-process__content-header">Quy trình làm việc</div>
        <div className="about-process__content-description">
          Chúng tôi cam kết mang đến cho bạn trải nghiệm mua sắm trực tuyến tốt
          nhất với quy trình làm việc chuyên nghiệp và hiệu quả.
        </div>
        <ul className="about-process__steps">
          <li>1. Tư vấn và hỗ trợ khách hàng</li>
          <li>2. Xử lý đơn hàng nhanh chóng</li>
          <li>3. Giao hàng tận nơi an toàn</li>
          <li>4. Hậu mãi và chăm sóc khách hàng</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProcess;
