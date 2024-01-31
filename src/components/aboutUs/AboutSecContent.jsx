import React from "react";

const AboutSecContent = ({ aboutUsContent }) => {
  return (
    <>
      <section
        className="sltn-wrk-sec cmn_pdding"
        style={{
          background: `url("http://omega1ne.com/wp-content/uploads/2024/01/ab.webp")`,
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
        }}
      >
        {/* commitment section starts */}
        <div className="commitment">
          <div className="container">
            <div className="ftns_actvty-cnt new_bottoom_paddng cmn_pdding">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div
                    className="hw-prt-img wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <div className="hw-prt-pic srvc_ftns_img">
                      <img
                        src={aboutUsContent?.acf?.commintments_image}
                        alt="cmtmnt_immg"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="hw-prt-txt srvc_cont wow fadeInRight"
                    data-wow-delay="0.2s"
                  >
                    <div className="cmn_hdr res-gap">
                      <h2>{aboutUsContent?.acf?.commintments_heading}</h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: aboutUsContent?.acf?.commintments_content,
                        }}
                      ></p>
                    </div>
                    {/* <div class="hw-txt-prt-btn">
              <a href="javascript:void(0):" class="cmn_btn">LEARN MORE</a>
            </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* commitment section ends */}
        {/* about ommega section starts */}
        <div className="aboutOmmega cmn_pdding">
          <div className="container">
            <div className="sltn-wrk-otr">
              <div className="sltn-wrk-top text-center">
                <div
                  className="cmn_hdr md"
                  data-aos="zoom-in"
                  data-aos-delay={500}
                >
                  <h2>{aboutUsContent?.acf?.omeaga_heading}</h2>
                  <p>{aboutUsContent?.acf?.omeaga_content}</p>
                </div>
              </div>
              <div className="sltn-wrk-flx">
                <div className="row align-items-center">
                  {aboutUsContent?.acf?.omega_repeater &&
                    aboutUsContent?.acf?.omega_repeater?.map(
                      (repeater, index) => {
                        return (
                          <div className="col-md-6" key={index}>
                            <div
                              className="sltn-wrk-part wow fadeInLeft"
                              data-wow-delay="0.2s"
                            >
                              <div className="sltn-wrk-img">
                                <img
                                  src={repeater?.image}
                                  alt="nw_abtomg_1"
                                  loading="lazy"
                                />
                              </div>
                              <div
                                className="sltn-wrk-prt-txt"
                                data-aos="zoom-in"
                                data-aos-delay={500}
                              >
                                <div className="cmn_hdr wht">
                                  <h4>{repeater?.heading}</h4>
                                  <p>{repeater?.content}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about ommega section ends */}
        {/* abut and wlnss cmpny starts */}
        {/* <section class="hw-sec "> */}
        <div className="wellness">
          <div className="container">
            <div className="hw-prt-ottr cmn_pdding">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div
                    className="hw-prt-img wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <div className="hw-prt-pic wellness_pic">
                      <img
                        effect="blur"
                        src={aboutUsContent?.acf?.wellness_image}
                        alt="aboutomega_3"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="hw-prt-txt wow srvc_cont fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    <div className="cmn_hdr res-gap">
                      <h2>{aboutUsContent?.acf?.wellness_heading}</h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: aboutUsContent?.acf?.wellness_content,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
        {/* abut and wlnss cmpny ends */}
      </section>
    </>
  );
};

export default AboutSecContent;
