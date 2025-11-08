import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../Component/ProductDetail/ProductDetail";
import Header from "../../Component/Header/Header";
import Direction from "../../Component/Direction/Direction";
import Footer from "../../Component/Footer/Footer";
import DescriptionDetail from "../../Component/Description__Detail/Description__Detail";
import RelativeProduct from "../../Component/RelativeProduct/RelativeProduct";
import FrequentlyBoughtTogether from "../../Component/FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import RecommendedForYou from "../../Component/RecommendedForYou/RecommendedForYou";
interface ProductDataType {
  id: number;
  productType: string;
  productName: string;
  imageUrl: string;
  oldPrice: number;
  price: number;
  state: string;
  discount?: string;
  order: number;
  type: string;
  description?: string;
  brand: string;
  size: string[];
  color: string[];
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}
function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [currentProduct, setCurrentProduct] = useState<ProductDataType | null>(
    null
  );

  useEffect(() => {
    if (id) {
      fetch("/src/data/products.json")
        .then((response) => response.json())
        .then((data: ProductDataType[]) => {
          const product = data.find((p) => p.id === parseInt(id));
          setCurrentProduct(product || null);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <>
      <Header />
      <Direction directions="Chi tiết sản phẩm" />
      <ProductDetail product={currentProduct} />
      {currentProduct && (
        <FrequentlyBoughtTogether currentProduct={currentProduct} />
      )}
      <DescriptionDetail />
      <RelativeProduct
        currentProductId={currentProduct?.id}
        currentProductType={currentProduct?.type}
      />
      <RecommendedForYou currentProductId={currentProduct?.id} limit={10} />
      <Footer />
    </>
  );
}
export default ProductDetailPage;
