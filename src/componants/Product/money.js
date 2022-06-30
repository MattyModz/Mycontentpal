import { motion } from "framer-motion";

export default function Money() {
  return (
    <motion.h1
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
      Targeting buying keywords, Money Content is high-quality, well-researched,
      persuasive content which will convince your readers to buy what you’re
      trying to sell at the price you’re selling it.
      <br />
      <br />
    </motion.h1>
  );
}
