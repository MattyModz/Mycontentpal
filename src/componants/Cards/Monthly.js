import { motion } from "framer-motion";

export default function Monthly() {
  return (
    <motion.div
      className="lg:flex space-between relative  bg-white rounded-xl"
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <div className="lg:border-r-2  py-4">
        <div className="p-8 ">
          <h1 className="font-bold text-5xl">10K words</h1>
          <p>10,000 of our finest words per month</p>
          <p className="text-gray-500">approximately x number of posts</p>
          <br />

          <strong className="font-bold text-5xl">$1k</strong>
          <p>Per Month / some description </p>
          <a
            href="#_"
            class="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-[#169CF9] border border-transparent rounded-full shadow lg:py-4 hover:bg-[#169CF9] focus:outline-none focus:border-[#169CF9] focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
          >
            Get Started
          </a>
          <p className="text-gray-300">Sign up at our portal </p>
        </div>
      </div>
      {/* end of card one */}
      <div className="py-4">
        <div className="p-8 bg-gray-50 sm:border-t sm:rounded-xl">
          <h1 className="font-bold text-5xl ">20K words</h1>
          <p>20,000 of our finest words per month</p>
          <p className="text-gray-500">approximately x number of posts</p>
          <br />

          <strong className="font-bold text-5xl">$2k</strong>
          <p>Per Month / some description </p>
          <a
            href="#_"
            class="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-[#169CF9] border border-transparent rounded-full shadow lg:py-4 hover:bg-[#169CF9] focus:outline-none focus:border-[#169CF9] focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
          >
            Get Started
          </a>
          <p className="text-gray-300">Sign up at our portal </p>
        </div>
      </div>
      {/* end of card two */}
      <div className=" bg-orange-100 py-4 -mt-10 rounded-t-xl ">
        <div className="p-8 -mt-4 ">
          <a
            href="#_"
            class="flex  items-center self-start justify-center  text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-[#169CF9] border border-transparent rounded-full shadow p-2 "
          >
            Most Popular
          </a>
          <h1 className="font-bold text-5xl ">Pro</h1>
          <p>description of what is going into these cards</p>
          <strong className="font-bold text-5xl">$5k</strong>
          <p>Per Month / some description </p>
          <a
            href="#_"
            class="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-[#169CF9] border border-transparent rounded-full shadow lg:py-4 hover:bg-[#169CF9] focus:outline-none focus:border-[#169CF9] focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
          >
            Get Started
          </a>
          <p>Sign up at our portal </p>
        </div>
      </div>
      {/* end of card Three */}
      <div className="py-4 ">
        <div className="p-8">
          <h1 className="font-bold text-5xl">Premium</h1>
          <p>description of what is going into these cards</p>
          <strong className="font-bold text-5xl ">$9k </strong>
          <p>Per Month / some description </p>
          <a
            href="#_"
            class="flex items-center self-start justify-center px-5 py- mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-[#169CF9] border border-transparent rounded-full shadow lg:py-4 hover:bg-[#169CF9] focus:outline-none focus:border-[#169CF9] focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10"
          >
            Get Started
          </a>
          <p>Sign up at our portal </p>
        </div>
      </div>
    </motion.div>
  );
}
