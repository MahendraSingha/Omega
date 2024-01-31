import React from "react";

const Loader = () => {
  return (
    <>
      <div id="pre_Loader">
        <div className="spinnerContainer">
          <div className="spinner"></div>
          <div className="loader">
            <p>Loading</p>
            <div className="words">
              <span className="word">Omega</span>
              <span className="word">1</span>
              <span className="word">n</span>
              <span className="word">e</span>
              <span className="word">Omega 1ne</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
