import React from "react";

export default function Intro() {
  return (
    <div className=" h-full container p-4  text-orange-500">
      <div className=" flex justify-center   ">
        <div className="p-8">
          <p className="font-inter flex justify-center text-xl p-8 text-orange-300 ">
            Step by Step
          </p>
          <h3 className="font-inter flex justify-center text-3xl md:text-4xl lg:text-6xl p-8 text-orange-300 ">
            How does it work?
          </h3>
          <p className="flex justify-center font-interr lg:text-2xl text-l p-8 text-white">
            Perfectly optimised SEO content to fit your niche in 5 simple steps.
          </p>
        </div>
      </div>
    </div>
  );
}
