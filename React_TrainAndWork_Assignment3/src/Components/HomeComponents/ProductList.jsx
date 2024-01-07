import React from "react";

function ProductList() {
  return (
    <div>
      <div className="product-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-button">
                <div
                  className="list-group tab-top"
                  id="list-tab"
                  role="tablist"
                >
                  <a
                    className="list-item active"
                    id="list-home-list"
                    data-bs-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="list-home"
                  >
                    latest
                  </a>
                  <a
                    className="list-item"
                    id="list-profile-list"
                    data-bs-toggle="list"
                    href="#list-profile"
                    role="tab"
                    aria-controls="list-profile"
                  >
                    bestseller
                  </a>
                  <a
                    className="list-item"
                    id="list-messages-list"
                    data-bs-toggle="list"
                    href="#list-messages"
                    role="tab"
                    aria-controls="list-messages"
                  >
                    sale
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <div className="tab-carousel-start owl-carousel">
                    {/* Product start */}
                  <div className="sin-product">
                    <div className="product-top">
                      <div className="pro-img">
                        <a href="#">
                          <img
                            className="image1"
                            src="src/assets/img/product/e1.jpg"
                            alt=""
                          />
                          <img
                            className="image2"
                            src="src/assets/img/product/e2.jpg"
                            alt=""
                          />
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
                      <div className="button-group1">
                        <button
                          title="Add to Wish List"
                          data-bs-toggle="tooltip"
                          type="button"
                          className="btn-wishlist"
                        >
                          <i className="fa fa-heart" />
                        </button>
                        <button
                          title="Compare this Product"
                          data-bs-toggle="tooltip"
                          type="button"
                          className="btn-compare"
                        >
                          <i className="fa fa-exchange" />
                        </button>
                      </div>
                      <div className="pro-bottom">
                        <button type="button" className="btn-add-card">
                          <i className="fa fa-shopping-cart" />{" "}
                          <span>Add to Cart</span>
                        </button>
                        <button
                          type="button"
                          className="btn-quickview"
                          data-bs-target="#productModal"
                          data-bs-toggle="modal"
                        >
                          <i className="fa fa-search-plus" />
                          Quick View
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Product End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
