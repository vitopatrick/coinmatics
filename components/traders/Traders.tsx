import React from "react";
import Container from "../../shared/container/Container";

const Traders = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center text-center py-10 my-10 space-y-3">
          <h4 className="font-header text-slate-800 text-3xl md:text-4xl font-bold">
            Coinmatics for Traders
          </h4>
          <p className="w-[80vh] mx-auto text-neutral-400">
            Our copy trading platform is perfect for traders who want to make
            additional profits from their crypto trading expertise. We have
            offers for traders that already have a strong community and also for
            those who would like to extend it.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Traders;
