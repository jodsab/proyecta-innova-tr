import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsImages } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";
import lote1 from "../../../assets/galerialotes/lote1.jpeg";
import lote2 from "../../../assets/galerialotes/lote2.jpeg";
import lote3 from "../../../assets/galerialotes/lote3.jpeg";
import lote4 from "../../../assets/galerialotes/lote4.jpeg";
import lote5 from "../../../assets/galerialotes/lote5.jpeg";
import lote6 from "../../../assets/galerialotes/lote6.jpeg";
import lote7 from "../../../assets/galerialotes/lote7.jpeg";
import lote8 from "../../../assets/galerialotes/lote8.jpeg";
import lote9 from "../../../assets/galerialotes/lote9.jpeg";
import lote10 from "../../../assets/galerialotes/lote10.jpeg";
import lote11 from "../../../assets/galerialotes/lote11.jpeg";
import lote12 from "../../../assets/galerialotes/lote12.jpeg";

// import required modules
import { Pagination, Navigation } from "swiper";

const ICON_SIZE = 24;

const TRGalery = () => {
  const [toggleGallery, setToggleGallery] = useState(true);
  const galleryLotes = [];
  for (var i = 1; i <= 12; i++) {
    galleryLotes[i] = { id: i, img: eval(`lote${i}`) };
  }

  return (
    <div className="galery_container">
      <div className="coment_div">
        <p className="bold mediumText comentarios">Galería interactiva</p>
      </div>
      <div className="content">
        {toggleGallery ? (
          <div className="swiper_container">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              onSlideChange={(e) => console.log(e.realIndex)}
            >
              {galleryLotes?.map((galleryLote) => (
                <SwiperSlide key={galleryLote.id}>
                  <img className="lote_img" src={galleryLote.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="video_container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mjz6o_cwL7E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="buttons_options">
        <div className="buttons_container">
          <label
            className={`buttons  ${toggleGallery ? "active" : "disabled"}`}
            onClick={() => setToggleGallery(true)}
          >
            <BsImages size={ICON_SIZE} />
            <p className={`semiBold`}>Images</p>
          </label>
          <label
            className={`buttons  ${!toggleGallery ? "active" : "disabled"}`}
            onClick={() => setToggleGallery(false)}
          >
            <MdOutlineOndemandVideo size={ICON_SIZE} />
            <p className="semiBold">Video</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TRGalery;
