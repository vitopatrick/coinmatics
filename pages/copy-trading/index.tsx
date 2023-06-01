import React from "react";
import Navbar from "../../components/landing-page/header/Navbar";
import Footer from "../../components/landing-page/footer/Footer";
import Container from "../../shared/container/Container";
import CopyTrading from "../../components/copy-trading/CopyTrading";
import BlueBox from "../../components/copy-trading/BlueBox";
import WhiteBox from "../../components/copy-trading/WhiteBox";
import GrayBox from "../../components/copy-trading/GrayBox";

const CopyTradingPage = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <CopyTrading />
      <BlueBox />
      <WhiteBox />
      <BlueBox />
      <GrayBox />
      <Footer />
    </>
  );
};

export default CopyTradingPage;
