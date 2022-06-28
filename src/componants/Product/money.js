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
      Every website needs solid SEO foundations and for that, you need to create
      high-quality, well researched content. We can happily take that burden off
      your hands.
      <br />
      <br />
    </motion.h1>
  );
}
