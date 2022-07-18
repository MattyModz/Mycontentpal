import { motion, AnimateSharedLayout } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import Surferdial from "./Assets/Surferdial";
import Textpanel from "./Assets/Textpanel";
import Image from "next/image";
export default function Sectionone() {
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView({});
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({});
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView({});
  // const { ref: myRef4, inView: myElementIsVisible4 } = useInView({});

  const spring = {
    type: "spring",
    stiffness: 66,
    damping: 11,
  };

  console.log(myElementIsVisible1, myElementIsVisible2);
  //  className={`flex justify-end sticky top-0    ${
  //                 myElementIsVisible1 ? "flex justify-start" : ""
  //               }`}
  return (
    <>
      {/* card container */}

      <div className="flex flex-col font-inter container py-20 px-8 text-white ">
        {/* end card container */}
        <div className=" sm:block hidden w-full container sticky top-40 h-screen">
          <div className="    sm:block hidden  h-full relative ">
            <div
              layout
              className={`flex justify-start border-4  absolute  w-full   ${
                myElementIsVisible2 ? " flex justify-end w-full " : ""
              }`}
            >
              {" "}
              <motion.img
                layout
                transition={spring}
                className="object-fill  w-1/2 sm:block hidden top-0 left-0 shadow-lg bg-blend-multiply rounded-2xl"
                src="BackPanel.svg"
              />
            </div>

            <div className="absolute border-4  w-full border-red-400  h-1/2  ">
              <div className="grid-cols-2 m:grid-cols-1 grid border-4 border-blue-400 h-full">
                <div className=" grid place-items-end h-full overflow-visible translate-x-12">
                  <motion.img
                    layout
                    transition={spring}
                    className={`object-fill  w-2/3  shadow-lg bg-blend-multiply rounded-2xl    overflow-visible ${
                      myElementIsVisible1
                        ? "opacity-100"
                        : myElementIsVisible2
                        ? "opacity-0"
                        : ""
                    }`}
                    src="Asset 119.svg"
                  />
                </div>

                <div className=" w-full flex items-end  h-full overflow-visible -translate-x-16">
                  <motion.img
                    layout
                    transition={spring}
                    className={`object-fill opacity-0 w-2/3  shadow-lg bg-blend-multiply rounded-2xl    overflow-visible ${
                      myElementIsVisible2
                        ? "opacity-100"
                        : myElementIsVisible3
                        ? "opacity-0"
                        : ""
                    }`}
                    src="Asset 117.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col   sm:flex-row  lg:h-screen lg:absolute container lg:mb-16 ">
          <div className="flex items-center lg:mb-8  lg:w-3/4 w-full  shadow-full "></div>
          <motion.div
            className="flex flex-col lg:py-24 mt-5 lg:mb-16 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16 h-screen "
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 1 },
            }}
          >
            <p className="lg:mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
              Prep.
            </p>
            <span ref={myRef1} />
            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
              Understand your content creation aim.
            </h3>
            <p className="mt-5 text-lg text-white text md:text-left font-interr">
              Our prepping team will follow your brief meticulously. They’ll
              follow our Prepping Guide to outline your article, so it looks
              attractive and simple for your readers.{" "}
              <span>
                {" "}
                They also use tools such as Text Razor and create the content
                structure on Surfer SEO, which brings the best keywords for your
                headline compared to competitor examples.
              </span>
            </p>
            <motion.img
              layout
              transition={spring}
              src="Asset 116.svg"
              className="lg:hidden md:hidden py-16"
            />
          </motion.div>
        </div>
        {/* SECTION TWO*/}

        <div className="flex flex-col lg:mb-8  lg:mt-72 sm:flex-row  h-screen ">
          <div className="flex items-center lg:mb-8 sm:order-last lg:w-3/4 w-full"></div>
          <motion.div
            className="flex flex-col lg:mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16 h-screen lg:py-48"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className=" text-sm lg:mb-10 font-semibold leading-none text-left text-orange-400 uppercase">
              Research.
            </p>
            <span ref={myRef2}></span>
            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
              A Great grasp of your niche
            </h3>
            <p className="mt-5 text-lg text-white text md:text-left  font-interr">
              Don’t worry if you have a tedious subject. Our writers won’t begin
              writing until they’ve researched your niche and become an expert
              themselves. This includes reading articles, watching YouTube
              videos, reading statements on social media and scanning through
              questions and answers on sites such as Quora.
            </p>
            <motion.img
              layout
              transition={spring}
              src="Asset 117.svg"
              className="lg:hidden md:hidden py-16"
            />
          </motion.div>
        </div>
        {/* SECTION THREE*/}

        <div className="flex flex-col lg:mb-8 animated fadeIn sm:flex-row  h-screen">
          <div className="flex items-center lg:mb-8  lg:w-3/4 w-full  "></div>
          <motion.div
            className="flex flex-col lg:py-24 mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
              Create.
            </p>
            <span ref={myRef3}></span>
            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
              Pen put to paper.
            </h3>
            <p className="mt-5 mb-5 text-lg text-white text md:text-left font-interr">
              Then our super squad of writers put their powers to work. You will
              always have an introduction, conclusion and FAQs unless
              specifically asked not to have them. Our writers are professionals
              at writing in any tone of voice,{" "}
              <span>
                whether to make people laugh or inform them of the importance of
                Sourdough
              </span>
              Bread.
            </p>
            <motion.img
              layout
              transition={spring}
              src="Asset 119.svg"
              className="lg:hidden md:hidden py-16"
            />
          </motion.div>
        </div>
        {/* SECTION FOUR*/}
      </div>
    </>
  );
}
