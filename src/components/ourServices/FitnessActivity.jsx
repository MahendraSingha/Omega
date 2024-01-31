import React from "react";

const FitnessActivity = ({ fitnessContent }) => {
  return (
    <>
      <section
        className="ftns_activity"
        style={{
          background: `url("https://omega1ne.com/wp-content/uploads/2024/01/srvc_bnr_bg.webp")`,
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="container">
          <div className="ftns_actvty-cnt cmn_pdding">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="hw-prt-img wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <div className="hw-prt-pic srvc_ftns_img">
                    <img
                      src={fitnessContent?.acf?.fitness_image}
                      alt="ftns_img"
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
                    <h2>{fitnessContent?.acf?.fitness_heading}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: fitnessContent?.acf?.fitness_content,
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

export default FitnessActivity;
