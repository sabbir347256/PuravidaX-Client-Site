import React from "react";
import HeroSection from "./homePagesContent/HeroSection";
import Adventure from "./homePagesContent/Adventure";
import ProcedureSection from "./homePagesContent/ProcedureSection";
import TopExperience from "./homePagesContent/TopExperience";
import CostaricaFrame from "./homePagesContent/CostaricaFrame";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Adventure></Adventure>
      <ProcedureSection></ProcedureSection>
      <TopExperience></TopExperience>
      <CostaricaFrame></CostaricaFrame>
    </div>
  );
};

export default Home;
