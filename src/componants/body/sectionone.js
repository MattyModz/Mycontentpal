import { motion, AnimateSharedLayout } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

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

      <div className="flex flex-col font-inter  container py-20 p-8  text-black   ">
        {/* end card container */}
        <div className="lg:block hidden w-full container sticky top-40 h-screen ">
          <div className="    sm:block hidden  h-full relative ">
            {/* Back panel */}
            <div
              layout
              className={`flex abs justify-start   absolute  w-full border-4 border-red-400    ${
                myElementIsVisible2 ? " flex justify-end w-full " : ""
              }`}
            >
              {" "}
              <motion.img
                layout
                transition={spring}
                className="object-fill border-4 rotate-x-10 w-1/2 sm:block hidden top-0 left-0 shadow-lg bg-blend-multiply rounded-2xl"
                src="BackPanel.svg"
              />
            </div>

            {/* Assets */}
            <div
              layout
              className={` border-4 border-yellow-300   relative h-3/4 w-full   ${
                myElementIsVisible2 ? " flex justify-end w-full " : ""
              }`}
            >
              {" "}
              <motion.img
                layout
                transition={spring}
                className={`object-fill    w-1/4   sm:block   rounded-2xl   ${
                  myElementIsVisible1 ? "opacity-100" : "opacity-0"
                }`}
                src="Asset 116.svg"
              />
              <motion.img
                layout
                transition={spring}
                className={`object-fill absolute   w-1/4  sm:block   rounded-2xl   ${
                  !myElementIsVisible2 ? "opacity-0" : "opacity-100"
                }`}
                src="Asset 119.svg"
              />
              <motion.img
                layout
                transition={spring}
                className={`object-fill absolute   w-1/4  sm:block   rounded-2xl   ${
                  !myElementIsVisible3 ? "opacity-0" : "opacity-100"
                }`}
                src="Asset 117.svg"
              />
            </div>
          </div>
        </div>
        {/* End assets -  */}

        <div className="md:flex-cols-1 lg:flex   sm:flex-row    lg:h-screen lg:absolute container lg:mb-8  ">
          <div className="flex items-center lg:mb-8   w-full  shadow-full "></div>
          <motion.div
            className="flex flex-col lg:py-24 mt-5  lg:mb-16 md:mt-0  lg:w-3/4 sm:pr-16 h-screen "
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className=" text-sm font-semibold leading-none text-left text-orange-400 uppercase">
              Prep.
            </p>

            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl py-8  ">
              Understand your content creation aim.
            </h3>
            <span ref={myRef1} />
            <p className="mt-5 text-lg  text md:text-left font-interr py-8">
              Our prepping team will follow your brief meticulously. They’ll
              follow our Prepping Guide to outline your article, so it looks
              attractive and simple for your readers. They also use tools such
              as Text Razor and create the content structure on Surfer SEO,
              which brings the best keywords for your headline compared to
              competitor examples.
            </p>
            <div className="  relative w-full lg:hidden py-8 mt-8  ">
              <motion.img
                layout
                transition={spring}
                className="object-fill absolute    top-0 left-0 shadow-lg bg-blend-multiply rounded-2xl"
                src="BackPanel.svg"
              />
              <motion.img
                layout
                transition={spring}
                src="Asset 116.svg "
                className="lg:hidden absolute   py-8  "
              />
            </div>
          </motion.div>
        </div>

        {/* SECTION TWO*/}

        <div className="md:flex-cols-1 lg:flex   sm:flex-row    lg:h-screen lg:absolute container lg:mb-8  ">
          <div className="flex items-center lg:mb-8   w-full  shadow-full "></div>
          <motion.div
            className="flex flex-col lg:py-24 mt-5  lg:mb-16 md:mt-0  lg:w-3/4 sm:pr-16 h-screen "
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className=" text-sm font-semibold leading-none text-left text-orange-400 uppercase">
              Prep.
            </p>

            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl py-8  ">
              Understand your content creation aim.
            </h3>
            <span ref={myRef2} />
            <p className="mt-5 text-lg  text md:text-left font-interr py-8">
              Our prepping team will follow your brief meticulously. They’ll
              follow our Prepping Guide to outline your article, so it looks
              attractive and simple for your readers. They also use tools such
              as Text Razor and create the content structure on Surfer SEO,
              which brings the best keywords for your headline compared to
              competitor examples.
            </p>
            <div className="  relative w-full lg:hidden py-8 mt-8  ">
              <motion.img
                layout
                transition={spring}
                className="object-fill absolute    top-0 left-0 shadow-lg bg-blend-multiply rounded-2xl"
                src="BackPanel.svg"
              />
              <motion.img
                layout
                transition={spring}
                src="Asset 117.svg "
                className="lg:hidden absolute   py-8  "
              />
            </div>
          </motion.div>
        </div>

        {/* SECTION THREE*/}

        <div className="md:flex-cols-1 lg:flex   sm:flex-row    lg:h-screen lg:absolute container lg:mb-8  ">
          <div className="flex items-center lg:mb-8   w-full  shadow-full "></div>
          <motion.div
            className="flex flex-col lg:py-24 mt-5  lg:mb-16 md:mt-0  lg:w-3/4 sm:pr-16 h-screen "
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 2 },
            }}
          >
            <p className=" text-sm font-semibold leading-none text-left text-orange-400 uppercase">
              Prep.
            </p>

            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl py-8  ">
              Understand your content creation aim.
            </h3>
            <span ref={myRef3} />
            <p className="mt-5 text-lg  text md:text-left font-interr py-8">
              Our prepping team will follow your brief meticulously. They’ll
              follow our Prepping Guide to outline your article, so it looks
              attractive and simple for your readers. They also use tools such
              as Text Razor and create the content structure on Surfer SEO,
              which brings the best keywords for your headline compared to
              competitor examples.
            </p>
            <div className="  relative w-full lg:hidden py-8 mt-8  ">
              <motion.img
                layout
                transition={spring}
                className="object-fill absolute    top-0 left-0 shadow-lg bg-blend-multiply rounded-2xl"
                src="BackPanel.svg"
              />
              <motion.img
                layout
                transition={spring}
                src="Asset 119.svg "
                className="lg:hidden absolute   py-8  "
              />
            </div>
          </motion.div>
        </div>

        {/* SECTION FOUR*/}
      </div>
    </>
  );
}

