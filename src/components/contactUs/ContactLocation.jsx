import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactLocation = ({ contactData }) => {
  return (
    <>
      <section
        className="map cmn_pdding"
        style={{
          background: `url("https://omega1ne.com/wp-content/uploads/2024/01/map_bg.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container">
          <div className="cmn_hdr text-center">
            <h2>{contactData?.acf?.location_heading}</h2>
          </div>
          <div className="mapoutr">
            <div className="map_button">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="map_image">
              <img
                src={contactData?.acf?.location_image}
                alt="location_image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactLocation;
