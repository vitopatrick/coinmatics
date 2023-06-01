import React from "react";
import Container from "../../../shared/container/Container";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </header>
  );
};

export default Header;
