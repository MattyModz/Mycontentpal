import { motion } from "framer-motion";

export default function Supporting() {
  return (
    <motion.h1
      initial="pageInitial"
      exit={{ opacity: 0 }}
      animate="pageAnimate"
      className="  py-11 flex justify-center font-bold text-white font-interr"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      Targeting informational keywords, Supporting Content is well-researched,
      top-quality content that aids the success of your additional features by
      building authority and relevance.
    </motion.h1>
  );
}
