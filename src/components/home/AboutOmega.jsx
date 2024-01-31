import React from "react";
import homeSliderBackground from "../../assets/images/h_w-bnr.webp";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const HomeSlider = ({ content }) => {
  console.log(content, "contenthome");

  return (
    <>
      <section
        style={{
          background: `url(${homeSliderBackground})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        {/* h&w part start */}
        <div className="hw-sec cmn_pdding">
          <div className="container">
            <div className="hw-prt-ottr">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div
                    className="hw-prt-img wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <div className="hw-prt-pic">
                      <img
                        src={content?.acf?.health_and_wellness_sec_image}
                        alt="health_and_wellness_sec_image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="hw-prt-txt wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    <div className="cmn_hdr">
                      <h2>{content?.acf?.health_and_wellness_sec_heading}</h2>
                      <p>{content?.acf?.health_and_wellness_sec_content1}</p>
                      {/* <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting Industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p> */}
                    </div>
                    <div className="hw-txt-prt-btn">
                      <a
                        href={
                          content?.acf?.health_and_wellness_sec_learn_more_btn
                            ?.url
                        }
                        className="cmn_btn"
                      >
                        {
                          content?.acf?.health_and_wellness_sec_learn_more_btn
                            ?.title
                        }
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* h&w part end */}
        {/* hm-count part start */}
        <div className="hm-cntng-sec wow fadeInUp" data-wow-delay="0.2s">
          <div className="container">
            <div className="hm-cntng-otr">
              <div className="hm-cntng-inr">
                {content?.acf?.counter_repeater &&
                  content?.acf?.counter_repeater.map((counter, index) => {
                    return (
                      <div className="hm-cntng-prt" key={index}>
                        <div className="hm-cntng-txt text-center">
                          <h2>
                            {counter?.count1 === "193" ? (
                              <CountUp
                                start={counter.count1}
                                end={counter.count1}
                                enableScrollSpy={false}
                              />
                            ) : (
                              <CountUp
                                end={counter?.count1}
                                duration={10}
                                enableScrollSpy={true}
                              />
                            )}
                            {counter.count1 === "8" ? <span>+</span> : ""}
                          </h2>
                          <h6>{counter.count2}</h6>
                        </div>
                      </div>
                    );
                  })}

                {/* <div className="hm-cntng-prt">
                                    <div className="hm-cntng-txt text-center">
                                        <h2>
                                            <CountUp end={3} duration={20} />
                                        </h2>
                                        <h6>Facilities</h6>
                                    </div>
                                </div>
                                <div className="hm-cntng-prt">
                                    <div className="hm-cntng-txt text-center">
                                        <h2>
                                            <CountUp end={5} duration={20} />
                                          
                                        </h2>
                                        <h6>Health plans</h6>
                                    </div>
                                </div>
                                <div className="hm-cntng-prt">
                                    <div className="hm-cntng-txt text-center">
                                        <h2>
                                            <CountUp end={12} duration={10} />
                                           
                                        </h2>
                                        <h6>Partners</h6>
                                    </div>
                                </div>
                                <div className="hm-cntng-prt">
                                    <div className="hm-cntng-txt text-center">
                                        <h2>
                                            <CountUp start={185} end={193} duration={8} />
                                           
                                        </h2>
                                        <h6>Clients</h6>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSlider;
