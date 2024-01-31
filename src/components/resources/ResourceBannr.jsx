import React from "react";

export const ResourceBannr = ({ bannrData }) => {
  return (
    <>
      <section className="banner_sec resource_bnr" id="resource_bnnr">
        <div className="bnr_otr">
          <div className="bnr_img_otr zoom_otr">
            <div className="bnr_pic">
              <img src={bannrData?.acf?.banner_image} alt="bannrData" />
            </div>
          </div>
          <div className="container">
            <div className="bnr_content cmn_bnr_txt">
              <h1 className="">{bannrData?.acf?.banner_heading}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
