// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import profile_picture from "../../../assets/defaultuserprofile.jpg";
import cliente1 from "../../../assets/galeriaclientes/cliente1.png";
import cliente2 from "../../../assets/galeriaclientes/cliente2.png";
import cliente3 from "../../../assets/galeriaclientes/cliente3.png";
import cliente4 from "../../../assets/galeriaclientes/cliente4.png";
import cliente5 from "../../../assets/galeriaclientes/cliente5.png";
import cliente6 from "../../../assets/galeriaclientes/cliente6.png";
import cliente7 from "../../../assets/galeriaclientes/cliente7.png";

import "./styles.scss";

const SVG_ICONS = 80;

import { Autoplay, Pagination, Navigation } from "swiper";

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

const SwiperFamily = ({ src }) => {
  return <img className="swiperfamily_container" src={src} />;
};

const TRComentarios = () => {
  const portadas = [];
  for (var i = 0; i < 5; i++) {
    portadas[i] = i + 1;
  }

  const galleryFamily = [
    cliente1,
    cliente2,
    cliente3,
    cliente4,
    cliente5,
    cliente6,
    cliente7,
  ].map((img, id) => ({ id: id + 1, img }));
  return (
    <div className="trcomentarios_container">
      <p className="bigText bold joinus">¡Únete a nuestra familia!</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {galleryFamily?.map((gf, index) => (
          <SwiperSlide key={index}>
            <SwiperFamily src={gf.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TRComentarios;
