import React from "react";

const TrendingResource = ({ trendingData }) => {
  return (
    <>
      <section className="tnnow cmn_pdding">
        <div className="container">
          <div className="cmn_hdr text-center">
            <h2>Trending Now</h2>
          </div>
          <div className="row">
            {trendingData &&
              trendingData.map((tr_data, index) => {
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div
                      className="tn-cntnt"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="tn_img">
                        <img src={tr_data?.acf?.images} alt="tn_img1" />
                      </div>
                      <div className="tn_contents">
                        <span
                          className="fs-16"
                          dangerouslySetInnerHTML={{
                            __html: tr_data?.excerpt?.rendered,
                          }}
                        ></span>
                        <div className="cmn_hdr mt-3 mb-3">
                          <h4>{tr_data?.title?.rendered}</h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: tr_data?.content?.rendered,
                            }}
                          ></p>
                          <div className="or-srvc-lnk">
                            <a href={tr_data?.acf?.button?.url}>
                              {tr_data?.acf?.button?.title}{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingResource;
