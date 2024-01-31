import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactDetails = ({ contactData }) => {
  return (
    <>
      <section
        className="contactus cmn_pdding"
        style={{
          background: `url("https://omega1ne.com/wp-content/uploads/2024/01/e.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container">
          <div className="parent_contactus">
            <div className="left-cntctus">
              <div className="lft_cntctus_img" data-aos="fade-left">
                <img
                  src={contactData?.acf?.contact_image}
                  alt="contact_image"
                />
              </div>
            </div>
            <div className="rgt-cntctus">
              <div className="cmn_hdr">
                <h2 data-aos="fade-up">{contactData?.acf?.contact_heading}</h2>
                <p data-aos="fade-up">{contactData?.acf?.contact_content}</p>
              </div>
              <div className="cntct_info">
                <div className="cntct_lst">
                  <div className="cntct_img">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="contct_content cmn_hdr">
                    <h5 className="h5hdng">
                      {contactData?.acf?.address_heading}
                    </h5>
                    <p>{contactData?.acf?.address_content}</p>
                  </div>
                </div>
                <div className="cntct_lst">
                  <div className="cntct_img">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="contct_content cmn_hdr">
                    <h5 className="h5hdng">
                      {contactData?.acf?.email_heading}
                    </h5>
                    <a href={`mailto:${contactData?.acf?.email_content}`}>
                      {contactData?.acf?.email_content}
                    </a>
                  </div>
                </div>
                <div className="cntct_lst">
                  <div className="cntct_img">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="contct_content cmn_hdr">
                    <h5 className="h5hdng">{contactData?.acf?.call_heading}</h5>
                    <a href={`tel:${contactData?.acf?.call_content}`}>
                      {contactData?.acf?.call_content}
                    </a>
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

export default ContactDetails;
