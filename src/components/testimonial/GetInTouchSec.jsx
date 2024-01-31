import React, { useState } from "react";

import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GetInTouchSec = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage; //6
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClickForLeft = () => {
    // console.log("previous", "pre");
    if (currentPage === 1) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickForRight = () => {
    // console.log("right", "right");
    if (currentPage === pageNumbers.length) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <section className="tstcl_touch" style={{ backgroundSize: "100% 100%" }}>
        <div className="container">
          <div className="cmn_hdr text-center">
            <h2 data-aos="fade-up">Client Testimonials</h2>
          </div>
          <div className="or-srvc-mn">
            <div className="or-srvc-flx">
              {currentPosts &&
                currentPosts.map((post, index) => {
                  // console.log(post, "post");
                  return (
                    <div
                      key={index}
                      className="or-srvc-prt wow fadeInUp"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="tstmnl_clnt_img_dtls">
                        <div className="or-srvc-img">
                          <div className="or-srvc-pic">
                            <img src={post?.acf?.image} alt="tstcl-1" />
                          </div>
                        </div>
                        <div className="tstmnl_clnt_img_txt">
                          <div className="stars">
                            <span>
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span>
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                          </div>
                          <div className="cmn_hdr">
                            <h4>{post?.title?.rendered}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="cmn_hdr">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post?.content?.rendered,
                          }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="tstmnl_pgtn_otr">
              <div aria-label="Page navigation example">
                <ul className="pagination wow fadeInUp" data-wow-delay="0.2s">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript:void(0);"
                      aria-label="Previous"
                      onClick={() => handleClickForLeft()}
                    >
                      <span aria-hidden="true">
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </span>
                    </a>
                  </li>

                  {pageNumbers &&
                    pageNumbers.map((number, i) => {
                      //   console.log(pageNumbers, "pageNumbers");
                      return (
                        <li
                          key={i}
                          className={`page-item ${
                            currentPage === number ? "active" : ""
                          }`}
                          aria-current={currentPage === 1 ? "page" : ""}
                        >
                          <a
                            className="page-link"
                            href="javascript:void(0);"
                            onClick={() => paginate(number)}
                          >
                            {number}
                          </a>
                        </li>
                      );
                    })}
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript:void(0);"
                      aria-label="Next"
                      onClick={() => handleClickForRight()}
                    >
                      <span aria-hidden="true">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouchSec;
