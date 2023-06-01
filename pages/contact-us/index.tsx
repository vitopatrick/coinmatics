import React from "react";
import Container from "../../shared/container/Container";
import Navbar from "../../components/landing-page/header/Navbar";
import Footer from "../../components/landing-page/footer/Footer";
import WhiteBox from "../../components/copy-trading/WhiteBox";
import ContactUs from "../../components/contact-us/ContactUs";

const ContactUsPage = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <ContactUs />
      <WhiteBox />
      <Footer />
    </>
  );
};

export default ContactUsPage;
