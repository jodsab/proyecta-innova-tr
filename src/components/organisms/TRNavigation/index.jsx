import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../../assets/logo.png";
import "./styles.scss";

const ICON_SIZE = 40;

const TRNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="tr_navigation_container">
      <div className="tr_navigation">
        <img className="logo" src={Logo} alt="logo" />
        <button className="button" type="primary">
          <p className="bold">Solicitar información</p>
        </button>
        <BiMenu size={ICON_SIZE} onClick={() => setMenuOpen(true)} />
        <div
          className={`drawer_menu_container ${
            menuOpen ? "active" : "disabled"
          }`}
        >
          <div
            className={`background_black ${menuOpen ? "active" : "disabled"}`}
          ></div>
          <div className={`menu_content ${menuOpen ? "active" : "disabled"}`}>
            <AiOutlineClose
              size={ICON_SIZE}
              onClick={() => setMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRNavigation;
