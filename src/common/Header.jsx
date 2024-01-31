import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ headerMenu, logoImg }) => {
  // console.log(headerMenu, "headerMenu");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(window.scrollY, "klk");
      if (scrollPosition > 98) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add event listener to window scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header_id">
        <div className={`cus_nav_outr ${isSticky ? "sticky" : ""}`}>
          <div className="container">
            <div className="cus_nav_innr">
              <div className="logo_area">
                <Link to="/">
                  <img
                    className="img-fluid"
                    src={logoImg.logo_url}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="nav_area">
                <div className="right_nav">
                  <div className="navbar-header">
                    <nav className="navbar navbar-expand-md">
                      <div
                        id="nav-icon3"
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div
                        className="collapse navbar-collapse main_nav"
                        id="navbarNav"
                      >
                        <ul className="navbar-nav line-outr">
                          {headerMenu?.length !== 0 &&
                            headerMenu?.map((menu, index) => {
                              const partOfUrl = menu?.url?.split("/");
                              const path = partOfUrl[partOfUrl.length - 2];
                              console.log(path, "pathHeader");

                              return (
                                <li
                                  className="nav-item current-menu-item"
                                  key={index}
                                >
                                  <Link className="nav-link" to={`/${path}`}>
                                    {menu?.title}
                                  </Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
