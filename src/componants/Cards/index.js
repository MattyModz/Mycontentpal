import { useState } from "react";
import { motion } from "framer-motion";
import Yearly from "./Yearly";
import Monthly from "./Monthly";
export default function Cards() {
  const [isOnCard, setIsOnCard] = useState(false);

  const toggleSwitch = () => setIsOnCard((prev) => !prev);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <section
      className="bg-body-dark  container 
      "
    >
      <div className="py-8 container">
        <h3 className="text-2xl text-white font-writing font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-[#FB8753] to-[#FB7877]">
          Can we scratch your content itch?
        </h3>
        <h3 className="text-6xl text-white font-inter font-bold text-center py-2 ">
          Content subscription
          <span className="text-orange-500">.</span>
        </h3>
      </div>
      <div className="w-full container px-8 pb-6 py-8">
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
        {isOnCard ? <Yearly /> : <Monthly />}
      </div>
    </section>
  );
}
