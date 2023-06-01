import React from "react";
import Container from "../../shared/container/Container";

const WhoAreWe = () => {
  return (
    <section className="bg-[#0c1839] text-white py-20">
      <Container>
        <div className="font-header text-center">
          <h4 className="text-neutral-400">Who we are</h4>
          <h1 className="my-12 font-bold text-teal-500 md:text-5xl text-3xl  md:w-[70%] mx-auto leading-none">
            Coinmatics is a cutting-edge copy trading platform that makes the
            process of gaining profit from crypto markets easy as pie
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default WhoAreWe;
