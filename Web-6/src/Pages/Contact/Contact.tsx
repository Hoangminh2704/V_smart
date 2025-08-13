import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Direction from "../../Component/Direction/Direction";
import ContactComponent from "../../Component/Contact/Contact";
function Contact() {
  return (
    <>
      <Header />
      <Direction directions="Liên hệ" />
      <ContactComponent />
      <Footer />
    </>
  );
}

export default Contact;
