// import React from "react";
import "./ProductDetail.scss";
import { Rate, MinusIcon, PlusIcon } from "../../assets/svg/svg";

function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="productDetail__img">
        <div className="productDetail__img-overall">
          <img src="../../src/assets/image/IMG.png" alt="" />
        </div>
        <div className="productDetail__img-thumbnail">
          <div className="productDetail__img-thumbnail-item">
            <img src="../../src/assets/image/IMG.png" alt="" />
          </div>
          <div className="productDetail__img-thumbnail-item">
            <img src="../../src/assets/image/IMG.png" alt="" />
          </div>
          <div className="productDetail__img-thumbnail-item">
            <img src="../../src/assets/image/IMG.png" alt="" />
          </div>
          <div className="productDetail__img-thumbnail-item">
            <img src="../../src/assets/image/IMG.png" alt="" />
          </div>
          <div className="productDetail__img-thumbnail-item">
            <img src="../../src/assets/image/IMG.png" alt="" />
          </div>
        </div>
      </div>
      <div className="productDetail__right">
        <div className="productDetail__info">
          <div className="productDetail__info-overall">
            <div className="productDetail__info-overall-name">
              Khóa thông minh Luvit{" "}
            </div>
            <div className="productDetail__info-overall-id">
              <div className="productDetail__info-overall-id-text">
                Mã sản phẩm:
              </div>
              <div className="productDetail__info-overall-id-value">123456</div>
            </div>
            <div className="productDetail__info-overall-star">
              <Rate className="productDetail__info-overall-star-icon" />
              <Rate className="productDetail__info-overall-star-icon" />
              <Rate className="productDetail__info-overall-star-icon" />
              <Rate className="productDetail__info-overall-star-icon" />
              <Rate className="productDetail__info-overall-star-icon" />
            </div>
            <div className="productDetail__info-overall-oldPrice">
              9.250.000đ
            </div>
            <div className="productDetail__info-overall-currentPrice">
              8.250.000đ
            </div>
          </div>
          <div className="productDetail__info-description">
            <div className="productDetail__info-description-title">
              <div className="productDetail__info-description-title-text">
                Mô tả
              </div>
              <ul className="productDetail__info-description-list">
                <li className="productDetail__info-description-list-item">
                  Điều khiển và cấu hình khóa bằng App Lumi Life.
                </li>
                <li className="productDetail__info-description-list-item">
                  Tra cứu lịch sử đóng/mở khóa, kiểm soát người ra vào. Có cảnh
                  báo trạng thái khóa lên App Lumi Life
                </li>
                <li className="productDetail__info-description-list-item">
                  Mở khóa bằng vân tay.
                </li>
                <li className="productDetail__info-description-list-item">
                  Mở khóa bằng mã số (Hỗ trợ tính năng mã số ảo để tăng bảo mật)
                </li>
                <li className="productDetail__info-description-list-item">
                  Mở khóa bằng thẻ từ.
                </li>
              </ul>
            </div>
            <div className="productDetail__info-description-line"></div>
            <div className="productDetail__info-description-countText">
              Số lượng
            </div>
          </div>
          <div className="productDetail__info-counting">
            <div className="productDetail__info-counting-input">
              <div className="productDetail__info-counting-input-minus">
                <MinusIcon className="productDetail__info-counting-input-icon" />
              </div>
              <div className="productDetail__info-counting-input-content">
                0
              </div>
              <div className="productDetail__info-counting-input-plus">
                <PlusIcon className="productDetail__info-counting-input-icon" />
              </div>
            </div>
            <div className="productDetail__info-counting-quantity">
              Còn 100 sản phẩm
            </div>
          </div>
          <div className="productDetail__info-color">
            <div className="productDetail__info-color-text">Màu sắc</div>
            <div className="productDetail__info-color-select">
              <div className="productDetail__info-color-select-item"></div>
              <div className="productDetail__info-color-select-item"></div>
              <div className="productDetail__info-color-select-item"></div>
            </div>
          </div>
          <div className="productDetail__info-size">
            <div className="productDetail__info-size-text">Kích thước</div>
            <div className="productDetail__info-size-select">
              <div className="productDetail__info-size-select-item active">
                S
              </div>
              <div className="productDetail__info-size-select-item">M</div>
              <div className="productDetail__info-size-select-item">L</div>
              <div className="productDetail__info-size-select-item">XL</div>
            </div>
          </div>
        </div>
        <div className="productDetail__button">
          <div className="productDetail__button-addToCart">
            Thêm vào giỏ hàng
          </div>
          <div className="productDetail__button-buyNow">Mua ngay</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
