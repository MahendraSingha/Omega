import React, { useEffect } from "react";
import ContactBnr from "../components/contactUs/ContactBnr";
import ContactDetails from "../components/contactUs/ContactDetails";
import ContactForm from "../components/contactUs/ContactForm";
import ContactLocation from "../components/contactUs/ContactLocation";

const ContactUs = ({ contactData }) => {
  useEffect(() => {
    window.scrollTo(1, 1);
  }, []);

  return (
    <>
      <ContactBnr contactData={contactData} />
      <ContactDetails contactData={contactData} />
      <ContactForm />
      <ContactLocation contactData={contactData} />
    </>
  );
};

export default ContactUs;
