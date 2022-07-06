import { motion } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { myContext } from "../../../Context/Context";

export default function Money() {
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
        <RoughNotation type="highlight" show={!isOn} color="#FB8951">
          buying Keywords,
        </RoughNotation>{" "}
        Money Content is high-quality, well-researched, persuasive content which
        will convince your readers to buy what you’re trying to sell at the
        price you’re selling it.
        <br />
        <br />
      </p>
    </motion.div>
  );
}
