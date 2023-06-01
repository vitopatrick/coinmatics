import React, { useState } from "react";
import Container from "../../../shared/container/Container";
import faqs from "./faqs";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  // show the body state
  const [showBody, setShowBody] = useState(0);

  function changeBodyState(index: number) {
    if (showBody === index) {
      return setShowBody(0);
    }
    setShowBody(index);
  }

  return (
    <AnimatePresence>
      <section className="py-10">
        <Container>
          <div className="text-center font-header">
            <h4 className="text-neutral-300 py-3">
              information about platform
            </h4>
            <h4 className="md:text-4xl leading-relaxed text-2xl md:w-[40%] mx-auto font-bold text-slate-800">
              Frequently Asked Questions
            </h4>
          </div>
          {/* FAQ body */}
          <div className="md:w-[50%] mx-auto my-10 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.title}
                className="border-neutral-300 border-b-[1px] py-3"
              >
                <div onClick={() => changeBodyState(index)}>
                  <h4 className="text-slate-700 font-saMedium hover:text-textColor cursor-pointer transition-all ease-in">
                    {faq.title}
                  </h4>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  key={showBody}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className={showBody === index ? "block relative" : "hidden"}
                >
                  <p className="text-sm leading-relaxed py-3 font-saLight">
                    {faq.name}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center font-header">
            <button className=" bg-textColor p-4 rounded text-white hover:bg-teal-400 transition-all ease">
              Read our knowledge base
            </button>
          </div>
        </Container>
      </section>
    </AnimatePresence>
  );
};

export default Faq;
