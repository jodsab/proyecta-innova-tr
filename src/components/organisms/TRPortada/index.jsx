import React from "react";
import sticker from "../../../assets/home/sticker.png";
import portada from "../../../assets/home/portada.mp4";
import "./styles.scss";

const TRPortada = () => {
  return (
    <div className="portada_container">
      <div className="video_container">
        <img className="lotes" src={sticker} />
        <video autoPlay className="video" controls={false}>
          <source src={portada} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default TRPortada;
