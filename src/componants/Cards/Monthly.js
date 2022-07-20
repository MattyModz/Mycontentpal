import { motion } from "framer-motion";

export default function Monthly() {
  return (
    <motion.div
      className="lg:flex space-between relative  bg-white rounded-xl"
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 2, x: 0, transition: { duration: 0.7 } }}
      viewport={{ once: true }}
    >
      <div className="lg:border-r-2  py-4">
        <div className="p-8 ">
          <h1 className="font-bold text-5xl">Starter</h1>
          <p>description of what is going into these cards</p>
          <strong className="font-bold text-5xl">$1k</strong>
          <p>Billed per month </p>
          <a
            href="#_"
            class="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-orange-400 border border-transparent rounded-full shadow lg:py-4 hover:bg-orange-400 focus:outline-none focus:border-orange-400 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
          >
            Get Started
          </a>
          <p className="py-2 text-orange-400 hover:text-orange-500 cursor-pointer">
            Sign up at our portal{" "}
          </p>
        </div>
      </div>
      <div className="py-4">
        <div className="p-8">
          <h1 className="font-bold text-5xl">Basic</h1>
          <p>description of what is going into these cards</p>
          <strong className="font-bold text-5xl">$2k</strong>
          <p>Billed per month </p>
          <a
            href="#_"
            class="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-orange-400 border border-transparent rounded-full shadow lg:py-4 hover:bg-orange-400 focus:outline-none focus:border-orange-400 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
          >
            Get Started
          </a>
          <p className="py-2 text-orange-400 hover:text-orange-500 cursor-pointer">
            Sign up at our portal{" "}
          </p>
        </div>
      </div>
      <div className=" bg-gray-50 py-4 -mt-10 rounded-t-xl ">
        <div className="p-8 -mt-4 ">
          <a
            href="#_"
            class="flex  items-center self-start justify-center  text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-gradient-to-br from-[#FB8753] to-[#FB7877] border border-transparent rounded-full shadow p-2 "
          >
            Most Popular
          </a>
          <h1 className="font-bold text-5xl ">Pro</h1>
          <p>description of what is going into these cards</p>
          <strong className="font-bold text-5xl">$5k</strong>
          <p>Billed per month </p>
          <a
            href="#_"
            class="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-orange-400 border border-transparent rounded-full shadow lg:py-4 hover:bg-orange-400 focus:outline-none focus:border-orange-400 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
          >
            Get Started
          </a>
          <p className="py-2 text-orange-400 hover:text-orange-500 cursor-pointer">
            Sign up at our portal{" "}
          </p>
        </div>
      </div>
      <div className="py-4 ">
        <div className="p-8">
          <h1 className="font-bold text-5xl">Premium</h1>
          <p>description of what is going into these cards</p>
          <strong className="font-bold text-5xl ">$9k </strong>
          <p>Billed per month </p>
          <a
            href="#_"
            class="flex items-center self-start justify-center px-5 py- mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-orange-400 border border-transparent rounded-full shadow lg:py-4 hover:bg-orange-400 focus:outline-none focus:border-orange-400 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
          >
            Get Started
          </a>
          <p className="py-2 text-orange-400 hover:text-orange-500 cursor-pointer">
            Sign up at our portal{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
