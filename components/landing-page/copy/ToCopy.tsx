import React from "react";
import Container from "../../../shared/container/Container";
import Link from "next/link";

// const toTrade = [
//     {id:1,}
// ]

const ToCopy = () => {
  return (
    <section className="bg-[#0c1839]">
      <Container>
        <div className="text-center py-4 text-white">
          <h4 className="my-4 font-header font-bold text-2xl md:text-4xl">
            Strategies to Copy
          </h4>
          <p className="text-neutral-400">
            Choose from a wide range of unique strategies submitted by carefully
            selected crypto traders with verified track records.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/auth/sign-up"
            className="border border-teal-400 rounded px-4 py-2 font-bold text-teal-400 font-header"
          >
            Get Started
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ToCopy;
