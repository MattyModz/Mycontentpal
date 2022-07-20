import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { myContext } from "../../../Context/Context";
const Serviceslider = () => {
  const [value, setState] = useState([0]); //for slider increasing and decreasing

  const { dataValue, setDataValue } = myContext(); // for getting data from an array;

  const Data = [
    [
      //the data you have used, you just have to change data here if you need
      { price: "0.06", words: 1000, posts: 1, img: "./icons-sm.svg" },
      { price: "0.06", words: 5000, posts: 3, img: "./icons-sm.svg" },
      { price: "0.06", words: 10000, posts: 5, img: "./icons-sm.svg" },
      { price: "0.06", words: 20000, posts: 10, img: "./icons-md.svg" },
      { price: "0.06", words: 25000, posts: 13, img: "./icons-md.svg" },
      { price: "0.06", words: 50000, posts: 25, img: "./icons-md.svg" },
      { price: "0.06", words: 75000, posts: 38, img: "./icons-md.svg" },
      { price: "0.06", words: 100000, posts: 50, img: "./icons-lg.svg" },
      { price: "0.06", words: 150000, posts: 75, img: "./icons-lg.svg" },
      { price: "0.06", words: 200000, posts: 100, img: "./icons-lg.svg" },
    ],

    [
      //the data you have used, you just have to change data here if you need
      { price: "0.11", words: 1000, posts: 1, img: "icons-sm.svg" },
      { price: "0.11", words: 5000, posts: 3, img: "./icons-sm.svg" },
      { price: "0.09", words: 10000, posts: 5, img: "./icons-sm.svg" },
      { price: "0.09", words: 20000, posts: 10, img: "./icons-md.svg" },
      { price: "0.08", words: 25000, posts: 13, img: "./icons-md.svg" },
      { price: "0.08", words: 50000, posts: 25, img: "./icons-md.svg" },
      { price: "0.06", words: 75000, posts: 38, img: "./icons-md.svg" },
      { price: "0.06", words: 100000, posts: 50, img: "./icons-lg.svg" },
      { price: "0.05", words: 150000, posts: 75, img: "./icons-lg.svg" },
      { price: "0.05", words: 200000, posts: 100, img: "./icons-lg.svg" },
    ],
  ];

  return (
    <div className="flex  justify-center   ">
      <div className="flex-column justify-content justify-center w-full xl:w-1/2  ">
        {/* for getting price from array */}
        <div className="text-center  mb-12">
          <h2 className="text-white text-4xl font-bold">
            {Data[dataValue][value].words} words
          </h2>
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
        <div className="flex justify-between font-inter">
          <h4 className="fade-in-text font-bold text-xl lg:text-xl  bg-clip-text text-transparent bg-gradient-to-br from-[#FB8753] to-[#FB7877] p-5 rounded-xl ">
            ${Data[dataValue][value].price}{" "}
            <span className="lg:text-xl text-xl">per word</span>
          </h4>

          <h4 className="  font-inter font-bold pb-5 lg:text-xl  text-xl bg-clip-text text-transparent bg-gradient-to-br from-[#FB8753] to-[#FB7877] p-5 rounded-xl ">
            ${Data[dataValue][value].price * Data[dataValue][value].words}
          </h4>
        </div>

        <p className="py-2 text-white text-xl flex justify-center font-bold">
          Or about {Data[dataValue][value].posts} blog posts
        </p>
        <div className="flex justify-center">
          <img src={Data[dataValue][value].img} />
        </div>
        <div className="mb-8">
          <a
            href="#_"
            class="block w-full py-6 mt-5 text-xl font-inter text-center text-white bg-gradient-to-br from-[#FB8753] to-[#FB7877] rounded-full xl:text-2xl xl:w-11/12 xl:mt-10"
          >
            Purchase Content
          </a>
        </div>
      </div>
    </div>
  );
};
export default Serviceslider;

//   { price: "0.06", words: "1,000", posts: 1 , img: "./icons-lg.svg"},
//   { price: "0.06", words: "5,000", posts: 3 , img: "./icons-lg.svg"},
//   { price: "0.06", words: "10,000", posts: 5 , img: "./icons-lg.svg"},
//   { price: "0.06", words: "20,000", posts: 10, img: "./icons-lg.svg" },
//   { price: "0.06", words: "25,000", posts: 13, img: "./icons-lg.svg" },
//   { price: "0.06", words: "50,000", posts: 25, img: "./icons-lg.svg" },
//   { price: "0.06", words: "75,000", posts: 38, img: "./icons-lg.svg" },
//   { price: "0.06", words: "100,000", posts: 50, img: "./icons-lg.svg" },
//   { price: "0.06", words: "150,000", posts: 75, img: "./icons-lg.svg" },
//   { price: "0.06", words: "200,000", posts: 10, img: "./icons-lg.svg"0 },
// ],

// [
//   //the data you have used, you just have to change data here if you need
//   { price: "0.11", words: "1000", posts: 1 , img: "./icons-lg.svg"},
//   { price: "0.11", words: "5000", posts: 3 , img: "./icons-lg.svg"},
//   { price: "0.09", words: "10,000", posts: 5 , img: "./icons-lg.svg"},
//   { price: "0.09", words: "20,000", posts: 10, img: "./icons-lg.svg" },
//   { price: "0.08", words: "25,000", posts: 13, img: "./icons-lg.svg" },
//   { price: "0.08", words: "50,000", posts: 25, img: "./icons-lg.svg" },
//   { price: "0.06", words: "75,000", posts: 38, img: "./icons-lg.svg" },
//   { price: "0.06", words: "100,000", posts: 50, img: "./icons-lg.svg" },
//   { price: "0.05", words: "150,000", posts: 75, img: "./icons-lg.svg" },
//   { price: "0.05", words: "200,000", posts: 10, img: "./icons-lg.svg"0 },
// ],
