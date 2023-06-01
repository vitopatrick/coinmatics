import React from "react";
import Container from "../../../shared/container/Container";
import exchanges from "./exchanges";

const Exchange = () => {
  return (
    <section>
      <Container>
        <div className="font-header text-center space-y-3">
          <h4 className="text-neutral-300">Integration</h4>
          <h4 className="text-2xl md:text-4xl font-bold text-slate-800">
            Supported Exchanges
          </h4>
        </div>
        <div className="my-10 grid md:grid-cols-4 gap-8 md:gap-4 place-items-center">
          {exchanges.map((exchange) => (
            <div
              key={exchange.id}
              className="flex flex-col gap-4 shadow-md rounded h-[240px] w-[240px] p-4 items-center justify-center"
            >
              <div>
                <img src={exchange.img} alt={exchange.title} />
              </div>
              <p className="text-center">{exchange.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Exchange;
