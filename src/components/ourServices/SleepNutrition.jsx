import React from "react";

const SleepNutrition = ({ sleepNutriData }) => {
  return (
    <>
      <section
        className="massage-section"
        style={{
          background: "url(./images/nn_sec.webp)",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="container">
          <div className="hw-prt-ottr cmn_pdding">
            <div className="row align-items-center">
              <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="hw-prt-img">
                  <div className="hw-prt-pic">
                    <img
                      src={sleepNutriData?.acf?.massage_image?.url}
                      alt="sleep"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="hw-prt-txt srvc_cont">
                  <div className="cmn_hdr res-gap">
                    <h2>{sleepNutriData?.acf?.massage_heading}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sleepNutriData?.acf?.massage_content,
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
                      src={sleepNutriData?.acf?.nutrition_image}
                      alt="ntrsn_img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="hw-prt-txt">
                  <div className="cmn_hdr res-gap">
                    <h2>{sleepNutriData?.acf?.nutrition_heading}</h2>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: sleepNutriData?.acf?.nutrition_content,
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

export default SleepNutrition;
