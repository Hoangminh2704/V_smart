import type { ProductDataType } from '../Data/productsDataType';

export interface RecommendationScore {
  productId: number;
  score: number;
  reasons: string[];
}

export interface UserBehavior {
  viewedProducts: number[];
  cartItems: number[];
  searchHistory: string[];
  lastViewTime: Record<number, number>;
}

// Lấy lịch sử hành vi người dùng từ localStorage
export const getUserBehavior = (): UserBehavior => {
  const behavior = localStorage.getItem('user_behavior');
  if (!behavior) {
    return {
      viewedProducts: [],
      cartItems: [],
      searchHistory: [],
      lastViewTime: {}
    };
  }
  return JSON.parse(behavior);
};

// Lưu hành vi người dùng
export const saveUserBehavior = (behavior: UserBehavior): void => {
  localStorage.setItem('user_behavior', JSON.stringify(behavior));
};

// Ghi nhận sản phẩm đã xem
export const trackProductView = (productId: number): void => {
  const behavior = getUserBehavior();
  
  if (!behavior.viewedProducts.includes(productId)) {
    behavior.viewedProducts.push(productId);
  }
  
  behavior.lastViewTime[productId] = Date.now();
  
  // Giữ tối đa 50 sản phẩm đã xem gần nhất
  if (behavior.viewedProducts.length > 50) {
    behavior.viewedProducts = behavior.viewedProducts.slice(-50);
  }
  
  saveUserBehavior(behavior);
};

// Ghi nhận từ khóa tìm kiếm
export const trackSearch = (keyword: string): void => {
  const behavior = getUserBehavior();
  
  if (!behavior.searchHistory.includes(keyword)) {
    behavior.searchHistory.push(keyword);
  }
  
  if (behavior.searchHistory.length > 20) {
    behavior.searchHistory = behavior.searchHistory.slice(-20);
  }
  
  saveUserBehavior(behavior);
};

// Thuật toán đề xuất chính
export const getRecommendedProducts = (
  allProducts: ProductDataType[],
  currentProductId?: number,
  limit: number = 10
): ProductDataType[] => {
  const behavior = getUserBehavior();
  const scores: Map<number, RecommendationScore> = new Map();

  allProducts.forEach(product => {
    if (product.id === currentProductId) return;
    
    let score = 0;
    const reasons: string[] = [];

    // 1. Collaborative Filtering - Dựa trên sản phẩm đã xem
    if (behavior.viewedProducts.length > 0) {
      const viewedProducts = allProducts.filter(p => 
        behavior.viewedProducts.includes(p.id)
      );
      
      viewedProducts.forEach(viewedProduct => {
        // Cùng loại sản phẩm
        if (viewedProduct.type === product.type) {
          score += 15;
          reasons.push('Cùng loại sản phẩm bạn đã xem');
        }
        
        // Cùng thương hiệu
        if (viewedProduct.brand === product.brand) {
          score += 10;
          reasons.push('Cùng thương hiệu');
        }
        
        // Cùng khoảng giá (±30%)
        const priceDiff = Math.abs(viewedProduct.price - product.price) / viewedProduct.price;
        if (priceDiff <= 0.3) {
          score += 8;
          reasons.push('Cùng khoảng giá');
        }
      });
    }

    // 2. Content-Based Filtering - Dựa trên sản phẩm hiện tại
    if (currentProductId) {
      const currentProduct = allProducts.find(p => p.id === currentProductId);
      if (currentProduct) {
        if (currentProduct.type === product.type) {
          score += 20;
          reasons.push('Sản phẩm tương tự');
        }
        if (currentProduct.brand === product.brand) {
          score += 12;
          reasons.push('Cùng thương hiệu');
        }
        
        // So sánh giá
        const priceDiff = Math.abs(currentProduct.price - product.price) / currentProduct.price;
        if (priceDiff <= 0.2) {
          score += 10;
          reasons.push('Mức giá phù hợp');
        } else if (product.price < currentProduct.price) {
          score += 5;
          reasons.push('Giá tốt hơn');
        }
      }
    }

    // 3. Popularity-Based - Sản phẩm phổ biến
    if (product.order > 50) {
      score += 8;
      reasons.push('Sản phẩm bán chạy');
    }

    // 4. Discount/Promotion
    if (product.discount) {
      score += 12;
      reasons.push('Đang khuyến mãi');
    }

    // 5. Availability
    if (product.quantity > 0 && product.state !== 'sold') {
      score += 5;
    } else {
      score -= 20; // Penalty cho sản phẩm hết hàng
    }

    // 6. Recent View Bonus
    const lastView = behavior.lastViewTime[product.id];
    if (lastView) {
      const hoursSinceView = (Date.now() - lastView) / (1000 * 60 * 60);
      if (hoursSinceView < 24) {
        score += 7;
        reasons.push('Bạn đã xem gần đây');
      }
    }

    // 7. Price Range Preference
    const avgViewedPrice = behavior.viewedProducts.length > 0
      ? allProducts
          .filter(p => behavior.viewedProducts.includes(p.id))
          .reduce((sum, p) => sum + p.price, 0) / behavior.viewedProducts.length
      : 0;
    
    if (avgViewedPrice > 0) {
      const priceDiff = Math.abs(product.price - avgViewedPrice) / avgViewedPrice;
      if (priceDiff <= 0.4) {
        score += 6;
        reasons.push('Phù hợp với ngân sách');
      }
    }

    // Bonus cho sản phẩm mới
    if (product.state === 'new') {
      score += 3;
    }

    scores.set(product.id, {
      productId: product.id,
      score,
      reasons: [...new Set(reasons)] // Remove duplicates
    });
  });

  // Sắp xếp theo điểm và lấy top products
  const sortedProducts = allProducts
    .filter(p => scores.has(p.id))
    .sort((a, b) => {
      const scoreA = scores.get(a.id)?.score || 0;
      const scoreB = scores.get(b.id)?.score || 0;
      return scoreB - scoreA;
    })
    .slice(0, limit);

  return sortedProducts;
};

