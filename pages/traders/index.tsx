import React from "react";
import Navbar from "../../components/landing-page/header/Navbar";
import Footer from "../../components/landing-page/footer/Footer";
import Container from "../../shared/container/Container";
import Traders from "../../components/traders/Traders";
import ChooseStrategy from "../../components/traders/ChooseStrategy";
import WhiteBox from "../../components/copy-trading/WhiteBox";

const TradersPage = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <Traders />
      <ChooseStrategy />
      <WhiteBox />
      <Footer />
    </>
  );
};

export default TradersPage;
