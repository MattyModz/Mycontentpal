import { motion } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { myContext } from "../../../Context/Context";
export default function Supporting() {
  const { isOn, setIsOn } = myContext();
  return (
    <motion.div
      initial="pageInitial"
      exit={{ opacity: 0 }}
      animate="pageAnimate"
      className=" py-11 flex justify-center font-bold text-white font-interr"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <p>
        Targeting{" "}
        <RoughNotation type="highlight" show={isOn} color="#FB8951">
          informational Keywords,
        </RoughNotation>{" "}
        , Supporting Content is well-researched, top-quality content that aids
        the success of your additional features by building authority and
        relevance.{" "}
      </p>
    </motion.div>
  );
}
