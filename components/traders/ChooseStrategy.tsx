import React from "react";
import Container from "../../shared/container/Container";

const strategyType = [
  {
    id: 1,
    name: "Public",
    p1: "Suitable for traders who want to increase their audience by attracting the users from our platform.",
    p2: "This is the most common strategy type on Coinmatics. The strategy will be displayed on the list of all strategies according to their rating and progress, will be visible to all users and available for subscription without restrictions.",
    p3: "This type is available to all traders by default from the interface.",
  },
  {
    id: 2,
    name: "Hidden",
    p1: "For traders who don’t want to draw attention to their strategy.",
    p2: "Hidden strategies are not displayed on the list of strategies to all users. They are available by a direct link only.",
    p3: "Knowing the audience demand, we are also preparing a white label offer for traders, which will allow traders to spread their own copy trading infrastructure without Coinmatics reference.",
  },
  {
    id: 3,
    name: "Trusted",
    p1: "Trusted type is suitable for traders who want to manage copy trading for their audience. Traders need to have access to the investors’ API keys or to their funds.",
    p2: "In this case, a trader creates a strategy, connects API keys through their account to the strategy and oversees copy trading. Creation of a trusted strategy is paid according to the number of API keys to be connected.",
  },
];

const ChooseStrategy = () => {
  return (
    <section className="bg-[#0c1839] text-white py-12">
      <Container>
        <div>
          <h4 className="text-3xl font-header py-4 font-bold">
            Choose a Strategy Access Type
          </h4>
        </div>
        <div className="grid md:grid-cols-3 mt-8 gap-4 place-items-center place-content-center">
          {strategyType.map((type) => (
            <div key={type.id} className="space-y-4">
              <h4 className="font-header font-bold">{type.name}</h4>
              <p className="text-sm text-neutral-300">{type.p1}</p>
              <p className="text-sm text-neutral-300">{type.p2}</p>
              <p className="text-sm text-neutral-300">{type.p3}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ChooseStrategy;
