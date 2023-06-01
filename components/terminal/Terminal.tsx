import React from "react";
import Container from "../../shared/container/Container";
import Link from "next/link";

const Terminal = () => {
  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-col items-center justify-center py-12">
          <h4 className="md:text-5xl text-2xl font-header font-bold text-slate-800">
            Smart Terminal
          </h4>
          <p className="my-5 text-neutral-400">
            Trade on different exchanges easily from a single Coinmatics
            interface
          </p>
          <div>
            <Link
              href="/auth/sign-up"
              className="bg-teal-400 px-4 py-3 rounded font-header text-xl text-white"
            >
              Enroll on beta testing
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Terminal;
