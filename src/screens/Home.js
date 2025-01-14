import React from "react";
import HomeNav from "../components/Home/HomeNav";
import Introduction from "../components/Home/Introduction";
import { GlobalNavbar } from "../components/Nav/GlobalNavbar";
import AnimatedPage from "../components/AnimatedPage";
import Footer from "../components/Footer/Footer";

export const Home = (props) => {
  return (
    <>
      <GlobalNavbar active={props.active} />
      <AnimatedPage>
        <Introduction />
        <br /> <br /> <br />
        <HomeNav />
      </AnimatedPage>
      <Footer />
    </>
  );
};
