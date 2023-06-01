import React from "react";
import Container from "../../../shared/container/Container";

const platformPerformance = [
  {
    id: 1,
    title: "<2 sec",
    subtitle: "Lightning Speed",
    about: "Time needed to replicate a trade",
  },
  {
    id: 2,
    title: "98.5%",
    subtitle: "Solid Execution",
    about: "Success rate of copying trades",
  },
  {
    id: 3,
    title: "99.6%",
    subtitle: "Sustainability",
    about: "Service uptime",
  },
];

const PlatformPerformance = () => {
  return (
    <section className="my-12">
      <Container>
        <div className="text-center font-header text-neutral-400">
          Platform Performance
        </div>
        <div className="grid my-8 md:grid-cols-3 gap-6 place-items-center">
          {platformPerformance.map((list) => (
            <div className="text-center space-y-4" key={list.id}>
              <h4 className="font-header  text-teal-500 font-bold text-5xl md:text-5xl">
                {list.title}
              </h4>
              <h4 className="text-center font-header text-slate-800 font-bold">
                {list.subtitle}
              </h4>
              <div className="text-center">{list.about}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PlatformPerformance;
