import ProductDetail from "../../Component/ProductDetail/ProductDetail";
import Header from "../../Component/Header/Header";
import Direction from "../../Component/Direction/Direction";
import Footer from "../../Component/Footer/Footer";
import DescriptionDetail from "../../Component/Description__Detail/Description__Detail";

function ProductDetailPage() {
  return (
    <>
      <Header />
      <Direction />
      <ProductDetail />
      <DescriptionDetail />
      <Footer />
    </>
  );
}
export default ProductDetailPage;
