import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutUsSlider = ({ detailsForAboutUs }) => {
  return (
    <>
      <section
        className="slider_section"
        style={{
          background: `url("https://omega1ne.com/wp-content/uploads/2024/01/about_bg.webp")`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="aftrsrvc-sld-sec cmn_pdding">
          <div className="container">
            <div className="aftr-srvc-otr">
              <div className="aftrsrvc_slider swiper mySwiper2">
                <div className="swiper-wrapper">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={4}
                    allowTouchMove={true}
                    loop={true}
                    autoplay={true}
                    // slidesPerView="auto"
                    // autoplay={{
                    //   delay: 1000,
                    //   disableOnInteraction: false,
                    //   pauseOnMouseEnter: true,
                    // }}
                    speed={1500}
                    autoHeight={false}
                    navigation={{
                      nextEl: ".swiper-button-next2",
                      prevEl: ".swiper-button-prev2",
                    }}
                    breakpoints={{
                      360: {
                        slidesPerView: 2,
                      },
                      484: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {detailsForAboutUs?.acf?.image_repeater &&
                      detailsForAboutUs?.acf?.image_repeater.map(
                        (img, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className="swiper-slide">
                                <div className="aftrsrvc-imgbx">
                                  <img
                                    src={img.inner_images}
                                    alt="abut_sldr1"
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                        }
                      )}
                  </Swiper>
                </div>
              </div>
              <div className="btn-otr">
                <div className="swiper-button-prev2">
                  <img
                    src="http://omega1ne.com/wp-content/uploads/2024/01/arw-one-lft.webp"
                    alt="arw-one-lft"
                  />
                </div>
                <div className="swiper-button-next2">
                  <img
                    src="http://omega1ne.com/wp-content/uploads/2024/01/arw-one-rght.webp"
                    alt="arw-one-lft"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSlider;
