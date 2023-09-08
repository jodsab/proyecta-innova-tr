import React from "react";
import { FaWaze } from "react-icons/fa";
import { TfiMapAlt } from "react-icons/tfi";
import "./styles.scss";

const SVG_ICONS = 25;
const WAZE_BASE_URL = "https://waze.com/ul";

const TRLocation = () => {
  return (
    <div className="trlocation_container">
      <div className="location">
        <p className="bold mediumText title_location">¡UBICACIÓN PERFECTA!</p>
      </div>
      <div className="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5516.862184775248!2d-76.9932687640077!3d-12.111422442449285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7403a8cd151%3A0x9811fa9f1a7dab1b!2sProyecta%20Innova%20Trasciende%20Sac!5e0!3m2!1ses-419!2spe!4v1684968948292!5m2!1ses-419!2spe"
          className="iframe_map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="buttons">
        <a
          className="flexAlign button"
          href={`${WAZE_BASE_URL}?ll=-12.1114224,-76.9932688&navigate=yes`}
          target="_blank"
        >
          <FaWaze size={SVG_ICONS} />
          <p className="bold">Ir con Waze</p>
        </a>
        <a
          className="flexAlign button"
          href="https://maps.google.com/maps?daddr=-12.1114224,-76.9932688"
          target="_blank"
        >
          <TfiMapAlt size={SVG_ICONS} />
          <p className="bold">Ir con Maps</p>
        </a>
      </div>
    </div>
  );
};

export default TRLocation;
