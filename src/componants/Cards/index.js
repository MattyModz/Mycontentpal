import { useState } from "react";
import { motion } from "framer-motion";
export default function Cards() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn((prev) => !prev);

  //    {
  //      isOn ? setDataValue(1) : setDataValue(0);
  //    }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <section className="bg-body-dark">
      <div className="w-full container px-8">
        <div>
          <div className="flex  justify-start py-4">
            <p className="p-4 -rotate-6  text-white font-writing">
              Monthly billing
            </p>
            <div
              className="switch"
              data-isOn={isOn}
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
        <div className="lg:flex space-between relative  bg-white rounded-xl">
          <div className="lg:border-r-2  py-4">
            <div className="p-8 ">
              <h1 className="font-bold text-5xl">Starter</h1>
              <p>description of what is going into these cards</p>
              <strong className="font-bold text-5xl">$1k</strong>
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
          <div className="py-4">
            <div className="p-8">
              <h1 className="font-bold text-5xl">Basic</h1>
              <p>description of what is going into these cards</p>
              <strong className="font-bold text-5xl">$2k</strong>
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
        </div>
      </div>
    </section>
  );
}
