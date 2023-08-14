import React from "react";
import { GoLocation } from "react-icons/go";
import { TbTrain } from "react-icons/tb";
import { GiForestCamp } from "react-icons/gi";
import "./styles.scss";

const SVGICONS = 65;

const TRDescription = () => {
  return (
    <div className="trdescription_container content">
      <p className="bold bigText">Descripción</p>
      <p className="textCenter description mediumText">
        Lorem ipsum dolor sit amet consectetur. Habitant vitae sed in nulla.
        Elementum aliquet lorem pellentesque nulla odio consequat. Neque
        porttitor donec et quam. Egestas ornare quis tristique aliquam pulvinar.
        Augue nisi lacus dignissim massa tellus viverra diam quis nulla. Et.
      </p>
      <div className="icons">
        <div className="icon_text">
          <GoLocation size={SVGICONS} />
          <p>Centro Comercial, Av. Primavera 120, Santiago de Surco 15038</p>
        </div>
        <div className="icon_text">
          <GiForestCamp size={SVGICONS} />
          <p>Centro Comercial, Av. Primavera 120, Santiago de Surco 15038</p>
        </div>
        {/*         <div className="icon_text">
          <TbTrain size={SVGICONS} />
          <p>A pocos minutos de la estación del tren</p>
        </div> */}
      </div>
    </div>
  );
};

export default TRDescription;
