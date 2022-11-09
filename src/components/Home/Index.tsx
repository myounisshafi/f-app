// @ts-nocheck
import React from "react";
import HeroSection from "./HeroSection";
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionSix from "./SectionSix";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

function Home(props: any) {
  return (
    <>
      <HeroSection state={props} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive state={props}/>
      <SectionSix />
    </>
  );
}

export default Home;
