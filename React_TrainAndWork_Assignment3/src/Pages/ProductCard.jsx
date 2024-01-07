import React from "react";

function ProductCard() {
  return (
    <div>
      <>
        
        {/*SINGLE PRODUCT AREA START*/}
        <section className="sin-product-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="zoom-Wrapper">
                      <div id="img-1" className="zoomWrapper single-zoom">
                        <a href="#" className="">
                          <img
                            id="zoom1"
                            src="img/product/z-in4.jpg"
                            data-zoom-image="img/product/big-4.jpg"
                            alt="big-6"
                          />
                        </a>
                      </div>
                      <div className="single-zoom-thumb owl-carousel d-block">
                        <ul className="zoom-slider" id="gallery_01">
                          <li>
                            <a
                              href="#"
                              className="elevatezoom-gallery active"
                              data-update=""
                              data-image="img/product/z-in1.jpg"
                              data-zoom-image="img/product/big-1.jpg"
                            >
                              <img src="img/product/z-in1.jpg" alt="zo-th-1" />
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#"
                              className="elevatezoom-gallery active"
                              data-update=""
                              data-image="img/product/z-in2.jpg"
                              data-zoom-image="img/product/big-2.jpg"
                            >
                              <img src="img/product/z-in2.jpg" alt="zo-th-1" />
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#"
                              className="elevatezoom-gallery active"
                              data-update=""
                              data-image="img/product/z-in3.jpg"
                              data-zoom-image="img/product/big-3.jpg"
                            >
                              <img src="img/product/z-in3.jpg" alt="zo-th-1" />
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#"
                              className="elevatezoom-gallery active"
                              data-update=""
                              data-image="img/product/z-in4.jpg"
                              data-zoom-image="img/product/big-4.jpg"
                            >
                              <img src="img/product/z-in4.jpg" alt="zo-th-1" />
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#"
                              className="elevatezoom-gallery active"
                              data-update=""
                              data-image="img/product/z-in5.jpg"
                              data-zoom-image="img/product/big-5.jpg"
                            >
                              <img src="img/product/z-in5.jpg" alt="zo-th-1" />
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#"
                              className="elevatezoom-gallery active"
                              data-update=""
                              data-image="img/product/z-in1.jpg"
                              data-zoom-image="img/product/big-1.jpg"
                            >
                              <img src="img/product/z-in1.jpg" alt="zo-th-1" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-laft-info">
                      <h2 className="pro-name">Quisque In Arcu</h2>
                      <ul className="list-info-product">
                        <li>
                          Brand: <a href="#">Hèrmes</a>
                        </li>
                        <li className="text_model">Product Code: product 20</li>
                        <li className="text_stock">Availability: In Stock</li>
                      </ul>
                      <div className="price">
                        <span className="price-new">$218.00</span>
                      </div>
                      <div className="group-two-btn">
                        <div className="cart-plus-minus-button">
                          <input
                            type="number"
                            defaultValue={0}
                            name="qtybutton"
                            className="cart-plus-minus"
                          />
                        </div>
                        <div className="btn-group">
                          <button
                            className="btn  btn-lg"
                            id="button-cart"
                            type="button"
                          >
                            Add to Cart
                          </button>
                          <button
                            className="btn btn-default btn-add-wishlish"
                            data-bs-toggle="tooltip"
                            title="add to wishlist"
                            type="button"
                          >
                            <i className="fa fa-heart" />
                          </button>
                          <button
                            className="btn btn-default btn-add-compare"
                            data-bs-toggle="tooltip"
                            title="compare this product"
                            type="button"
                          >
                            <i className="fa fa-exchange" />
                          </button>
                        </div>
                      </div>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <p className="rating-links">
                        <a href="#">1 Review(s)</a>
                        <span className="separator">|</span>
                        <a href="#">Add Your Review</a>
                      </p>
                      <div className="sicial-link">
                        <a href="#">
                          <img src="img/icon/pro-social.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="review-wrapper">
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link active"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#pr-description"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          description
                        </button>
                        <button
                          className="nav-link"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#pr-reviews"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          reviews(1)
                        </button>
                      </div>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                          id="pr-description"
                        >
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque vitae dui eu odio finibus accumsan.
                            Aliquam in odio augue. Proin viverra, urna a
                            pharetra lobortis, felis nunc tempus neque, id
                            malesuada purus urna nec neque. Aliquam fermentum
                            orci sed nibh bibendum accumsan. Duis interdum
                            tristique felis, non vestibulum est ultrices ac.
                            Maecenas blandit elit commodo fringilla sagittis.
                            Nullam vitae ipsum eros. Sed porttitor felis id
                            gravida venenatis. Quisque mattis feugiat neque, et
                            lobortis risus vulputate eu. Etiam justo ligula,
                            accumsan non ipsum eget, mattis accumsan orci.
                            Phasellus vitae nunc vulputate, sollicitudin lacus
                            at, fermentum massa. Praesent mattis neque lorem,
                            lobortis congue urna placerat ut. Phasellus in
                            feugiat enim.Pellentesque vehicula, eros nec aliquet
                            laoreet, odio metus consectetur orci, ut accumsan
                            purus eros eu mi. Duis sed porta orci. Duis
                            pulvinar, libero id lobortis scelerisque, tellus
                            felis volutpat diam, ut accumsan justo turpis non
                            neque. Phasellus volutpat dictum sem, at condimentum
                            metus. Phasellus feugiat hendrerit nisi nec
                            venenatis. Cras sollicitudin diam tincidunt sodales
                            consequat. Sed sit amet mi urna. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Quisque vitae
                            dui eu odio finibus accumsan. Aliquam in odio augue.
                            Proin viverra, urna a pharetra lobortis, felis nunc
                            tempus neque, id malesuada purus urna nec neque.
                            Aliquam fermentum orci sed nibh bibendum accumsan.
                            Duis interdum tristique felis, non vestibulum est
                            ultrices ac. Maecenas blandit elit commodo fringilla
                            sagittis. Nullam vitae ipsum eros. Sed porttitor
                            felis id gravida venenatis. Quisque mattis feugiat
                            neque, et lobortis risus vulputate eu. Etiam justo
                            ligula, accumsan non ipsum eget, mattis accumsan
                            orci. Phasellus vitae nunc vulputate, sollicitudin
                            lacus at, fermentum massa. Praesent mattis neque
                            lorem, lobortis congue urna placerat ut. Phasellus
                            in feugiat enim.Pellentesque vehicula, eros nec
                            aliquet laoreet, odio metus consectetur orci, ut
                            accumsan purus eros eu mi. Duis sed porta orci. Duis
                            pulvinar, libero id lobortis scelerisque, tellus
                            felis volutpat diam, ut accumsan justo turpis non
                            neque. Phasellus volutpat dictum sem, at condimentum
                            metus. Phasellus feugiat hendrerit nisi nec
                            venenatis. Cras sollicitudin diam tincidunt sodales
                            consequat. Sed sit amet mi urna
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                          id="pr-reviews"
                        >
                          <div className="product-comment">
                            <div className="reviewer-name">
                              <span>jack sparrow</span>
                              <span className="floatright">10/11/2015</span>
                            </div>
                            <div className="comment-a">
                              <p>
                                It is part of Australia's network of offshore
                                processing centres for irregular migrants who
                                arrive by boat, and also houses New Zealanders
                                facing deportation from Australia.
                              </p>
                              <div className="comment-text">
                                <div className="rating">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                            </div>
                            <div className="add-review">
                              <h2>Write a review</h2>
                              <form
                                id="form-review"
                                className="form-horizontal"
                              >
                                <p className="comment-form-author">
                                  <label>
                                    Name <span className="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-required="true"
                                  />
                                </p>
                                <p className="comment-form-email">
                                  <label>
                                    Email <span className="required">*</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </p>
                                <p className="product-form-comment">
                                  <label>Your Review</label>
                                  <textarea
                                    className="form-control"
                                    cols={45}
                                    rows={8}
                                    aria-required="true"
                                    defaultValue={""}
                                  />
                                </p>
                              </form>
                              <div className="pull-right">
                                <button
                                  className="btn btn-primary"
                                  data-loading-text="Loading..."
                                  id="button-review"
                                  type="button"
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="title-with-bg style-three">
                  <span>Accessories</span>
                </div>
                <div className="sidebar-product owl-carousel">
                  {/*single product*/}
                  <div className="sin-product">
                    <div className="product-top">
                      <div className="pro-img">
                        <a href="#">
                          <img alt="" src="img/product/h1.jpg" />
                        </a>
                      </div>
                      <div className="label_new">
                        <span>new</span>
                      </div>
                      <div className="name">
                        <a href="#">Deliver Wide</a>
                      </div>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price">
                        <span className="price-new">$218.00</span>
                      </div>
                    </div>
                  </div>
                  {/*single product*/}
                  <div className="sin-product">
                    <div className="product-top">
                      <div className="pro-img">
                        <a href="#">
                          <img alt="" src="img/product/m1.jpg" />
                        </a>
                      </div>
                      <div className="label_new">
                        <span>new</span>
                      </div>
                      <div className="name">
                        <a href="#">Deliver Wide</a>
                      </div>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price">
                        <span className="price-new">$218.00</span>
                      </div>
                    </div>
                  </div>
                  {/*single product*/}
                  <div className="sin-product">
                    <div className="product-top">
                      <div className="pro-img">
                        <a href="#">
                          <img alt="" src="img/product/k1.jpg" />
                        </a>
                      </div>
                      <div className="label_new">
                        <span>new</span>
                      </div>
                      <div className="name">
                        <a href="#">Deliver Wide</a>
                      </div>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price">
                        <span className="price-new">$218.00</span>
                      </div>
                    </div>
                  </div>
                  {/*single product*/}
                  <div className="sin-product">
                    <div className="product-top">
                      <div className="pro-img">
                        <a href="#">
                          <img alt="" src="img/product/e1.jpg" />
                        </a>
                      </div>
                      <div className="label_new">
                        <span>new</span>
                      </div>
                      <div className="name">
                        <a href="#">Deliver Wide</a>
                      </div>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price">
                        <span className="price-new">$218.00</span>
                      </div>
                    </div>
                  </div>
                  {/*single product*/}
                  <div className="sin-product">
                    <div className="product-top">
                      <div className="pro-img">
                        <a href="#">
                          <img alt="" src="img/product/c1.jpg" />
                        </a>
                      </div>
                      <div className="label_new">
                        <span>new</span>
                      </div>
                      <div className="name">
                        <a href="#">Deliver Wide</a>
                      </div>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price">
                        <span className="price-new">$218.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*banner*/}
                <div className="sing-banner">
                  <a href="#">
                    <img alt="" src="img/banner/banner10.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*SINGLE PRODUCT AREA END*/}
      </>
    </div>
  );
}

export default ProductCard;
