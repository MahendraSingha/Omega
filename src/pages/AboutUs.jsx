import React, { useEffect } from "react";
import AboutUsBanner from "../components/aboutUs/AboutUsBanner";
import AboutUsSlider from "../components/aboutUs/AboutUsSlider";
import AboutSecContent from "../components/aboutUs/AboutSecContent";

const AboutUs = ({ aboutUsContent }) => {
  console.log(aboutUsContent, "aboutUsContent");

  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);

  return (
    <>
      <AboutUsBanner dataForAboutUs={aboutUsContent} />
      <AboutUsSlider detailsForAboutUs={aboutUsContent} />
      <AboutSecContent aboutUsContent={aboutUsContent} />
    </>
  );
};

export default AboutUs;
