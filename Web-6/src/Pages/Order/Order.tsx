import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Direction from "../../Component/Direction/Direction";
import Order from "../../Component/Order/Order";
function OrderPage() {
  return (
    <>
      <Header />
      <Direction directions="Đơn hàng" />
      <Order />
      <Footer />
    </>
  );
}

export default OrderPage;
