import React from "react";
import { Link, useLocation } from "react-router-dom";

const GetStarted = ({ getStarted }) => {
  const { pathname } = useLocation();
  // console.log(pathname, "pathname");
  console.log(getStarted, "getStarted");
  return (
    <>
      {pathname !== "/contact-us" && (
        <section
          className="get_started cmn_pdding"
          style={{
            background: `url("http://omega1ne.com/wp-content/uploads/2024/01/get_started_bg.webp")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container">
            <div
              className="get_started_bg text-center cmn_hdr wht wow fadeInDown"
              data-wow-delay="0.2s"
            >
              <h2>{getStarted?.acf?.get_started_heading}</h2>
              <div className="get_btn">
                <a
                  href={getStarted?.acf?.get_started_button?.url}
                  className="signup_btn"
                >
                  <span>{getStarted?.acf?.get_started_button?.title}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default GetStarted;
