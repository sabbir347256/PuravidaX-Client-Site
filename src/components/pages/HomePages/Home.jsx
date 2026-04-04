import React from "react";
import HeroSection from "./homePagesContent/HeroSection";
import Adventure from "./homePagesContent/Adventure";
import ProcedureSection from "./homePagesContent/ProcedureSection";
import TopExperience from "./homePagesContent/TopExperience";
import CostaricaFrame from "./homePagesContent/CostaricaFrame";
import TravelersReview from "./homePagesContent/TravelersReview";
import AdventureCreateSection from "./homePagesContent/AdventureCreateSection";
import SubscriptionSection from "./homePagesContent/SubscriptionSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Adventure></Adventure>
      <ProcedureSection></ProcedureSection>
      <TopExperience></TopExperience>
      <CostaricaFrame></CostaricaFrame>
      <TravelersReview></TravelersReview>
      <AdventureCreateSection></AdventureCreateSection>
      <SubscriptionSection></SubscriptionSection>
    </div>
  );
};

export default Home;
