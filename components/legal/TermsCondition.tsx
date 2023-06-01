import React from "react";
import Container from "../../shared/container/Container";
import conditions from "./conditions";

const TermsCondition = () => {
  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h4 className="font-header text-2xl md:text-3xl font-bold text-slate-800">
            Terms and Conditions
          </h4>
          {conditions.map((condition) => (
            <div className="my-6" key={condition.id}>
              <h4 className="font-header">
                {condition.id}.{condition.title}
              </h4>
              <div className="my-5 space-y-4">
                <div>{condition.p1}</div>
                <div>{condition.p2}</div>
                <div>{condition.p3}</div>
                <div>{condition.p4}</div>
                <div>{condition.p5}</div>
                <div>{condition.p6}</div>
                <div>{condition.p7}</div>
                <div>{condition.p8}</div>
                <div>{condition.p9}</div>
                <div>{condition.p10}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TermsCondition;
