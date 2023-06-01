import React from "react";
import Container from "../../../shared/container/Container";
import Tools from "./Tools";

const ToolsTrader = () => {
  return (
    <section className="bg-[#0c1839] text-white">
      <Container>
        <div>
          <div className="text-center font-header space-y-6">
            <h4 className="text-neutral-400 my-4">
              Are You a Profitable Crypto Trader?
            </h4>
            <h4 className="md:text-4xl text-2xl font-bold">
              Gain More From Your Trades
            </h4>
            <p className="font-saRegular md:w-[45%] mx-auto">
              Just submit your trading strategy, get subscribers, and earn
              additional profit from your trades without increasing risk or
              margin.
            </p>
            <div>
              <img src="/img/trader.svg" alt="" />
            </div>
          </div>
        </div>
        <Tools />
      </Container>
    </section>
  );
};

export default ToolsTrader;
