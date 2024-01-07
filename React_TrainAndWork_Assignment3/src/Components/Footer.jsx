import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="sin-footer">
                  <h5>Accessories</h5>
                  <div className="footer-conten">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic ing elit,
                      sed do eiusmod tempor incididunt ut labor et dolore magna
                      aliqua. Ut enim ad minim veniam quis nostrud exercitation
                      ullamco laboris
                    </p>
                  </div>
                  <div className="social-link ">
                    <div className="single-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                        <span>facebook </span>
                      </a>
                    </div>
                    <div className="single-social">
                      <a href="#">
                        <i className="fa fa-twitter" />
                        <span>twitter </span>
                      </a>
                    </div>
                    <div className="single-social">
                      <a href="#">
                        <i className="fa fa-rss" />
                        <span>rss </span>
                      </a>
                    </div>
                    <div className="single-social">
                      <a href="#">
                        <i className="fa fa-skype" />
                        <span>skype </span>
                      </a>
                    </div>
                    <div className="single-social">
                      <a href="#">
                        <i className="fa fa-dribbble" />
                        <span>dribble</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="sin-footer">
                  <h5>My Account</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                    <li>
                      <a href="#">Wish List</a>
                    </li>
                    <li>
                      <a href="#">Newsletter</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="sin-footer">
                  <h5>information</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="sin-footer">
                  <h5>extras</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Brands</a>
                    </li>
                    <li>
                      <a href="#">Gift Vouchers</a>
                    </li>
                    <li>
                      <a href="#">Affiliates</a>
                    </li>
                    <li>
                      <a href="#">Specials</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="sin-footer">
                  <h5>about us</h5>
                  <div className="footer-static-content">
                    <p className="adress">
                      <i className="fa fa-map-marker" />
                      <span>
                        8901 Marmora Road, Glasgow D04 89 GR, New York{" "}
                      </span>
                    </p>
                    <p className="phone">
                      <i className="fa fa-phone" />
                      <span>
                        (0123)456789
                        <br /> (0987) 654321
                      </span>
                    </p>
                    <p className="email">
                      <i className="fa fa-envelope" />
                      <span>admin@bootexperts.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-lg-6">
                <p>
                  Copyright © 2021{" "}
                  <a target="_blank" href="https://hasthemes.com/">
                    Hasthemes.
                  </a>
                  All rights reserved.
                </p>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-6">
                <div className="footer-payment">
                  <img src="img/icon/payment.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
