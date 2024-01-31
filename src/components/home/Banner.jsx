import React, { useState } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Modal from "react-responsive-modal";
// import FancyVideo from "react-videojs-fancybox";
// import "react-fancybox/lib/fancybox.css";

const Banner = ({ homeData, homePageBnnrImgData }) => {
  // const [isOpen, setIsOpen] = useState(false);

  console.log(homePageBnnrImgData, "homePageBnnrImgData");
  console.log(homeData, "homeData");

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <section className="banner_sec">
        <div className="bnr_otr">
          <div className="bnr_img_otr zoom_otr">
            <div className="bnr_pic">
              <img
                src={homePageBnnrImgData?.acf?.banner_bg_image}
                alt="banner-bg"
              />
              <div className="bnr_girl">
                <img
                  src={homePageBnnrImgData?.acf?.banner_lady_image}
                  alt="banner-girl"
                />
              </div>
              <div className="bnr_crcl rotate">
                <img
                  src={homePageBnnrImgData?.acf?.banner_circle_image}
                  alt="circle-banner"
                />
              </div>
            </div>
          </div>
          <div className="bnr-mbl-img-otr">
            <div className="bnr_pic">
              <img
                src={homePageBnnrImgData?.acf?.mobile_screen_banner_bg_image}
                alt="img"
              />
              <div className="mbl_lady">
                <img
                  src={
                    homePageBnnrImgData?.acf?.mobile_screen_banner_lady_image
                  }
                  alt="img"
                />
              </div>
              <div className="mbl_crcl rotate">
                <img
                  src={
                    homePageBnnrImgData?.acf?.mobile_screen_banner_circle_image
                  }
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bnr_content cmn_bnr_txt">
              <h1 className="">{homeData?.acf?.banner_omega_heading}</h1>
              <div className="cmn_hdr wht">
                <p>{homeData?.acf?.banner_omega_content}</p>
              </div>
              <a className="bnr-vdo-otr"></a>
              <div className="bnr-vdo-inr">
                <a className="bnr-vdo-otr"></a>

                <a
                  data-fancybox=""
                  className="bnr-vdi-icn"
                  href={homeData?.acf?.banner_watch_video_link?.url}
                  // target="_blank"
                >
                  <FontAwesomeIcon icon={faPlay} />
                </a>
                <div className="bnrvdoinnr-cnt">
                  <h3>{homeData?.acf?.banner_watch_video_heading}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
