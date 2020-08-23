import React from "react";
import { HeroLayout } from "../Layouts";
import {
  HeroSection,
  AboutSection,
  DetailSection,
  FaqSection,
  EmailSection,
  FooterSection,
} from "../sections";

const Home = () => {
  return (
    <>
      <HeroLayout>
        <HeroSection />
      </HeroLayout>
      <AboutSection />
      <DetailSection />
      <FaqSection />
      <EmailSection />
      <FooterSection />
    </>
  );
};

export default Home;
