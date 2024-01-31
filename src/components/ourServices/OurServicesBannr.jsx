import React from "react";

const OurServicesBannr = ({ bannrData }) => {
  return (
    <>
      <section className="banner_sec srvc_bnr">
        <div className="bnr_otr">
          <div className="bnr_img_otr zoom_otr">
            <div className="bnr_pic">
              <img src={bannrData?.acf?.banner_image} alt="banner_image" />
            </div>
          </div>
          <div className="container">
            <div className="bnr_content nw_bnr_cnt cmn_bnr_txt">
              <h1 className="">{bannrData?.acf?.banner_content}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicesBannr;
