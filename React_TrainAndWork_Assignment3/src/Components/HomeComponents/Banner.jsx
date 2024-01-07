import React from "react";

function Banner() {
  return (
    <div>
      <div className="banner-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="sing-banner">
                <a href="#">
                  <img src="src/assets/img/banner1.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="sing-banner">
                <a href="#">
                  <img src="/src/assets/img/banner2.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
