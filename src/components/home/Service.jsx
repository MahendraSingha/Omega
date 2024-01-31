import React from "react";
import { Link } from "react-router-dom";

const Service = ({ ourServices, homeData }) => {
  console.log(ourServices, "ourServiceshome");
  console.log(homeData, "homeData");

  return (
    <>
      <section
        className="or-srvc-sec cmn_pdding"
        style={{
          background: `url("http://omega1ne.com/wp-content/uploads/2024/01/or-srvc-bnr.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="container">
          <div className="or-srvc-otr">
            <div className="or-srvc-top text-center">
              <div className="cmn_hdr md wht">
                <h2 className="wow fadeInLeft" data-wow-delay="0.3s">
                  Our Services
                </h2>
                <p className="wow fadeInRight" data-wow-delay="0.3s">
                  At USA Health, we treat people. In doing so, we want to
                  understand your unique needs so our doctors and other
                  providers can design a plan of care specifically for you. Use
                  the field below to search for a specific service, treatment,
                  specialty or provider.
                </p>
              </div>
            </div>
            <div className="or-srvc-mn">
              <div className="or-srvc-flx">
                {ourServices &&
                  ourServices.map((service, index) => {
                    return (
                      <div
                        className="or-srvc-prt wow fadeInUp"
                        data-wow-delay="0.2s"
                        key={index}
                      >
                        <div className="or-srvc-img">
                          <div
                            className="or-srvc-pic"
                            data-aos="flip-up"
                            data-aos-delay={500}
                          >
                            <img src={service?.acf?.image} alt="srvc-1" />
                          </div>
                        </div>
                        <div className="cmn_hdr">
                          <h4>{service?.title?.rendered}</h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: service?.content?.rendered,
                            }}
                          ></p>
                        </div>
                        <div className="or-srvc-lnk"></div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="or-srvc-bttm text-center">
              <a
                href={homeData?.acf?.view_all_services_button?.url}
                className="cmn_btn"
              >
                {homeData?.acf?.view_all_services_button?.title}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
