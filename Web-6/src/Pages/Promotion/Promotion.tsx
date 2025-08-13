import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Direction from "../../Component/Direction/Direction";
import Discount from "../../Component/Discount/Discount";
import Role from "../../Component/Role/Role";
function Promotion() {
  return (
    <>
      <Header />
      <Direction directions="Khuyến mãi" />
      <Discount />
      <Role />
      <Footer />
    </>
  );
}

export default Promotion;
