import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faSpinnerThird,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { subscription_url } from "../constant/api/Api";
import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Footer = ({ footerMenu, registerField, footerLogo }) => {
  const [email, setEmail] = useState("");
  // const [subscriptionMsg, setSubscriptionMsg] = useState("");
  // console.log(footerMenu, "footerMenu");
  const [state, setState] = useState(false);

  const handleSubmit = (e) => {
    // console.log(email, "email");
    setState(true);
    e.preventDefault();
    axios
      .post(subscription_url, { email })
      .then((res) => {
        // console.log(res.data, "subs");
        // setSubscriptionMsg(res.data.message);
        setEmail("");
        setState(false);
        swal(res.data.message);
        // toast.success(res.data.message, {
        //   // position: toast.POSITION.TOP_RIGHT,
        // });
      })
      .catch((err) => console.log(err, "error"));
  };

  const { pathname } = useLocation();
  // console.log(pathname, "lcl");

  return (
    <>
      <footer
        className={`cmn_footer ${
          pathname === "/contact-us" ? "cntct_footer" : ""
        }`}
        style={{
          background: `url("http://omega1ne.com/wp-content/uploads/2024/01/footer_bg.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="top_ftr">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="ftr_clmn wow fadeInLeft" data-wow-delay="0.2s">
                  <div className="ftr_logo">
                    <Link to="/">
                      <img src={footerLogo.logo_url} alt="footer-logo" />
                    </Link>
                  </div>
                  <div className="ftr_para">
                    <p>{registerField?.site_cntnt}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="ftr_clmn wow fadeInUp" data-wow-delay="0.3s">
                  <div className="ftr_hdng cmn_hdr wht">
                    <h4>Contact Us</h4>
                  </div>
                  <div className="ftr_list">
                    <ul>
                      <li>
                        <span className="ftr_icon">
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <span className="ftr_plc">North America : </span>
                        <a href={`tel:${registerField?.footer_callpart1}`}>
                          {registerField?.footer_callpart1}
                        </a>
                      </li>
                      <li>
                        <span className="ftr_icon">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <a href={`mailto:${registerField?.emailpart}`}>
                          {registerField?.emailpart}
                        </a>
                      </li>
                      <li>
                        <span>
                          <span className="ftr_icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                          </span>
                        </span>
                        {registerField?.address_part}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2 offset-md-1">
                <div className="ftr_clmn wow fadeInDown" data-wow-delay="0.2s">
                  <div className="ftr_hdng cmn_hdr wht">
                    <h4>About Us</h4>
                  </div>
                  <div className="ftr_list">
                    <ul>
                      {footerMenu &&
                        footerMenu.map((footer, index) => {
                          console.log(footer, "footer001");
                          const partOfUrl = footer?.url?.split("/");
                          const path = partOfUrl[partOfUrl.length - 2];
                          return (
                            <li key={index}>
                              <Link
                                to={footer.title === "HOME" ? "/" : `${path}`}
                              >
                                {footer.title}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="ftr_clmn wow fadeInRight" data-wow-delay="0.3s">
                  <div className="ftr_hdng cmn_hdr wht">
                    <h4>Newsletter</h4>
                  </div>
                  <div className="ftr_para">
                    <p>
                      Follow our newsletter to stay updated Omega 1ne health and
                      wellness company
                    </p>
                  </div>
                  <div className="ftr_form">
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="ftr_mail">
                        <input
                          className="ftr_input"
                          type="email"
                          name="email"
                          value={email}
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mail_sbmt">
                        <button type="submit">
                          {state ? (
                            <div className="spinner-border" role="status">
                              {/* <span className="sr-only">Loading...</span> */}
                            </div>
                          ) : (
                            ""
                          )}{" "}
                          <span>SUBSCRIBE</span>
                        </button>
                        {/* <ToastContainer /> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btm_ftr">
          <div className="container">
            <div className="ftr_social_icns">
              <ul>
                <li>
                  <a href={registerField?.instagram}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href={registerField?.pinterest}>
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                </li>
                <li>
                  <a href={registerField?.facebook}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href={registerField?.twitter}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="ftr_co wow fadeInUp" data-wow-delay="0.2s">
              <p>
                © {new Date().getFullYear()} Copyright{" "}
                <Link to="/">Omega 1ne</Link> All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
