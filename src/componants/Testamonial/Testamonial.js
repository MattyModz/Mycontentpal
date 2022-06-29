import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Linkprocess1 from "./linkprocess";
import Linkprocess2 from "./linkprocess2";
import Linkprocess3 from "./linkprocess3";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../container";
// Import Swiper styles
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export default function Test() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  bg-blue-400 "
      >
        <SwiperSlide>
          <Linkprocess1 />
        </SwiperSlide>
        <SwiperSlide>
          <Linkprocess1 />
        </SwiperSlide>
        <SwiperSlide>
          <Linkprocess2 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
