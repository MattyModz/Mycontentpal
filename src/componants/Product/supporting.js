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
      Every website needs solid needs supporting content. If you're only pushing
      commercial content, you're likely going to run into some issues. This
      service is best for content like guest posts, supporting articles, meta
      descriptions etc.
    </motion.h1>
  );
}
