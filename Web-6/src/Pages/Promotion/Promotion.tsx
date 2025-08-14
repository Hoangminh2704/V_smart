import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Direction from "../../Component/Direction/Direction";
import Discount from "../../Component/Discount/Discount";
import Role from "../../Component/Role/Role";
import PromoSpecial from "../../Component/PromoSpecial/PromoSpecial";
import Slides from "../../Component/Slides/Slides";
import PromoProduct from "../../Component/PromoProduct/PromoProduct";
function Promotion() {
  return (
    <>
      <Header />
      <Slides />
      <Direction directions="Khuyến mãi" />
      <PromoSpecial />
      <PromoProduct />
      <Discount />
      <Role />
      <Footer />
    </>
  );
}

export default Promotion;
