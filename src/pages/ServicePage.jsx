import React, { useEffect } from "react";
import OurServicesBannr from "../components/ourServices/OurServicesBannr";
import FitnessActivity from "../components/ourServices/FitnessActivity";
import PreventionMeditation from "../components/ourServices/PreventionMeditation";
import StressMng from "../components/ourServices/StressMng";
import SleepNutrition from "../components/ourServices/SleepNutrition";

const ServicePage = ({ servicesData }) => {
  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);

  return (
    <>
      <OurServicesBannr bannrData={servicesData} />
      <FitnessActivity fitnessContent={servicesData} />
      <PreventionMeditation prevMedData={servicesData} />
      <StressMng stressMngData={servicesData} />
      <SleepNutrition sleepNutriData={servicesData} />
    </>
  );
};

export default ServicePage;
