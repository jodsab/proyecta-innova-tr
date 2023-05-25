import React from "react";
import { GiSaloonDoors, GiParkBench, GiCastle } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { TbSoccerField } from "react-icons/tb";
import { FaFileSignature } from "react-icons/fa";
import "./styles.scss";

const SVGSIZE = 80;

const TRWeHave = () => {
  return (
    <div className="trwehave_container content">
      <div className="header">
        <p className="mediumText bold weHave">¡TENEMOS LO QUE NECESITAS!</p>
      </div>
      <div className="list_benefits">
        <div className="item_benefit">
          <GiSaloonDoors size={SVGSIZE} />
          <p>Pórtico de ingreso</p>
        </div>
        <div className="item_benefit">
          <IoIosWater size={SVGSIZE} />
          <p>Servicios completos</p>
        </div>
        <div className="item_benefit">
          <GiParkBench size={SVGSIZE} />
          <p>Zona de descanso</p>
        </div>
        <div className="item_benefit">
          <TbSoccerField size={SVGSIZE} />
          <p>Cancha de grass sintético</p>
        </div>
        <div className="item_benefit">
          <GiCastle size={SVGSIZE} />
          <p>Juegos para niños</p>
        </div>
        <div className="item_benefit">
          <FaFileSignature size={SVGSIZE} />
          <p>Título de propiedad</p>
        </div>
      </div>
    </div>
  );
};

export default TRWeHave;
