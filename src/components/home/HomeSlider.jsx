import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = ({ sliderImg }) => {
  // console.log(sliderImg, "sliderImghome");

  return (
    <>
      <div className="aftrsrvc-sld-sec cmn_pdding">
        <div className="container">
          <div className="aftr-srvc-otr">
            <div className="aftrsrvc_slider">
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={4}
                  allowTouchMove={true}
                  loop={true}
                  // autoplay={true}
                  // slidesPerView="auto"
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
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
                  {sliderImg?.acf?.after_service_sec_logo_part &&
                    sliderImg?.acf?.after_service_sec_logo_part.map(
                      (img, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="aftrsrvc-imgbx" key={index}>
                              <img src={img?.image} alt="img" />
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
                  src={require("../../assets/images/arw-one-lft.webp")}
                  alt="arw-img"
                />
              </div>
              <div className="swiper-button-next2">
                <img
                  src={require("../../assets/images/arw-one-rght.webp")}
                  alt="arw-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
