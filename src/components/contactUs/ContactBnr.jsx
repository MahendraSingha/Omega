import React from "react";

const ContactBnr = ({ contactData }) => {
  return (
    <>
      <section className="banner_sec contact_bnr">
        <div className="bnr_otr">
          <div className="bnr_img_otr zoom_otr">
            <div className="bnr_pic">
              <img src={contactData?.acf?.banner_image} alt="banner_image" />
            </div>
          </div>
          <div className="container">
            <div className="bnr_content cmn_bnr_txt">
              <h1 className="">{contactData?.acf?.banner_heading}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBnr;
