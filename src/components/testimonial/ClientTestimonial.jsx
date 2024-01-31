import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ClientTestimonial = ({ testimonialData }) => {
  return (
    <>
      <section
        className="contactus tstmnlus cmn_pdding"
        style={{
          background: `url("https://omega1ne.com/wp-content/uploads/2024/01/f.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container">
          <div className="parent_contactus">
            <div className="lrg_txt">
              <h3>Testimonial </h3>
            </div>
            <div className="left-cntctus">
              <div className="lft_cntctus_img" data-aos="fade-left">
                <img
                  src={testimonialData?.acf?.testimonial_image}
                  alt="tstmnl-sd"
                />
              </div>
            </div>
            <div className="rgt-cntctus">
              <div className="cmn_hdr">
                <h2 data-aos="fade-up">
                  {testimonialData?.acf?.testimonial_heading1}
                </h2>
                <p
                  data-aos="fade-up"
                  dangerouslySetInnerHTML={{
                    __html: testimonialData?.acf?.testimonial_content,
                  }}
                ></p>
              </div>
              <div className="cntct_info">
                <div className="cntct_lst">
                  <div className="contct_content cmn_hdr">
                    <div className="stars">
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
                    <h4>{testimonialData?.acf?.testimonial_heading2}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonial;
