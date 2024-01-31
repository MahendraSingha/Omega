import React from "react";
import { Link } from "react-router-dom";

const Solution = ({ solutionsWork, solutionHdContent }) => {
  // console.log(solutionHdContent, "solutionHdContent");
  console.log(solutionsWork, "solutionsWork");
  return (
    <>
      <section className="sltn-wrk-sec cmn_pdding">
        <div className="container">
          <div className="sltn-wrk-otr">
            <div className="sltn-wrk-top text-center">
              <div
                className="cmn_hdr md"
                data-aos="zoom-in"
                data-aos-delay={500}
              >
                <h2>{solutionHdContent?.acf?.solution_heading}</h2>
                <p>{solutionHdContent?.acf?.solution_content}</p>
              </div>
            </div>
            <div className="sltn-wrk-flx">
              <div className="row">
                {solutionsWork &&
                  solutionsWork.map((solution, index) => {
                    return (
                      <div className="col-md-6" key={index}>
                        <div
                          className="sltn-wrk-part wow fadeInLeft"
                          data-wow-delay="0.2s"
                        >
                          <div className="sltn-wrk-img">
                            <img src={solution?.acf?.image} alt="wrk-sltn-1" />
                          </div>
                          <div
                            className="sltn-wrk-prt-txt"
                            data-aos="zoom-in"
                            data-aos-delay={500}
                          >
                            <div className="cmn_hdr wht">
                              <h4>{solution?.title?.rendered}</h4>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: solution?.content?.rendered,
                                }}
                              ></p>
                            </div>
                            <div className="sltn-wrk-prt-btn">
                              <a
                                href={solution?.acf?.works?.url}
                                className="cmn_btn"
                              >
                                {solution?.acf?.works?.title}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
