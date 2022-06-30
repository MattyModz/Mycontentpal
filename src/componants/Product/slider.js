import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { myContext } from "../../../Context/Context";
const Serviceslider = () => {
  const [value, setState] = useState([0]); //for slider increasing and decreasing

  const { dataValue, setDataValue } = myContext(); // for getting data from an array;

  const Data = [
    [
      //the data you have used, you just have to change data here if you need
      { price: "0.06", words: 1000 },
      { price: "0.06", words: 5000 },
      { price: "0.06", words: 10000 },
      { price: "0.06", words: 20000 },
      { price: "0.06", words: 25000 },
      { price: "0.06", words: 50000 },
      { price: "0.06", words: 75000 },
      { price: "0.06", words: 100000 },
      { price: "0.06", words: 150000 },
      { price: "0.06", words: 200000 },
    ],

    [
      //the data you have used, you just have to change data here if you need
      { price: "0.11", words: 1000 },
      { price: "0.11", words: 5000 },
      { price: "0.09", words: 10000 },
      { price: "0.09", words: 20000 },
      { price: "0.08", words: 25000 },
      { price: "0.08", words: 50000 },
      { price: "0.06", words: 75000 },
      { price: "0.06", words: 100000 },
      { price: "0.05", words: 150000 },
      { price: "0.05", words: 200000 },
    ],
  ];

  return (
    <div className="flex  justify-center   ">
      <div className="flex-column justify-content justify-center w-full xl:w-1/2  ">
        {/* for getting price from array */}
        <div className="text-center  mb-12">
          <h2 className="text-white text-6xl font-bold">
            {Data[dataValue][value].words}
            <br /> words
          </h2>
          <p className="py-2 text-white text-xl">Approx. 10 blog posts</p>
        </div>

        <Range
          className="py-8"
          step={1}
          min={0} //you can ask why I use minValue 1500  and maxValue 4500. The answer is for somoothness. if we use less number then we will not get smoothness
          max={9}
          values={value}
          onChange={(values) => {
            setState(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "11px",
                width: "100%",
                borderRadius: "8px",
                backgroundImage: "linear-gradient(to right, red , yellow)",
                background: getTrackBackground({
                  //for background tracking
                  values: value,
                  colors: ["#FB8951", "#FCFCFC"],
                  min: 0,
                  max: 9,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "24px",
                width: "25px",
                left: "6px",
                backgroundColor: "#FB7F64",
                border: "none",
                borderRadius: "50%",
                outline: "none",
              }}
            />
          )}
        />
        {/* <div className={styles.numberRange}> 
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div> */}
        {/* for getting words from array */}
        {/* for getting url from array */}
        <div className="flex justify-between">
          <h4 className="fade-in-text font-bold text-3xl lg:text-4xl  text-[#FB7F64] p-5 rounded-xl ">
            ${Data[dataValue][value].price} per word
          </h4>

          <h4 className="   font-bold pb-5 lg:text-4xl  text-3xl text-[#FB7F64] p-5 rounded-xl ">
            ${Data[dataValue][value].price * Data[dataValue][value].words}
          </h4>
        </div>
        <div className="mb-8">
          <a
            href="#_"
            class="block w-full py-6 mt-5 text-xl font-bold text-center text-white bg-orange-400 rounded-full xl:text-3xl xl:w-11/12 xl:mt-10"
          >
            Purchase Content
          </a>
        </div>
      </div>
    </div>
  );
};
export default Serviceslider;
