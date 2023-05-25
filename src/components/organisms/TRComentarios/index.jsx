import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import profile_picture from "../../../assets/defaultuserprofile.jpg";

import "./styles.scss";

const SVG_ICONS = 80;

import { Pagination, Navigation } from "swiper";

const Comentario = () => {
  return (
    <div className="comentario_container">
      <div className="coment_div">
        <p className="bold mediumText comentarios">Comentarios</p>
      </div>
      <div className="message_align">
        <div className="message_container">
          <img className="foto_perfil" src={profile_picture} />

          <RiDoubleQuotesL className="svg_open" size={SVG_ICONS} />
          <p className="message">
            Lorem ipsum dolor sit amet consectetur. Fringilla pretium
            scelerisque mauris in tristique a tellus sed. In feugiat sit elit
            urna.
          </p>
          <RiDoubleQuotesR className="svg_close" size={SVG_ICONS} />
          <p className="name bold">David Mendoza</p>
        </div>
      </div>
    </div>
  );
};

const TRComentarios = () => {
  const portadas = [];
  for (var i = 0; i < 5; i++) {
    portadas[i] = i + 1;
  }
  console.log(portadas);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {portadas?.map((portada, index) => (
        <SwiperSlide key={index}>
          <Comentario />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TRComentarios;
