import React from "react";
import Container from "../../../shared/container/Container";
import Link from "next/link";

const simpleFacts = [
  {
    id: 1,
    about: "Connect your cryptocurrency exchange account",
    img: "/img/asset_1.svg",
  },
  {
    id: 2,
    about: "Choose the best trading strategies to follow",
    img: "/img/asset_2.svg",
  },
  {
    id: 3,
    about: "Track your gains in a convenient way",
    img: "/img/asset_3.svg",
  },
];

const Simple = () => {
  return (
    <section>
      <Container>
        {/* flex container */}
        <div className=" flex md:flex-row flex-col py-8 ">
          {/* wrt up container */}
          <div className="text-center md:text-left">
            <h3 className="font-header text-neutral-300">
              How to Start Copy Trading?
            </h3>
            <h3 className="font-header md:text-4xl text-2xl font-bold text-slate-800 my-4">
              As Simple as ABC
            </h3>
            <p className="md:w-[70%] w-full px-2 py-6">
              It’s never been easier to trade like a real professional trader
              get started in just a few steps.
            </p>
            <div className="my-5">
              <Link
                href="/auth/sign-up"
                className="font-header font-semibold text-white rounded bg-teal-400 p-4"
              >
                start copy trading
              </Link>
            </div>
          </div>
          {/* Diff icon container */}
          <IconSimple />
        </div>
      </Container>
    </section>
  );
};

function IconSimple() {
  return (
    <div className="flex flex-col md:flex-row mt-10 md:mt-0 justify-between items-center w-[70%] mx-auto md:w-full gap-8">
      {simpleFacts.map((fact) => (
        <div
          key={fact.id}
          className={
            fact.id % 2 == 0
              ? "flex flex-row-reverse md:flex-col items-center justify-center"
              : "flex flex-row md:flex-col items-center justify-center"
          }
        >
          <div>
            <img src={fact.img} alt="" />
          </div>
          <div className="flex items-center gap-2 mt-8">
            <h4 className="font-bold font-header text-4xl text-slate-800">
              {fact.id}
            </h4>
            <p className="text-neutral-400">{fact.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Simple;
