import React from "react";
import { motion } from "framer-motion";
export default function DesktopHero() {
  return (
    <section
      className="w-full px-6 overflow-hidden bg-body-dark pt-12  "
      data-tails-scripts="//unpkg.com/alpinejs"
    >
      <div className="flex mt-10 lg:space-x-8 xl:space-x-10">
        <motion.div
          className="flex justify-end hidden w-1/5 h-36 lg:block lg:-mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.3 },
          }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full p-6 pb-0 bg-white shadow-sm rounded-2xl">
            <div className="grid grid-cols-12 gap-x-2 gap-y-4">
              <div className="h-3 col-span-2 bg-orange-300 rounded-full"></div>
              <div className="h-3 col-span-6 bg-orange-400 rounded-full"></div>
              <div className="h-3 col-span-4 bg-orange-300 rounded-full"></div>

              <div className="h-3 col-span-4 bg-gray-300 rounded-full"></div>
              <div className="h-3 col-span-3 bg-gray-300 rounded-full"></div>
              <div className="h-3 col-span-5 bg-gray-200 rounded-full"></div>

              <div className="h-3 col-span-6 bg-orange-400 rounded-full"></div>
              <div className="h-3 col-span-4 bg-orange-200 rounded-full"></div>
              <div className="h-3 col-span-2 bg-orange-300 rounded-full"></div>

              <div className="h-3 col-span-2 bg-gray-300 rounded-full"></div>
              <div className="h-3 col-span-6 bg-gray-300 rounded-full"></div>
              <div className="h-3 col-span-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full h-96 lg:w-4/5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full p-4 pb-0 bg-white rounded-b-none shadow-sm rounded-2xl">
            <div className="flex w-full h-full p-4 space-x-4 rounded-b-none bg-gray-50 rounded-2xl">
              <div className="relative sm:block hidden flex flex-col justify-between w-32 h-full p-4 bg-white rounded-2xl">
                <div className="relative flex justify-center w-full pt-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="relative space-y-4">
                  <div className="h-2 rounded-full bg-purple-50"></div>
                  <div className="h-2 rounded-full bg-purple-50"></div>
                  <div className="h-2 rounded-full bg-purple-50"></div>
                </div>
                <div className="relative flex items-center space-x-2">
                  <div className="flex-shrink-0 w-2 h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-full p-5 bg-white rounded-2xl">
                <div className="flex flex-col w-full h-full space-x-1">
                  <div className="flex w-full mt-2 space-x-2">
                    <div className="w-16 h-16 bg-gray-50 rounded-full">
                      <img
                        src="./JamesGregory.png"
                        class="rounded-full  w-16 h-16"
                      />
                    </div>
                    <div className="flex flex-col space-y-3">
                      <div className="w-32 h-3 mt-2 rounded-full bg-gray-50 font-bold font-inter">
                        James Gregory
                      </div>
                      <div className="font-interr">
                        {" "}
                        Business growth at Searcharoo
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-grow w-full h-full mt-3 space-x-4 font-inter">
                    <div className="w-full h-full pl-4 bg-gray-50 rounded-xl ">
                      <div className="flex mt-1">
                        <img
                          src="trustpilot-1 (1).svg"
                          class="rounded-full mr-3 w-24 h-6"
                        />
                        <img src="stars-5-1.svg" class=" mr-3 w-24 h-6 mt-1 " />
                      </div>
                      <div className="flex justify-end"></div>
                      <div className="mx-auto px-8 py-2">
                        Level up your content game with content that sells I
                        needed terrific content that aligns with my client's
                        brand narrative and tone while simultaneously
                        positioning them in a certain way in the marketplace.
                      </div>
                    </div>
                    <div className=" hidden w-40 h-full bg-gray-50 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="hidden w-1/5 h-60 lg:block md:-mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 2.5 },
          }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full p-5 space-y-4 bg-white shadow-sm rounded-2xl">
            <div className="flex items-center justify-center  rounded-full w-28 h-28">
              <img className="w-full" src="./SEOTitle.svg" />
            </div>
            <div className="flex items-center justify-center  rounded-full w-28 h-28">
              <img className="w-full" src="./SEODial.svg" />
            </div>

            <div className="w-20 h-3 bg-gray-100 rounded-full"></div>
            <div className="w-full h-3 bg-gray-100 rounded-full"></div>
            <div className="w-full h-3 bg-gray-100 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

//  <div className="flex font-inter">
//                     <div className="w-full">1.5M Words created</div>
//                     <div className="w-full">$200k Revenue Generated</div>
//                   </div>
//                   <div className="w-full flex justify-center">
//                     250 Happy Clients
//                   </div>

// <section
//   className="w-full px-6 overflow-hidden bg-body-dark pt-12  "
//   data-tails-scripts="//unpkg.com/alpinejs"
// >
//   <div className="flex mt-10 lg:space-x-8 xl:space-x-10">
//     <motion.div
//       className="flex justify-end hidden w-1/5 h-36 lg:block lg:-mt-20"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         transition: { duration: 1, delay: 0.3 },
//       }}
//       viewport={{ once: true }}
//     >
//       <div className="w-full h-full p-6 pb-0 bg-white shadow-sm rounded-2xl">
//         <div className="grid grid-cols-12 gap-x-2 gap-y-4">
//           <div className="h-3 col-span-2 bg-orange-300 rounded-full"></div>
//           <div className="h-3 col-span-6 bg-orange-400 rounded-full"></div>
//           <div className="h-3 col-span-4 bg-orange-300 rounded-full"></div>

