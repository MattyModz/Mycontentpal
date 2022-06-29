import { useState } from "react";
import { motion } from "framer-motion";
import Yearly from "./Yearly";
import Monthly from "./Monthly";
export default function Cards() {
  // const Data = [
  //   [
  //     {
  //       description: <Monthly />,
  //       title: "Money",
  //     },
  //   ],
  //   [
  //     {
  //       description: <Yearly />,
  //       title: "Supporting",
  //     },
  //   ],
  // ];
  // How can this be done without passing into context?

  const [isOnCard, setIsOnCard] = useState(false);

  const toggleSwitch = () => setIsOnCard((prev) => !prev);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <section className="bg-body-dark">
      <h2 className="text-white font-inter text-4xl">Content Subscription</h2>
      <div className="w-full container px-8">
        <div>
          <div className="flex  justify-start py-4">
            <p className="p-4 -rotate-6  text-white font-writing">
              Monthly billing
            </p>
            <div
              className="switch"
              data-isOn={isOnCard}
              onClick={() => {
                toggleSwitch();
              }}
            >
              <motion.div className="handlecards" layout transition={spring} />
            </div>
            <p className="p-4 rotate-6 text-white font-writing ">
              yearly billing
            </p>
          </div>
        </div>
        {isOnCard ? <Monthly /> : <Yearly />}
      </div>
    </section>
  );
}
