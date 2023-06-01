import React from "react";
import Container from "../../shared/container/Container";

const CopyTrading = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center text-align-center space-y-5 py-10 my-10">
          <h4 className="text-3xl md:text-5xl font-header font-bold text-slate-800">
            Copy Trading
          </h4>
          <p className="w-[70%] mx-auto text-center text-neutral-400">
            Replicate the performance of crypto traders via our copy trading
            service. Profitable trader strategies will be automatically executed
            on your exchange account.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CopyTrading;