//  <div className=" grid   h-full  translate-x-12 ">
//                 <motion.img
//                   layout
//                   transition={spring}
//                   className={`object-fill  w-2/3  shadow-lg bg-blend-multiply rounded-2xl     ${
//                     myElementIsVisible2 ? "opacity-100" : "opacity-0"
//                   }`}
//                   src="Asset 117.svg"
//                 />
//               </div>
//               <div className=" grid   h-full  translate-x-12 ">
//                 <motion.img
//                   layout
//                   transition={spring}
//                   className={`object-fill  w-2/3  shadow-lg bg-blend-multiply rounded-2xl     ${
//                     myElementIsVisible3
//                       ? "opacity-100"
//                       : myElementIsVisible2
//                       ? "opacity-0"
//                       : myElementIsVisible1
//                       ? "opacity-0"
//                       : ""
//                   }`}
//                   src="Asset 119.svg"
//                 />
//               </div>

//  <div className="absolute  w-full   h-full  ">
//    <div className="grid-cols-2 m:grid-cols-1  grid  h-full ">
//      <div className=" grid   h-full   place-content-end ">
//        <motion.img
//          layout
//          transition={spring}
//          className={`object-fill  w-2/3  shadow-lg bg-blend-multiply rounded-2xl     ${
//            myElementIsVisible2 ? "opacity-0" : ""
//          }`}
//          src="Asset 116.svg"
//        />
//      </div>
//    </div>
//  </div>;
