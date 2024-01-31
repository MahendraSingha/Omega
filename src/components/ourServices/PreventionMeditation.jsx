import React from "react";

const PreventionMeditation = ({ prevMedData }) => {
  return (
    <>
      <section
        className="education_section"
        style={{
          background: `url("https://omega1ne.com/wp-content/uploads/2024/01/fncl_bg.webp")`,
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="container">
          <div className="hw-prt-ottr cmn_pdding">
            <div className="row">
              <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="hw-prt-img">
                  <div className="hw-prt-pic">
                    <img
                      src={prevMedData?.acf?.financial_image}
                      alt="fncl_img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="hw-prt-txt srvc_cont">
                  <div className="cmn_hdr res-gap">
                    <h2>{prevMedData?.acf?.financial_heading}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: prevMedData?.acf?.financial_content,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="hw-prt-img">
                  <div className="hw-prt-pic">
                    <img
                      src={prevMedData?.acf?.meditation_image}
                      alt="mdtatn_img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="hw-prt-txt">
                  <div className="cmn_hdr res-gap">
                    <h2>{prevMedData?.acf?.meditation_heading}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: prevMedData?.acf?.meditation_content,
                      }}
                    ></p>
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

export default PreventionMeditation;
