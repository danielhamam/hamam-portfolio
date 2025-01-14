import React from "react";
import AboutMe from "../components/About/AboutMe";
import Footer from "../components/Footer/Footer";
import { GlobalNavbar } from "../components/Nav/GlobalNavbar";
import AnimatedPage from "../components/AnimatedPage";

export const About = (props) => {
  return (
    <>
      <GlobalNavbar active={props.active} />
      <AnimatedPage>
        <AboutMe />
      </AnimatedPage>
      <Footer />
    </>
  );
};
