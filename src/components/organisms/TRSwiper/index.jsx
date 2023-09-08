import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mobilePortada from "../../../assets/home/mobilePortada.jpg";

import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

const TRSwiper = () => {
  const portadas = [];
  for (var i = 0; i < 5; i++) {
    portadas[i] = i + 1;
  }
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {portadas?.map((portada, index) => (
        <SwiperSlide key={index}>
          <img src={mobilePortada} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TRSwiper;
