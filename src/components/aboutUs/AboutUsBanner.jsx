import React from "react";

const AboutUsBanner = ({ dataForAboutUs }) => {
  return (
    <>
      <section className="banner_sec about_banner">
        <div className="bnr_otr">
          <div className="bnr_img_otr zoom_otr">
            <div className="bnr_pic">
              <img
                effect="blur"
                src={dataForAboutUs?.acf?.banner_image}
                alt="banner_image"
              />
            </div>
          </div>
          <div className="container">
            <div className="bnr_content nw_bnr_cnt cmn_bnr_txt">
              <h1 className="">{dataForAboutUs?.acf?.banner_heading}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsBanner;
