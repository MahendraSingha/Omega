import React, { useState, useEffect, lazy } from "react";
import axios from "axios";
import "./App.css";

import "./assets/css/custom.css";
import "./assets/css/responsive.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ServicePage from "./pages/ServicePage";
import Resources from "./pages/Resources";
import ContactUs from "./pages/ContactUs";
import Testimonial from "./pages/Testimonial";
import {
  about_us_url,
  client_testimonial_url,
  contact_url,
  footer_menu,
  header_menu_url,
  home_page_bannr_img_url,
  home_page_url,
  omega_logo,
  our_services_url,
  our_solutions_url,
  register_field_url,
  resource_url,
  services_url,
  testimonial_url,
  trending_resource_url,
} from "./constant/api/Api";
import GetStarted from "./common/GetStarted";
import Loader from "./common/Loader";


function App() {

  const [data, setData] = useState({
    ourServices: null,
    homePage: null,
    ourSolutions: null,
    clientTestimonial: null,
    headerMenu: null,
    omegaLogo: null,
    footerMenu: null,
    registerField: null,
    aboutUsData: null,
    servicesData: null,
    testimonialData: null,
    resourceData: null,
    trendingResourceData: null,
    contactData: null,
    homePageBnnrImgData: null
  });


  useEffect(() => {
    const allHomeData = async () => {
      try {
        const [
          our_servicesRes,
          home_pageRes,
          our_solutionsRes,
          client_testimonialRes,
          header_menuRes,
          omega_logoRes,
          footer_menuRes,
          register_fieldRes,
          about_usRes,
          servicesRes,
          testimonialRes,
          resourceRes,
          trending_resourceRes,
          contactRes,
          home_page_bannr_imgRes
        ] = await axios.all([
          axios.get(our_services_url),
          axios.get(home_page_url),
          axios.get(our_solutions_url),
          axios.get(client_testimonial_url),
          axios.get(header_menu_url),
          axios.get(omega_logo),
          axios.get(footer_menu),
          axios.get(register_field_url),
          axios.get(about_us_url),
          axios.get(services_url),
          axios.get(testimonial_url),
          axios.get(resource_url),
          axios.get(trending_resource_url),
          axios.get(contact_url),
          axios.get(home_page_bannr_img_url)
        ])

        console.log(header_menuRes, 'header_menuRes')


        setData({
          ...data,
          ourServices: our_servicesRes.data,
          homePage: home_pageRes.data,
          ourSolutions: our_solutionsRes.data,
          clientTestimonial: client_testimonialRes.data,
          headerMenu: header_menuRes.data,
          omegaLogo: omega_logoRes.data,
          footerMenu: footer_menuRes.data,
          registerField: register_fieldRes.data,
          aboutUsData: about_usRes.data,
          servicesData: servicesRes.data,
          testimonialData: testimonialRes.data,
          resourceData: resourceRes.data,
          trendingResourceData: trending_resourceRes.data,
          contactData: contactRes.data,
          homePageBnnrImgData: home_page_bannr_imgRes.data
        });
      } catch (error) {
        console.log(error);
      }
    };
    allHomeData();
  }, []);




  return (
    <div id='parent' className="App">
      {(data.ourServices &&
        data.homePage &&
        data.ourSolutions &&
        data.clientTestimonial &&
        data.headerMenu &&
        data.omegaLogo &&
        data.footerMenu &&
        data.registerField &&
        data.aboutUsData &&
        data.servicesData &&
        data.testimonialData &&
        data.resourceData &&
        data.trendingResourceData &&
        data.contactData) !== null ? (
        <BrowserRouter>
          <Header headerMenu={data.headerMenu} logoImg={data.omegaLogo} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  ourServices={data.ourServices}
                  homePage={data.homePage}
                  ourSolutions={data.ourSolutions}
                  clientTestimonial={data.clientTestimonial}
                  homePageBnnrImgData={data.homePageBnnrImgData}
                />
              }
            />
            <Route
              path="/about-us"
              element={<AboutUs aboutUsContent={data.aboutUsData} />}
            />
            <Route
              path="/services"
              element={<ServicePage servicesData={data.servicesData} />}
            />
            <Route
              path="/testimonial"
              element={
                <Testimonial
                  testimonialData={data.testimonialData}
                  clientTestimonial={data.clientTestimonial}
                />
              }
            />
            <Route
              path="/resources"
              element={
                <Resources
                  resourceData={data.resourceData}
                  trendingResourceData={data.trendingResourceData}
                />
              }
            />
            <Route
              path="/contact-us"
              element={<ContactUs contactData={data.contactData} />}
            />
          </Routes>
          <GetStarted getStarted={data.homePage} />
          <Footer
            footerMenu={data.footerMenu}
            registerField={data.registerField}
            footerLogo={data.omegaLogo}
          />
        </BrowserRouter>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
