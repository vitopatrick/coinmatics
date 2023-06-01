import React from "react";
import Container from "../../shared/container/Container";
import Navbar from "../../components/landing-page/header/Navbar";
import Footer from "../../components/landing-page/footer/Footer";
import Legal from "../../components/legal/Legal";
import TermsCondition from "../../components/legal/TermsCondition";

const LegalDocumentsPage = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <Legal />
      <TermsCondition />
      <Footer />
    </>
  );
};

export default LegalDocumentsPage;
