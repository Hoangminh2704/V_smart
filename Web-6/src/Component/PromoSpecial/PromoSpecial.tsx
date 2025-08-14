import React, { useState, useEffect } from "react";
import "./PromoSpecial.scss";
import Card from "../Card/Card";
interface ProductData {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  price: string;
  discount?: string;
  state: string;
  order: number;
  type: string;
  brand: string;
}
const PromoSpecial: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data: ProductData[]) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  const filterPromoProducts = products.filter((product) => product.discount);
  const sortPromoProducts = filterPromoProducts.sort(
    (a, b) => a.order - b.order
  );
  const promoProducts = sortPromoProducts.slice(0, 4);
  return (
    <div className="promoSpecial">
      <div className="promoSpecial__header">Khuyến mãi đặc biệt</div>
      <div className="promoSpecial__content">
        {promoProducts.map((product) => (
          <Card key={product.id} id={product.id} />
        ))}
      </div>
    </div>
  );
};

export default PromoSpecial;
