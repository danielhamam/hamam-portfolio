import React from "react";
import { GlobalNavbar } from "../components/Nav/GlobalNavbar";
import Footer from "../components/Footer/Footer";
import ProjectContainer from "../components/Portfolio/ProjectContainer";

export const Portfolio = (props) => {
  return (
    <>
      <GlobalNavbar active={props.active} />
        <ProjectContainer />
      <Footer />
    </>
  );
};
