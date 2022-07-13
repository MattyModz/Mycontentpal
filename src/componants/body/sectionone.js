import { motion, AnimateSharedLayout } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import Surferdial from "./Assets/Surferdial";
import Textpanel from "./Assets/Textpanel";
export default function Sectionone() {
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView({});
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({});
  // const { ref: myRef3, inView: myElementIsVisible3 } = useInView({});
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

      <div className="flex flex-col font-inter container py-20  px-8  ">
        {/* end card container */}
        <div className="  sticky top-40  w-full container h-1/2 sm:block hidden ">
          <div
            layout
            className={`flex justify-start   w-full   ${
              myElementIsVisible1 || myElementIsVisible2
                ? " flex justify-end w-full "
                : ""
            }`}
          >
            {" "}
            <motion.img
              layout
              transition={spring}
              className=" object-fill w-1/2 sm:block hidden "
              src="BackPanel.svg"
            />
          </div>
        </div>

        <div className="flex flex-col   sm:flex-row  h-screen lg:absolute container lg:mb-16 ">
          <div className="flex items-center mb-8  lg:w-3/4 w-full  shadow-full "></div>
          <motion.div
            className="flex flex-col lg:py-24 mt-5 mb-16 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16 h-screen "
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 1 },
            }}
          >
            <p className="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
              Prep.
            </p>
            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
              Understand your content creation aim.
            </h3>
            <p className="mt-5 text-lg text-gray-700 text md:text-left font-interr">
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
          </motion.div>
        </div>
        {/* SECTION TWO*/}

        <div className="flex flex-col mb-8  mt-72 sm:flex-row  h-screen ">
          <div className="flex items-center mb-8 sm:order-last lg:w-3/4 w-full"></div>
          <motion.div
            className="flex flex-col s mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16 h-screen py-48"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
              Research.
            </p>
            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
              A Great grasp of your niche
            </h3>
            <p className="mt-5 text-lg text-gray-700 text md:text-left  font-interr">
              Don’t worry if you have a tedious subject. Our writers won’t begin
              writing until they’ve researched your niche and become an expert
              themselves. This includes reading articles, watching YouTube
              videos, reading statements on social media and scanning through
              questions and answers on sites such as Quora.
              <span ref={myRef1}></span>
            </p>
          </motion.div>
        </div>
        {/* SECTION THREE*/}

        <div className="flex flex-col mb-8 animated fadeIn sm:flex-row  h-screen">
          <div className="flex items-center mb-8  lg:w-3/4 w-full  "></div>
          <motion.div
            className="flex flex-col py-24 mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className="mb-2 text-sm font-semibold leading-none text-left text-orange-400 uppercase">
              Create.
            </p>
            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
              Pen put to paper.
            </h3>
            <p className="mt-5 text-lg text-gray-700 text md:text-left font-interr">
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
          </motion.div>
        </div>
        {/* SECTION FOUR*/}

        <div className="flex flex-col  animated fadeIn sm:flex-row ">
          <div className="flex items-center  lg:w-3/4 w-full sm:order-last "></div>
          <motion.div
            className="flex flex-col py-24 mt-5   md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className=" text-sm font-semibold leading-none text-left text-orange-400 uppercase">
              Edit.
            </p>
            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
              Ensuring our writings hit the mark.
            </h3>
            <p className="mt-5 text-lg text-gray-700 text md:text-left  font-interr">
              The writers will then edit their work, double-checking that the
              spelling is in the correct country, the Surfer score is
              sky-scraping, the relevant keywords are used, and the general
              spelling and grammar are high quality.
              <span ref={myRef2}> </span>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
