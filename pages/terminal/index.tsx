import React from "react";
import Container from "../../shared/container/Container";
import Navbar from "../../components/landing-page/header/Navbar";
import Footer from "../../components/landing-page/footer/Footer";
import BlueBox from "../../components/copy-trading/BlueBox";
import Terminal from "../../components/terminal/Terminal";

const TerminalPage = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <Terminal />
      <BlueBox />
      <BlueBox />
      <Footer />
    </>
  );
};

export default TerminalPage;
