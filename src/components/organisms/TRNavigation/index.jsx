import { Button, Drawer, Radio, Space } from "antd";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Logo from "../../../assets/logo.png";
import "./styles.scss";

const CloseButton = () => {
  return (
    <div className="menu_container">
      <button>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
};

const TRNavigation = () => {
  const [open, setOpen] = useState(true);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="tr_navigation_container">
      <div className="tr_navigation">
        <img className="logo" src={Logo} alt="logo" />
        <button className="button" type="primary">
          <p className="bold">Solicitar información</p>
        </button>
        <BiMenu size={40} onClick={showDrawer} />
        {/*         <CloseButton />
        <div className="drawer_menu_container">
          <div className="menu_content">
            <p>Menu Content</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TRNavigation;
