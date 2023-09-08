import React from "react";
import "./styles.scss";

const TRMultimedia = () => {
  const iframeSrc =
    "https://kuula.co/share/5l6yr/collection/7JbRp?logo=1&info=1&fs=1&vr=0&zoom=1&autorotate=0.3&thumbs=1&alpha=0.60&inst=es";

  return (
    <div className="trmultimedia_container">
      <div className="tour_content">
        <div className="tour">
          <p className="mediumText bold title_tour">TOUR 360°</p>
        </div>

        <iframe
          title="Kuula Embed"
          src={iframeSrc}
          width="100%"
          height="600px" /* Puedes ajustar la altura según tus necesidades */
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TRMultimedia;
