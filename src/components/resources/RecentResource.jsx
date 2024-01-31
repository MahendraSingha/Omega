import React from "react";

const RecentResource = ({ dataOfResource }) => {
  return (
    <>
      <section
        className="blog cmn_pdding"
        style={{
          background: `url("https://omega1ne.com/wp-content/uploads/2024/01/blog_bnr.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container">
          <div className="outr_latest_blog">
            <div className="blog_hdng_cntnt">
              <div
                className="cmn_hdr"
                data-aos="zoom-out"
                data-aos-delay="1500"
              >
                <h2>Recent Resources</h2>
              </div>
            </div>
            <div className="parent_blog">
              {/* column 1 */}
              <div className="blog_column">
                <div className="blog_box">
                  <div className="blog_bx_img">
                    <img
                      src={dataOfResource?.acf?.blog_box_image1}
                      alt="blog_img1"
                    />
                  </div>
                  <div className="blog_content">
                    <p>{dataOfResource?.acf?.blog_box_excerpt1}</p>
                    <div className="cmn_hdr">
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: dataOfResource?.acf?.blog_box_heading1,
                        }}
                      ></h4>
                      <p>{dataOfResource?.acf?.blog_box_content1}</p>
                    </div>
                    <div className="get_btn">
                      <a
                        href={dataOfResource?.acf?.blog_box_button1?.url}
                        className="signup_btn"
                      >
                        <span>
                          {dataOfResource?.acf?.blog_box_button1?.title}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="blog_box"
                  style={{
                    background: "rgb(25, 60, 85)",
                    background:
                      "linear-gradient(90deg, rgba(25, 60, 85, 1) 0%, rgba(14, 102, 160, 1) 0%)",
                  }}
                >
                  <div className="blog_content">
                    <div className="blog_img">
                      <img
                        src={dataOfResource?.acf?.blog_box_image2}
                        alt="blog_image2"
                      />
                    </div>
                    <div className="cmn_hdr wht">
                      <h4>{dataOfResource?.acf?.blog_box_heading2}</h4>
                      <div className="l_more_btn">
                        <a
                          href={dataOfResource?.acf?.blog_box_button2?.url}
                          className="or-srvc-lnk"
                        >
                          {dataOfResource?.acf?.blog_box_button2?.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_box">
                  <div className="blog_bx_img">
                    <img
                      src={dataOfResource?.acf?.blog_box_image3}
                      alt="blog_image1"
                    />
                  </div>
                  <div className="blog_content">
                    <p>{dataOfResource?.acf?.blog_box_excerpt2}</p>
                    <div className="cmn_hdr">
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: dataOfResource?.acf?.blog_box_heading3,
                        }}
                      ></h4>
                      <p>{dataOfResource?.acf?.blog_box_content2}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="blog_box"
                  style={{
                    background: "rgb(25, 60, 85)",
                    background:
                      "linear-gradient(90deg, rgba(25, 60, 85, 1) 0%, rgba(14, 102, 160, 1) 100%)",
                  }}
                >
                  <div className="blog_content">
                    <div className="blog_img">
                      <img
                        src={dataOfResource?.acf?.blog_box_image4}
                        alt="blog_box_image4"
                      />
                    </div>
                    <div className="cmn_hdr wht">
                      <h4>{dataOfResource?.acf?.blog_box_heading4}</h4>
                      <div className="l_more_btn">
                        <a
                          href={dataOfResource?.acf?.blog_box_button3?.url}
                          className="or-srvc-lnk"
                        >
                          {dataOfResource?.acf?.blog_box_button3?.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* column 2 */}
              <div className="blog_column">
                <div
                  className="blog_box"
                  style={{
                    background: `url("http://omega1ne.com/wp-content/uploads/2024/01/blog_3_bg.webp")`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="blog_content">
                    <div className="d-flex justify-content-between mb-5">
                      <p>{dataOfResource?.acf?.box_excerpt1}</p>
                      <a
                        href={dataOfResource?.acf?.box_button1?.url}
                        className="anchor_btn"
                      >
                        {dataOfResource?.acf?.box_button1?.title}
                      </a>
                    </div>
                    <div className="cmn_hdr">
                      <h4>{dataOfResource?.acf?.box_heading1}</h4>
                      <p>{dataOfResource?.acf?.box_content1}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="blog_box"
                  style={{
                    background: `url("http://omega1ne.com/wp-content/uploads/2024/01/blog_4_bg.webp")`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    paddingBottom: "30rem",
                  }}
                >
                  <div className="blog_content">
                    <div className="cmn_hdr wht">
                      <p>{dataOfResource?.acf?.box_excerpt2}</p>
                      <h4>{dataOfResource?.acf?.box_heading2}</h4>
                      <p>{dataOfResource?.acf?.box_content2}</p>
                    </div>
                    <div className="l_more_btn">
                      <a
                        href={dataOfResource?.acf?.box_button2?.url}
                        className="or-srvc-lnk"
                      >
                        {dataOfResource?.acf?.box_button2?.title}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="blog_box"
                  style={{
                    background: `url("http://omega1ne.com/wp-content/uploads/2024/01/blog_3_bg.webp")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <div className="blog_content">
                    <div className="d-flex justify-content-between mb-5">
                      <p>{dataOfResource?.acf?.box_excerpt3}</p>
                      <a
                        href={dataOfResource?.acf?.box_button3?.url}
                        className="anchor_btn"
                      >
                        {dataOfResource?.acf?.box_button3?.title}
                      </a>
                    </div>
                    <div className="cmn_hdr">
                      <h4>{dataOfResource?.acf?.box_heading3}</h4>
                      <p>{dataOfResource?.acf?.box_content3}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="blog_box"
                  style={{
                    background: `url("http://omega1ne.com/wp-content/uploads/2024/01/blog_4_bg.webp")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    paddingBottom: "30rem",
                  }}
                >
                  <div className="blog_content">
                    <div className="cmn_hdr wht">
                      <p>{dataOfResource?.acf?.box_excerpt4}</p>
                      <h4>{dataOfResource?.acf?.box_heading4}</h4>
                      <p>{dataOfResource?.acf?.box_content4}</p>
                    </div>
                    <div className="l_more_btn">
                      <a
                        href={dataOfResource?.box_button4?.url}
                        className="or-srvc-lnk"
                      >
                        {dataOfResource?.box_button4?.title}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* column 3 */}
              <div className="blog_column">
                <div
                  className="blog_box"
                  style={{
                    background: `url("http://omega1ne.com/wp-content/uploads/2024/01/blog_5_bg-1.webp")`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="blog_content">
                    <div className="top_btn">
                      <a
                        href={dataOfResource?.acf?.box_blog_button1?.url}
                        className="anchor_btn"
                      >
                        {dataOfResource?.acf?.box_blog_button1?.title}
                      </a>
                    </div>
                    <div className="cmn_hdr wht">
                      <p>{dataOfResource?.acf?.box_blog_excerpt1}</p>
                      <h4>{dataOfResource?.acf?.box_blog_heading1}</h4>
                    </div>
                    <div className="d-flex justify-content-between mb-3 mt-8">
                      <h5 className="h5hdng">
                        {dataOfResource?.acf?.box_blog_title1}
                      </h5>
                      <div className="user">
                        <img
                          src={
                            "http://omega1ne.com/wp-content/uploads/2024/01/user.webp"
                          }
                          alt="user"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_box">
                  <div className="blog_bx_img">
                    <img
                      src={dataOfResource?.acf?.box_blog_image2}
                      alt="blog_image3"
                    />
                  </div>
                  <div className="blog_content">
                    <p>{dataOfResource?.acf?.box_blog_excerpt2}</p>
                    <div className="cmn_hdr">
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: dataOfResource?.acf?.box_blog_heading2,
                        }}
                      ></h4>
                      <p>{dataOfResource?.acf?.box_blog_content2}</p>
                    </div>
                    <div className="get_btn mb-5">
                      <a
                        href={dataOfResource?.acf?.box_blog_button2?.url}
                        className="signup_btn d-block text-center"
                      >
                        <span>
                          {dataOfResource?.acf?.box_blog_button2?.title}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="blog_box"
                  style={{
                    background: `url("http://omega1ne.com/wp-content/uploads/2024/01/blog_5_bg-1.webp")`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="blog_content">
                    <div className="top_btn">
                      <a
                        href={dataOfResource?.acf?.box_blog_button3?.url}
                        className="anchor_btn"
                      >
                        {dataOfResource?.acf?.box_blog_button3?.title}
                      </a>
                    </div>
                    <div className="cmn_hdr wht">
                      <p>{dataOfResource?.acf?.box_blog_excerpt3}</p>
                      <h4>{dataOfResource?.acf?.box_blog_heading3}</h4>
                    </div>
                    <div className="d-flex justify-content-between mb-3 mt-8">
                      <h5 className="h5hdng">
                        {dataOfResource?.acf?.box_blog_title2}
                      </h5>
                      <div className="user">
                        <img
                          src={
                            "http://omega1ne.com/wp-content/uploads/2024/01/user.webp"
                          }
                          alt="box_blog_image3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_box">
                  <div className="blog_bx_img">
                    <img
                      src={dataOfResource?.acf?.box_blog_image4}
                      alt="box_blog_image4"
                    />
                  </div>
                  <div className="blog_content">
                    <p>{dataOfResource?.acf?.box_blog_excerpt4}</p>
                    <div className="cmn_hdr">
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: dataOfResource?.acf?.box_blog_heading4,
                        }}
                      ></h4>
                      <p>{dataOfResource?.acf?.box_blog_content2}</p>
                    </div>
                    <div className="get_btn mb-5">
                      <a
                        href={dataOfResource?.acf?.box_blog_button4?.url}
                        className="signup_btn d-block text-center"
                      >
                        <span>
                          {dataOfResource?.acf?.box_blog_button4?.title}
                        </span>
                      </a>
                    </div>
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

export default RecentResource;
