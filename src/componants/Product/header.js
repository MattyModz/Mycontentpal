import { useState } from "react";
import { motion } from "framer-motion";
import Money from "./money";
import Supporting from "./supporting";
import Content from "./content";
import { myContext } from "../../../Context/Context";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
export default function ProdHeader() {
  const Data = [
    [
      {
        description: <Money />,
        title: "Money",
      },
    ],
    [
      {
        description: <Supporting />,
        title: "Supporting",
      },
    ],
  ];

  const { dataValue, setDataValue } = myContext();
  console.log(dataValue);
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn((prev) => !prev);

  {
    isOn ? setDataValue(1) : setDataValue(0);
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <section className="">
      <div class=" ">
        <h3 className="py-12 font-inter text-center text-white text-6xl ">
          <span className="text-orange-400">{Data[dataValue][0].title}</span>{" "}
          content...
        </h3>
      </div>
      <div className="flex  justify-center py-4">
        <p className="p-4 -rotate-6 text-white text-xl font-bold font-writing">
          <RoughNotation type="underline" show={!isOn}>
            Money Content
          </RoughNotation>
        </p>
        <div
          className="switch "
          data-isOn={isOn}
          onClick={() => {
            toggleSwitch();
          }}
        >
          <motion.div className="handle" layout transition={spring} />
        </div>
        <p className="p-4 rotate-6 text-white text-xl font-bold  font-writing ">
          <RoughNotation type="underline" show={isOn}>
            Supporting Content
          </RoughNotation>
        </p>
      </div>
      <div className="text-center  fade-in-text text-white py-2">
        {Data[dataValue][0].description}
      </div>
    </section>
  );
}

//  {
//    data.map(function (d, idx) {
//      return (
//        <div key={idx}>
//          <motion.div>{d.description}</motion.div>
//        </div>
//      );
//    });
//}

//  <button onClick={() => setataset(false, setContent(<Money />))}>
//    <a
//      className={`text-[#000000] px-6 font-bold " ${getActiveClass(
//        0,
//        "bg-orange-300 rounded-full p-4 text-[#fff]"
//      )}`}
//    >
//      Money content
//    </a>
//  </button>;

// const getActiveClass = (index, className) =>
//   dataValue === index ? className : "";
