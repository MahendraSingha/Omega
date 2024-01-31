import React, { useEffect } from "react";
import TestimonialBannr from "../components/testimonial/TestimonialBannr";
import ClientTestimonial from "../components/testimonial/ClientTestimonial";
import GetInTouchSec from "../components/testimonial/GetInTouchSec";

const Testimonial = ({ testimonialData, clientTestimonial }) => {
  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);

  return (
    <>
      <TestimonialBannr testimonialData={testimonialData} />
      <ClientTestimonial testimonialData={testimonialData} />
      <GetInTouchSec posts={clientTestimonial} />
    </>
  );
};

export default Testimonial;
