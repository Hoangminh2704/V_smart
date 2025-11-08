import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FrequentlyBoughtTogether.scss';
import { getCartBasedRecommendations } from '../../Utils/recommendationUtils';
import type { ProductDataType } from '../../Data/productsDataType';
import { PlusIcon } from '../../assets/svg/svg';
import { addToCart, type CartItem } from '../../Utils/cartUtils';

interface FrequentlyBoughtTogetherProps {
  currentProduct: ProductDataType;
}

const FrequentlyBoughtTogether: React.FC<FrequentlyBoughtTogetherProps> = ({ 
  currentProduct 
}) => {
  const [relatedProducts, setRelatedProducts] = useState<ProductDataType[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Set<number>>(new Set([currentProduct.id]));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch('/src/Data/products.json');
        const allProducts: ProductDataType[] = await response.json();
        
        const related = getCartBasedRecommendations(allProducts, [currentProduct.id], 3);
        setRelatedProducts(related);
        
        // Auto-select first related product
        if (related.length > 0) {
          setSelectedProducts(new Set([currentProduct.id, related[0].id]));
        }
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchRelatedProducts();
  }, [currentProduct.id]);

  const formatPrice = (price: number): string => {
    return price.toLocaleString('vi-VN');
  };

  const toggleProduct = (productId: number) => {
    if (productId === currentProduct.id) return; // Cannot deselect main product
    
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(productId)) {
      newSelected.delete(productId);
    } else {
      newSelected.add(productId);
    }
    setSelectedProducts(newSelected);
  };

  const getTotalPrice = (): number => {
    const allProducts = [currentProduct, ...relatedProducts];
    return allProducts
      .filter(p => selectedProducts.has(p.id))
      .reduce((sum, p) => sum + p.price, 0);
  };

  const handleAddAllToCart = () => {
    const allProducts = [currentProduct, ...relatedProducts];
    const productsToAdd = allProducts.filter(p => selectedProducts.has(p.id));

    productsToAdd.forEach(product => {
      const cartItem: CartItem = {
        id: product.id,
        productName: product.productName,
        productType: product.productType,
        imageUrl: product.imageUrl,
        price: product.price,
        oldPrice: product.oldPrice,
        size: product.size,
        color: product.color,
        selectedColor: product.color.length > 0 ? product.color[0] : '',
        selectedSize: product.size.length > 0 ? product.size[0] : '',
        quantity: 1,
        totalQuantityLeft: product.quantity,
        state: product.state,
        isChecked: true,
      };
      addToCart(cartItem);
    });

    window.dispatchEvent(new CustomEvent('cartUpdated'));
    alert('Đã thêm sản phẩm vào giỏ hàng!');
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="frequentlyBought">
      <div className="frequentlyBought__header">
        <h3 className="frequentlyBought__title">Thường mua cùng nhau</h3>
      </div>
      
      <div className="frequentlyBought__content">
        <div className="frequentlyBought__products">
          {/* Main Product */}
          <div className="frequentlyBought__product frequentlyBought__product--main">
            <div className="frequentlyBought__product-checkbox">
              <input
                type="checkbox"
                checked={true}
                disabled
                readOnly
              />
            </div>
            <div 
              className="frequentlyBought__product-image"
              onClick={() => navigate(`/product/${currentProduct.id}`)}
            >
              <img src={currentProduct.imageUrl} alt={currentProduct.productName} />
            </div>
            <div className="frequentlyBought__product-info">
              <h4 className="frequentlyBought__product-name">{currentProduct.productName}</h4>
              <p className="frequentlyBought__product-price">{formatPrice(currentProduct.price)}đ</p>
            </div>
          </div>

          {relatedProducts.map((product) => (
            <React.Fragment key={product.id}>
              <div className="frequentlyBought__plus">
                <PlusIcon className="frequentlyBought__plus-icon" />
              </div>
              
              <div className="frequentlyBought__product">
                <div className="frequentlyBought__product-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedProducts.has(product.id)}
                    onChange={() => toggleProduct(product.id)}
                  />
                </div>
                <div 
                  className="frequentlyBought__product-image"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img src={product.imageUrl} alt={product.productName} />
                </div>
                <div className="frequentlyBought__product-info">
                  <h4 className="frequentlyBought__product-name">{product.productName}</h4>
                  <p className="frequentlyBought__product-price">{formatPrice(product.price)}đ</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="frequentlyBought__summary">
          <div className="frequentlyBought__total">
            <span className="frequentlyBought__total-label">Tổng cộng:</span>
            <span className="frequentlyBought__total-price">{formatPrice(getTotalPrice())}đ</span>
          </div>
          <button 
            className="frequentlyBought__add-button"
            onClick={handleAddAllToCart}
            disabled={selectedProducts.size === 0}
          >
            Thêm {selectedProducts.size} sản phẩm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
