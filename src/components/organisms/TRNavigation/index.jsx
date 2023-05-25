import { Button, Drawer, Radio, Space } from "antd";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Logo from "../../../assets/logo.png";
import "./styles.scss";

const TRNavigation = () => {
  const [open, setOpen] = useState(false);
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
          <p className="bold">¡Registrate aquí!</p>
        </button>
        <BiMenu size={40} onClick={showDrawer} />
        <Drawer
          title="Basic Drawer"
          placement={"right"}
          closable={false}
          onClose={onClose}
          open={open}
        ></Drawer>
      </div>
    </div>
  );
};

export default TRNavigation;
