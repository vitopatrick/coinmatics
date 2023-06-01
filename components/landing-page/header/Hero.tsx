import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 place-items-center py-10 my-10">
      <div className="md:space-y-8 space-y-4 flex flex-col items-center md:items-start order-2 md:order-1">
        <h3 className="font-header text-2xl md:text-5xl text-center md:text-left md:leading-tight text-slate-900 font-bold">
          Successful Crypto Trading Performance on Autopilot
        </h3>
        <p className="text-neutral-400 mb-20 text-center md:text-left">
          Coinmatics copy trading service allows copying deals made by traders
          and trading bots, as well as receive signals from verified strategies.
        </p>
        <div>
          <Link
            href="/auth/sign-up"
            className="font-header px-4 py-4 bg-teal-400 rounded text-white"
          >
            Start Copy trading
          </Link>
        </div>
      </div>
      <div className="relative order-1 md:order-2">
        <img src="/img/hero.svg" alt="" className="absolute" />
        <img src="/img/hero_2.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
