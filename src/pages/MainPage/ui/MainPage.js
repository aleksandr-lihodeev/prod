import React from "react";
import "./MainPage.scss";
import { Options } from "../../../shared/ui";
import {FilterForm, Swiper} from "../../../features/ui";
import {AboutUs, Contacts, Footer, OurAgency} from "../../../widgets";
const MainPage = () => {
  return (
  <>
    <div className="main__wrapper">
      <div className="main__wrapper__fon"></div>
      <Options/>
      <FilterForm/>
      <Swiper/>
      <OurAgency/>
      <AboutUs/>
      <Contacts/>
      <Footer/>
    </div>
  </>
)
};
export default MainPage;
