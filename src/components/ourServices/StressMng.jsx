import React from "react";

const StressMng = ({ stressMngData }) => {
  return (
    <>
      <section className="pramdcl_sec">
        <div className="container">
          <div className="get_started_bg">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div
                  className="hw-prt-txt paramedcl wow fadeInRight"
                  data-wow-delay="0.2s"
                >
                  <div className="cmn_hdr contents">
                    <h2>{stressMngData?.acf?.paramedical_heading}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: stressMngData?.acf?.paramedical_content,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="hw-prt-img wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <div className="hw-prt-pic res-img-gap srvc_ftns_img">
                    <img
                      src={stressMngData?.acf?.paramedical_image}
                      alt="pramdcl_img"
                    />
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

export default StressMng;