// Đề xuất dựa trên giỏ hàng
export const getCartBasedRecommendations = (
  allProducts: ProductDataType[],
  cartProductIds: number[],
  limit: number = 6
): ProductDataType[] => {
  if (cartProductIds.length === 0) {
    return getRecommendedProducts(allProducts, undefined, limit);
  }

  const cartProducts = allProducts.filter(p => cartProductIds.includes(p.id));
  const recommendations = new Map<number, number>();

  cartProducts.forEach(cartProduct => {
    allProducts.forEach(product => {
      if (cartProductIds.includes(product.id)) return;
      
      let score = recommendations.get(product.id) || 0;

      // Frequently bought together logic
      if (cartProduct.type === product.type) {
        score += 10;
      }
      if (cartProduct.brand === product.brand) {
        score += 8;
      }
      
      // Complementary products (logic có thể mở rộng)
      if (isComplementaryProduct(cartProduct, product)) {
        score += 15;
      }

      recommendations.set(product.id, score);
    });
  });

  return allProducts
    .filter(p => recommendations.has(p.id))
    .sort((a, b) => (recommendations.get(b.id) || 0) - (recommendations.get(a.id) || 0))
    .slice(0, limit);
};

// Helper function để xác định sản phẩm bổ sung
const isComplementaryProduct = (product1: ProductDataType, product2: ProductDataType): boolean => {
  const complementaryPairs: Record<string, string[]> = {
    'Khóa cửa thông minh': ['Cảm biến', 'Bộ điều khiển trung tâm'],
    'Công tắc thông minh': ['Đèn LED tự động', 'Bộ điều khiển trung tâm'],
    'Rèm cửa thông minh': ['Bộ điều khiển trung tâm', 'Sensor'],
    'Ổ cắm thông minh': ['Bộ điều khiển trung tâm', 'Sensor']
  };

  const type1Complements = complementaryPairs[product1.type] || [];
  return type1Complements.includes(product2.type);
};

// Đề xuất "Có thể bạn cũng thích"
export const getYouMayAlsoLike = (
  allProducts: ProductDataType[],
  limit: number = 6
): ProductDataType[] => {
  // Mix của trending và personalized
  const trending = allProducts
    .filter(p => p.quantity > 0)
    .sort((a, b) => b.order - a.order)
    .slice(0, Math.floor(limit / 2));

  const personalized = getRecommendedProducts(allProducts, undefined, Math.ceil(limit / 2));

  return [...personalized, ...trending].slice(0, limit);
};
