import React from "react";
import Container from "../../../shared/container/Container";

const coreProducts = [
  {
    id: 1,
    title: "Passive Income on Steroids",
    body: "Enjoy the profits of active crypto trading while slacking off",
    icon: "/img/a1.svg",
  },
  {
    id: 2,
    title: "Diversification",
    body: "Allocate your funds across traders with different trading strategies",
    icon: "/img/a2.svg",
  },
  {
    id: 3,
    title: "Risk Management",
    body: "Customize your risk level for each strategy you follow",
    icon: "/img/a3.svg",
  },
  {
    id: 4,
    title: "Total Security",
    body: "The platform works without direct access to your funds",
    icon: "/img/a4.svg",
  },
  {
    id: 5,
    title: "Synced Portfolio",
    body: "Align crypto assets with the trader’s account in one click",
    icon: "/img/a5.svg",
  },
  {
    id: 6,
    title: "Skin in The Game",
    body: "Traders risk their own funds when providing trades for copying",
    icon: "/img/a6.svg",
  },
];

const CoreProducts = () => {
  return (
    <section>
      <Container>
        <div className="text-center md:w-[60%] mx-auto space-y-4">
          <h4 className="font-header font-bold text-neutral-400">
            Copy Trading for Cryptocurrency
          </h4>
          <h4 className="font-header font-bold md:text-4xl text-2xl text-slate-800">
            Our Core Product for Investors
          </h4>
          <p className="text-neutral-400">
            A unique blend of opportunities to generate capital gains and get
            the best of both worlds: cryptocurrencies and regular investments.
          </p>
        </div>
        <div className="grid md:grid-cols-3 place-items-center gap-12 my-12">
          {coreProducts.map((coreProduct) => (
            <div
              key={coreProduct.id}
              className="flex flex-col md:flex-row items-center gap-3"
            >
              <div>
                <img src={coreProduct.icon} alt="" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-header text-slate-800">
                  {coreProduct.title}
                </h4>
                <p className="text-neutral-400 my-1">{coreProduct.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreProducts;
