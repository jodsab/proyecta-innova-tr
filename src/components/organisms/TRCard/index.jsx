import React from "react";
import message from "../../../core/translations/index";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BiBadgeCheck } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./styles.scss";

const SVGSIZE = 19;
const BIGSVGSIZE = 25;

const TRCard = () => {
  const { TRCard } = message.Home;
  const m = TRCard;

  return (
    <div className="trcard_container content">
      <div className="social_icons">
        <div className="icons_container">
          <a>
            <AiFillFacebook size={SVGSIZE} />
          </a>
          <a>
            <AiOutlineInstagram size={SVGSIZE} />
          </a>
          <a>
            <FaTiktok size={SVGSIZE} />
          </a>
          <a>
            <BsWhatsapp size={SVGSIZE} />
          </a>
          <a>
            <AiFillYoutube size={SVGSIZE} />
          </a>
        </div>
      </div>
      <div className="card_container">
        <div className="card_header">
          <div className="flexAlign iconText primaryColor">
            <BiBadgeCheck size={BIGSVGSIZE} />
            <p className="bold">{m.header.delivery}</p>
          </div>
          <div className="flexAlign iconText">
            <HiOutlineLocationMarker size={BIGSVGSIZE} />
            <p>{m?.header?.location}</p>
          </div>
        </div>
        <div className="card_body">
          <div className="flex_body_left">
            <div>
              <p className="semiBold bigText">{m.body.urb}</p>
              <p className="bold bigText">{m.body.name}</p>
            </div>
            <div className="spaceDscto">
              <p>{m.body.discount}</p>
              <p className="bold mediumText">{m.body.price}</p>
            </div>
          </div>
          <div className="flex_body_right">
            <p>{m.body.coutes}</p>
            <p>{m.body.months}</p>
            <p className="bold bigText">{m.body.dsct}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRCard;
