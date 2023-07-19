import React from "react";
import TRNavigation from "../../organisms/TRNavigation";
import TRSwiper from "../../organisms/TRSwiper";
import TRCard from "../../organisms/TRCard";
import TRDescription from "../../organisms/TRDescription";
import TRWeHave from "../../organisms/TRWeHave";
import TRForm from "../../organisms/TRForm";
import TRComentarios from "../../organisms/TRComentarios";
import TRFoooter from "../../organisms/TRFooter";
import TRLocation from "../../organisms/TRLocation";
import TRMultimedia from "../../organisms/TRMultimedia";
import "./styles.scss";

const HomeTemplate = () => {
  return (
    <div>
      <TRNavigation />
      <div className="home_container">
        <TRSwiper />
        <TRCard />
        <TRDescription />
        <TRLocation />
        <TRWeHave />
        {/* <TRMultimedia /> */}
        <TRForm />
      </div>
      <div>
        <TRComentarios />
        <TRFoooter />
      </div>
    </div>
  );
};

export default HomeTemplate;
