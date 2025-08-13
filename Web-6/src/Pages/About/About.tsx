import Header from "../../Component/Header/Header";
import Direction from "../../Component/Direction/Direction";
import Brand from "../../Component/Brand/Brand";
import Discount from "../../Component/Discount/Discount";
import Role from "../../Component/Role/Role";
import Footer from "../../Component/Footer/Footer";
import AboutBanner from "../../Component/AboutBanner/AboutBanner";
import AboutSystem from "../../Component/AboutSystem/AboutSystem";

function About() {
  return (
    <>
      <Header />
      <Direction directions="Giới thiệu" />
      <AboutBanner />
      <AboutSystem />
      <Brand />
      <Discount />
      <Role />
      <Footer />
    </>
  );
}

export default About;
