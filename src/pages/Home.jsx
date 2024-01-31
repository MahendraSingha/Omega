import React, { useEffect } from "react";
import Banner from "../components/home/Banner";
import Service from "../components/home/Service";
import HomeSlider from "../components/home/HomeSlider";
import AboutOmega from "../components/home/AboutOmega";
import Solution from "../components/home/Solution";
import Testimonials from "../components/home/Testimonials";

const Home = ({
  ourServices,
  homePage,
  ourSolutions,
  clientTestimonial,
  homePageBnnrImgData,
}) => {
  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);

  return (
    <>
      <Banner homeData={homePage} homePageBnnrImgData={homePageBnnrImgData} />
      <Service ourServices={ourServices} homeData={homePage} />
      <HomeSlider sliderImg={homePage} />
      <AboutOmega content={homePage} />
      <Solution solutionsWork={ourSolutions} solutionHdContent={homePage} />
      <Testimonials testimonialData={clientTestimonial} resource={homePage} />
    </>
  );
};

export default Home;
