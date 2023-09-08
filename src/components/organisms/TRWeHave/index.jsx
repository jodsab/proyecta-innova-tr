import React from "react";
import { GiSaloonDoors, GiParkBench, GiCastle } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { TbSoccerField } from "react-icons/tb";
import { FaFileSignature } from "react-icons/fa";
import { MdSecurity, MdPool, MdOutlineAreaChart } from "react-icons/md";
import "./styles.scss";

const SVGSIZE = 70;

const TRWeHave = () => {
  return (
    <div className="trwehave_container content">
      <div className="header">
        <p className="mediumText bold weHave">¡TENEMOS LO QUE NECESITAS!</p>
      </div>
      <div className="list_benefits">
        <div className="item_benefit">
          <MdSecurity size={SVGSIZE} />
          <p>Seguridad 24 horas</p>
        </div>
        <div className="item_benefit">
          <IoIosWater size={SVGSIZE} />
          <p>Servicios básicos</p>
        </div>
        <div className="item_benefit">
          <GiParkBench size={SVGSIZE} />
          <p>Zonas de descanso</p>
        </div>
        <div className="item_benefit">
          <TbSoccerField size={SVGSIZE} />
          <p>Areas deportivas</p>
        </div>
        <div className="item_benefit">
          <GiCastle size={SVGSIZE} />
          <p>Club house</p>
        </div>
        <div className="item_benefit">
          <MdPool size={SVGSIZE} />
          <p>Piscina para niños y adultos</p>
        </div>
        <div className="item_benefit">
          <MdOutlineAreaChart size={SVGSIZE} />
          <p>Areas de recreación</p>
        </div>
        <div className="item_benefit">
          <FaFileSignature size={SVGSIZE} />
          <p>Titulo de propiedad</p>
        </div>
      </div>
    </div>
  );
};

export default TRWeHave;
