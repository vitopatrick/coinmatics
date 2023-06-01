import React from "react";
import Footer from "../../components/landing-page/footer/Footer";
import Container from "../../shared/container/Container";
import Navbar from "../../components/landing-page/header/Navbar";
import WhoAreWe from "../../components/about-us/WhoAreWe";
import WhiteBox from "../../components/copy-trading/WhiteBox";
import GrayBox from "../../components/copy-trading/GrayBox";
import BlueBox from "../../components/copy-trading/BlueBox";

const AboutUsPage = () => {
  return (
    <section>
      <Container>
        <Navbar />
      </Container>
      <WhoAreWe />
      <WhiteBox />
      <BlueBox />
      <GrayBox />
      <Footer />
    </section>
  );
};

export default AboutUsPage;
