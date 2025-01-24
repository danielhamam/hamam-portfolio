import React from "react";
import { GlobalNavbar } from "../components/Nav/GlobalNavbar";
import Footer from "../components/Footer/Footer";
import ProjectContainer from "../components/Portfolio/ProjectContainer";
import AnimatedPage from "../components/AnimatedPage";

export const Portfolio = (props) => {
  return (
    <>
      <GlobalNavbar active={props.active} />
        <ProjectContainer />
      <Footer />
    </>
  );
};
