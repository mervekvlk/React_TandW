import React from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import HeaderCart from "./HeaderCart";

function Header() {
  return (
    <>
      <header className="header-area">
        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="hidden-xs col-sm-4 col-lg-4 d-none d-md-block">
                <div className="opening-time">
                  <div className="icon">
                    <i className="fa fa-clock-o" />
                  </div>
                  <p>
                    <span className="opentime">OPENING TIME</span>{" "}
                    <span className="time-top"> 9.00 AM - 10.00 PM</span>
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-md-4 col-lg-4">
                <div className="logo">
                  <a href="/">
                    <img src="src/assets/img/icon/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-4 col-lg-4">
                <div className="input-group form-search" id="search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="search"
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-default button-search"
                      type="button"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-menu-area">
          <div className="container">
            <div className="row">
              <div className=" d-none d-lg-block col-md-9">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li className="active">
                        <a href="/">home </a>
                      </li>

                      <li>
                        <Link to="/Shop">Products</Link>
                        
                        <div className="mega-menu">
                          <Category />
                        </div>
                      </li>
                      <li>
                        <Link to="/Blogs">Blog</Link>
                        
                      </li>
                      <li>
                        <Link to="/About">ABOUT US </Link>
                      
                      </li>
                      <li>
                        <Link to="/Contact">Contact US </Link>
                      
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3">
                <HeaderCart/>
              </div>
            </div>
          </div>
          {/*MOBILE MENU START*/}
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 d-lg-none ">
                <div className="mobile-menu">
                  <nav className="mobile-menu-start">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                        <ul>
                          <li>
                            <a href="index.html">Home page 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home page 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home page 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home page 4</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">clothing </a>
                        <ul>
                          <li>
                            <a href="#">handbags</a>
                            <ul>
                              <li>
                                <a href="#">Blouses And Shirts</a>
                              </li>
                              <li>
                                <a href="#">Clutches</a>
                              </li>
                              <li>
                                <a href="#">Cross Body</a>
                              </li>
                              <li>
                                <a href="#">Satchels</a>
                              </li>
                              <li>
                                <a href="#">Shoulder</a>
                              </li>
                              <li>
                                <a href="#">Toter</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">tops</a>
                            <ul>
                              <li>
                                <a href="#">Evening</a>
                              </li>
                              <li>
                                <a href="#">Long Sleeved</a>
                              </li>
                              <li>
                                <a href="#">Shrot Sleeved</a>
                              </li>
                              <li>
                                <a href="#">Sleeveless</a>
                              </li>
                              <li>
                                <a href="#">T-Shirts</a>
                              </li>
                              <li>
                                <a href="#">Tanks And Camis</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">dresses</a>
                            <ul>
                              <li>
                                <a href="#">Belts</a>
                              </li>
                              <li>
                                <a href="#">Cocktail</a>
                              </li>
                              <li>
                                <a href="#">Day</a>
                              </li>
                              <li>
                                <a href="#">kids</a>
                              </li>
                              <li>
                                <a href="#">Evening</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">accessories</a>
                            <ul>
                              <li>
                                <a href="#">Bras</a>
                              </li>
                              <li>
                                <a href="#">Hair Accessories</a>
                              </li>
                              <li>
                                <a href="#">Hats And Gloves</a>
                              </li>
                              <li>
                                <a href="#">Lifestyle</a>
                              </li>
                              <li>
                                <a href="#">Scarves</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="shop.html">Equipments</a>
                        <ul>
                          <li>
                            <a href="#">bags</a>
                            <ul>
                              <li>
                                <a href="#">Blazers</a>
                              </li>
                              <li>
                                <a href="#">Bootees Bags</a>
                              </li>
                              <li>
                                <a href="#">Jackets</a>
                              </li>
                              <li>
                                <a href="#">Shoes</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">clothing</a>
                            <ul>
                              <li>
                                <a href="#">Blazers</a>
                              </li>
                              <li>
                                <a href="#">Coats &amp; Jackets </a>
                              </li>
                              <li>
                                <a href="#">Jackets</a>
                              </li>
                              <li>
                                <a href="#">Raincoats</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Lingerie</a>
                            <ul>
                              <li>
                                <a href="#">Briefs</a>
                              </li>
                              <li>
                                <a href="#">Cocktail</a>
                              </li>
                              <li>
                                <a href="#">Day</a>
                              </li>
                              <li>
                                <a href="#">Evening</a>
                              </li>
                              <li>
                                <a href="#">Sundresses</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">shoes</a>
                            <ul>
                              <li>
                                <a href="#">Ankle Boots </a>
                              </li>
                              <li>
                                <a href="#">Clog sandals </a>
                              </li>
                              <li>
                                <a href="#">Hats And Gloves</a>
                              </li>
                              <li>
                                <a href="#">Footwear</a>
                              </li>
                              <li>
                                <a href="#">Scarves</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">blog</a>
                          </li>
                          <li>
                            <a href="single-post.html">single post</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">pages</a>
                        <ul>
                          <li>
                            <a href="about.html">about us</a>
                          </li>
                          <li>
                            <a href="account.html">account</a>
                          </li>
                          <li>
                            <a href="blog.html">blog</a>
                          </li>
                          <li>
                            <a href="cart.html">cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">checkout</a>
                          </li>
                          <li>
                            <a href="contact.html">contact us</a>
                          </li>
                          <li>
                            <a href="shop.html">shop grid</a>
                          </li>
                          <li>
                            <a href="shop-list.html">shop list</a>
                          </li>
                          <li>
                            <a href="product.html">single product</a>
                          </li>
                          <li>
                            <a href="single-post.html">single post</a>
                          </li>
                          <li>
                            <a href="wishlist.html">wishlist</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">contact us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/*MOBILE MENU END*/}
        </div>
      </header>
    </>
  );
}

export default Header;
