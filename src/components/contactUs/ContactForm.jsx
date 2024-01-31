import React, { useState } from "react";
import axios from "axios";
import { contact_form_url } from "../../constant/api/Api";
import swal from "sweetalert";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [state, setState] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(true);
    // console.log(formData, "formData");
    axios
      .post(contact_form_url, formData)
      .then((res) => {
        console.log(res.data, "postRes");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        setState(false);
        swal(res.data.message);

        // toast.success(res.data.message, {
        //   // position: toast.POSITION.TOP_RIGHT,
        // });
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  return (
    <>
      <section
        className="getintouch cmn_pdding"
        style={{
          background: `url("https://omega1ne.com/wp-content/uploads/2024/01/from_bg.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container">
          <div className="cmn_hdr text-center">
            <h2 data-aos="fade-up">Get In Touch</h2>
          </div>
          <div className="outr_form" data-aos="fade-up">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="outr_input w50">
                <input
                  id="text_nm"
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="outr_input w50">
                <input
                  id="txt_email"
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="outr_input w50">
                <input
                  id="txt_tel"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="Phone"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="outr_input w50">
                <input
                  id="txt_address"
                  type="Text"
                  name="address"
                  value={formData.address}
                  placeholder="Address"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="outr_input w100">
                <textarea
                  name="message"
                  id="txt_msg"
                  value={formData.message}
                  placeholder="Message"
                  defaultValue={""}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="outr_input cntct_sbmt w100">
                {/* <input
                  id="input_btn"
                  name="inputBtn"
                  type="submit"
                  placeholder="SUBMIT"
                  className="cmn_btn"
                /> */}
                <button
                  id="input_btn"
                  name="inputBtn"
                  type="submit"
                  className="cmn_btn"
                >
                  {state ? (
                    <div className="spinner-border" role="status">
                      {/* <span className="sr-only">Loading...</span> */}
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  <span>SUBMIT</span>
                </button>
                {/* <ToastContainer /> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
