import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Testimonials = ({ testimonialData, resource }) => {
  console.log(resource, "resourceTesti");
  return (
    <>
      <section
        style={{
          background: `url("http://omega1ne.com/wp-content/uploads/2024/01/explr_bg-2-scaled.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
        }}
      >
        {/* testimonal sec start */}
        <div className="testimonal cmn_pdding">
          <div className="tstmnl_dtls">
            <div className="tstmnl_hdng cmn_hdr text-center">
              <h2>Client Testimonials</h2>
            </div>
            <div className="testimonal_sliders">
              <div className="testimonal_slider testmnl_swpr">
                <div className="swiper-wrapper">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    allowTouchMove={true}
                    loop={true}
                    // autoplay={true}
                    autoplay={{
                      delay: 1000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    navigation={{
                      nextEl: ".swiper-button-next_1",
                      prevEl: ".swiper-button-prev_1",
                    }}
                    breakpoints={{
                      575: {
                        slidesPerView: 1,
                      },
                      767: {
                        slidesPerView: 2,
                      },
                      840: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {testimonialData &&
                      testimonialData.map((testimonial, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <div className="tstmnl_info">
                              <div className="tstmnl_up">
                                <div className="tsmnl_img_otr">
                                  <div className="tstmnl_img">
                                    <img
                                      src={testimonial?.acf?.image}
                                      alt="clnt_img1"
                                    />
                                  </div>
                                </div>
                                <div className="tstmnl_name cmn_hdr">
                                  <ul className="star_img">
                                    <li>
                                      <FontAwesomeIcon icon={faStar} />
                                    </li>
                                    <li>
                                      <FontAwesomeIcon icon={faStar} />
                                    </li>
                                    <li>
                                      <FontAwesomeIcon icon={faStar} />
                                    </li>
                                    <li>
                                      <FontAwesomeIcon icon={faStar} />
                                    </li>
                                    <li>
                                      <FontAwesomeIcon icon={faStar} />
                                    </li>
                                  </ul>
                                  <h4>{testimonial?.title?.rendered}</h4>
                                </div>
                              </div>
                              <div className="tstmnl_para pra_nw cmn_hdr">
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: testimonial?.content?.rendered,
                                  }}
                                ></p>
                              </div>
                            </div>
                            <div className="tstmnl_line">
                              <img
                                src={
                                  "http://omega1ne.com/wp-content/uploads/2024/01/tstmnl_line.webp"
                                }
                                alt="testimonial line"
                              />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
              <div className="btn_otr">
                <div className="swiper-button-next_1">
                  <img
                    src={
                      "http://omega1ne.com/wp-content/uploads/2024/01/clnt_arw.webp"
                    }
                    alt="clnt_arw"
                  />
                </div>
                <div className="swiper-button-prev_1">
                  <img
                    src={
                      "http://omega1ne.com/wp-content/uploads/2024/01/clnt_arw.webp"
                    }
                    alt="clnt_arw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* testimonal sec end */}
        {/* explore sec start */}
        <div>
          <div className="explore_ptnt cmn_pdding">
            <div className="explre_dtl">
              <div className="container">
                <div className="explr_hdng cmn_hdr">
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    {resource?.acf?.explore_heading}
                  </h2>
                  <div
                    className="explr_btn wow fadeInDown"
                    data-wow-delay="0.3s"
                  >
                    <a
                      href={resource?.acf?.explore_button?.url}
                      className="cmn_btn"
                    >
                      {resource?.acf?.explore_button?.title}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="explore_details"
                style={{
                  background: `url("http://omega1ne.com/wp-content/uploads/2024/01/explore_btm_bg.webp")`,
                  backgroundSize: "100% 100%",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="container">
                  <div className="explr_info row">
                    <div className="col-md-6">
                      <div className="explre_left">
                        <div
                          className="explr_lft_dtl wow fadeInLeft"
                          data-wow-delay="0.2s"
                        >
                          <div className="explr_lft_img">
                            <img
                              src={resource?.acf?.explore_dtls_image1}
                              alt="nw-ptnt-rs-img1"
                            />
                          </div>
                          <div className="explr_lft_text cmn_hdr">
                            <h4>{resource?.acf?.explore_dtls_heading1}</h4>
                            <div className="or-srvc-lnk">
                              <a
                                href={resource?.acf?.explore_dtls_button1?.url}
                                className="or-srvc-lnk"
                              >
                                {resource?.acf?.explore_dtls_button1?.title}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="explr_lft_dtl wow fadeInLeft"
                          data-wow-delay="0.2s"
                        >
                          <div className="explr_lft_img">
                            <img
                              src={resource?.acf?.explore_dtls_image2}
                              alt="img"
                            />
                          </div>
                          <div className="explr_lft_text cmn_hdr">
                            <h4>{resource?.acf?.explore_dtls_heading2}</h4>
                            <div className="or-srvc-lnk">
                              <a
                                href={resource?.acf?.explore_dtls_button2?.url}
                              >
                                {resource?.acf?.explore_dtls_button2?.title}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="explre_right">
                        <div
                          className="explr_lft_dtl wow fadeInRight"
                          data-wow-delay="0.3s"
                        >
                          <div className="explr_lft_img">
                            <img
                              src={resource?.acf?.explore_dtls_image3}
                              alt="img"
                            />
                          </div>
                          <div className="explr_lft_text cmn_hdr">
                            <h4>{resource?.acf?.explore_dtls_heading3}</h4>
                            <p>{resource?.acf?.explore_dtls_content3_}</p>
                            <div className="or-srvc-lnk">
                              <a
                                href={resource?.acf?.explore_dtls_button3?.url}
                              >
                                {resource?.acf?.explore_dtls_button3?.title}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* explore sec end */}
      </section>
    </>
  );
};

export default Testimonials;
