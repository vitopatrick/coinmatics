import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const toolsQuestion = [
  {
    question: "Ticker Alerts",
    answer:
      "Set up ticker alerts with custom parameters to receive immediate notifications when it will be triggered. All notifications will be sent to your Telegram account.",
    img: "/img/ticker.png",
  },
  {
    question: "Crypto Arbitrage",
    answer:
      "Get information for arbitrage trading from various exchanges to find deals with the highest spread. Both manual mode and Telegram signals about the most profitable deals are available.",
    img: "/img/crypto.png",
  },
  {
    question: "Portfolio",
    answer:
      "Track your transaction history and enable daily reports on the state of your portfolio from multiple cryptocurrency exchanges and wallets.",
    img: "/img/portfolio.png",
  },
  {
    question: "Analytics",
    answer:
      "Look at the crypto market from different angles using our analytical dashboards: Twitter Analytics, Fear and Greed Index, BTC Social Volume, and more.",
    img: "/img/numbers.png",
  },
];

const Tools = () => {
  return (
    <div className="my-8">
      <h4 className="font-header text-2xl text-center">
        Our Free Market Research Tools
      </h4>
      <ToolsQuestions />
    </div>
  );
};

function ToolsQuestions() {
  const [active, setActive] = useState(0);

  // change state
  function changeBodyState(index: number) {
    setActive(index);
  }

  return (
    <AnimatePresence>
      <div className="my-10 flex gap-4">
        <div className="flex-1">
          {toolsQuestion.map((question, index) => (
            <div className="my-4">
              <div
                key={index}
                onClick={() => changeBodyState(index)}
                className="font-header md:w-[50%] hover:text-textColor cursor-pointer transition-all ease"
              >
                {question.question}
              </div>
              <div
                className={
                  active === index
                    ? "text-neutral-400 my-4 hidden md:block"
                    : "hidden"
                }
              >
                {question.answer}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                key={active}
                className={active === index ? "my-4 block md:hidden" : "hidden"}
              >
                <img src={toolsQuestion[active].img} alt="" />
              </motion.div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          key={active}
          className="md:block hidden flex-1"
        >
          <img src={toolsQuestion[active].img} alt="" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Tools;
