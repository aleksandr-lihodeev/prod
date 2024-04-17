import React from "react";
import "./MainPage.scss";
import { Options } from "../../../shared/ui";
import { Vtorichka, FilterForm, Swiper } from "../../../features/ui";
import { AboutUs, Contacts, OurAgency } from "../../../widgets";
const MainPage = () => {
  return (
    <>
      <div className="main__wrapper">
        <div className="main__wrapper__fon"></div>
        <div className="container">
          <FilterForm />
        </div>
        <Swiper />
        <OurAgency />
        <AboutUs />
        <Contacts />
      </div>
    </>
  );
};
export default MainPage;
