import React, { useState, useEffect } from 'react';
import './RecommendedForYou.scss';
import Card from '../Card/Card';
import { getRecommendedProducts } from '../../Utils/recommendationUtils';
import type { ProductDataType } from '../../Data/productsDataType';

interface RecommendedForYouProps {
  currentProductId?: number;
  limit?: number;
}

const RecommendedForYou: React.FC<RecommendedForYouProps> = ({ 
  currentProductId,
  limit = 10 
}) => {
  const [recommendedProducts, setRecommendedProducts] = useState<ProductDataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        const response = await fetch('/src/Data/products.json');
        const allProducts: ProductDataType[] = await response.json();
        
        const recommended = getRecommendedProducts(allProducts, currentProductId, limit);
        setRecommendedProducts(recommended);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [currentProductId, limit]);

  if (loading) {
    return (
      <div className="recommendedForYou">
        <div className="recommendedForYou__header">Đề xuất cho bạn</div>
        <div className="recommendedForYou__loading">Đang tải...</div>
      </div>
    );
  }

  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <div className="recommendedForYou">
      <div className="recommendedForYou__header">
        <h2 className="recommendedForYou__title">Đề xuất cho bạn</h2>
        <p className="recommendedForYou__subtitle">Dựa trên lịch sử xem của bạn</p>
      </div>
      <div className="recommendedForYou__content">
        {recommendedProducts.map((product) => (
          <div key={product.id} className="recommendedForYou__item">
            <Card id={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedForYou;