//           <div className="h-3 col-span-4 bg-gray-300 rounded-full"></div>
//           <div className="h-3 col-span-3 bg-gray-300 rounded-full"></div>
//           <div className="h-3 col-span-5 bg-gray-200 rounded-full"></div>

//           <div className="h-3 col-span-6 bg-orange-400 rounded-full"></div>
//           <div className="h-3 col-span-4 bg-orange-200 rounded-full"></div>
//           <div className="h-3 col-span-2 bg-orange-300 rounded-full"></div>

//           <div className="h-3 col-span-2 bg-gray-300 rounded-full"></div>
//           <div className="h-3 col-span-6 bg-gray-300 rounded-full"></div>
//           <div className="h-3 col-span-4 bg-gray-200 rounded-full"></div>
//         </div>
//       </div>
//     </motion.div>
//     <motion.div
//       className="w-full h-96 lg:w-4/5"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         transition: { duration: 1 },
//       }}
//       viewport={{ once: true }}
//     >
//       <div className="w-full h-full p-4 pb-0 bg-white rounded-b-none shadow-sm rounded-2xl">
//         <div className="flex w-full h-full p-4 space-x-4 rounded-b-none bg-gray-50 rounded-2xl">
//           <div className="relative flex flex-col justify-between w-32 h-full p-4 bg-white rounded-2xl">
//             <div className="relative flex justify-center w-full pt-3">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50">
//                 <svg
//                   className="w-5 h-5 text-orange-500"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//             <div className="relative space-y-4">
//               <div className="h-2 rounded-full bg-purple-50"></div>
//               <div className="h-2 rounded-full bg-purple-50"></div>
//               <div className="h-2 rounded-full bg-purple-50"></div>
//             </div>
//             <div className="relative flex items-center space-x-2">
//               <div className="flex-shrink-0 w-2 h-2 bg-gray-200 rounded-full"></div>
//               <div className="w-full h-2 bg-gray-100 rounded-full"></div>
//             </div>
//           </div>
//           <div className="w-full h-full p-5 bg-white rounded-2xl">
//             <div className="flex flex-col w-full h-full space-x-1">
//               <div className="flex w-full mt-2 space-x-2">
//                 <div className="w-16 h-16 bg-gray-50 rounded-full">
//                   <img
//                     src="./JamesGregory.png"
//                     class="rounded-full  w-16 h-16"
//                   />
//                 </div>
//                 <div className="flex flex-col space-y-3">
//                   <div className="w-32 h-3 mt-2 rounded-full bg-gray-50 font-bold font-inter">
//                     James Gregory
//                   </div>
//                   <div className="font-interr">
//                     {" "}
//                     Business growth at Searcharoo
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-grow w-full h-full mt-3 space-x-4 font-inter">
//                 <div className="w-full h-full pl-4 bg-gray-50 rounded-xl ">
//                   <svg
//                     class="h-auto  z-0 top-0 right-0 w-12 opacity-30 mt-6 mr-7 Z-50 text-orange-600"
//                     fill="currentColor"
//                     viewBox="0 0 32 32"
//                     aria-hidden="true"
//                   >
//                     <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
//                   </svg>
//                   <div className="mx-auto p-8">
//                     Level up your content game with content that sells I
//                     needed terrific content that aligns with my client's
//                     brand narrative and tone while simultaneously
//                     positioning them in a certain way in the marketplace.
//                   </div>
//                 </div>
//                 <div className="w-40 h-full bg-gray-50 rounded-xl"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//     <motion.div
//       className="hidden w-1/5 h-60 lg:block md:-mt-20"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         transition: { duration: 2.5 },
//       }}
//       viewport={{ once: true }}
//     >
//       <div className="flex flex-col items-center justify-center w-full h-full p-5 space-y-4 bg-white shadow-sm rounded-2xl">
//         <div className="flex items-center justify-center  rounded-full w-28 h-28">
//           <img className="w-full" src="./SEOTitle.svg" />
//         </div>
//         <div className="flex items-center justify-center  rounded-full w-28 h-28">
//           <img className="w-full" src="./SEODial.svg" />
//         </div>

//         <div className="w-20 h-3 bg-gray-100 rounded-full"></div>
//         <div className="w-full h-3 bg-gray-100 rounded-full"></div>
//         <div className="w-full h-3 bg-gray-100 rounded-full"></div>
//       </div>
//     </motion.div>
//   </div>
// </section>
//   );
// }

//  <div className="flex font-inter">
//                     <div className="w-full">1.5M Words created</div>
//                     <div className="w-full">$200k Revenue Generated</div>
//                   </div>
//                   <div className="w-full flex justify-center">
//                     250 Happy Clients
//                   </div>
