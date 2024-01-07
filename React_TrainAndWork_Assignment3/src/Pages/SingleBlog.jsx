import React from "react";

function SingleBlog() {
  return (
    <div>
      <section className="blog-page-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="blog-wrapper">
                <div className="single-blog">
                  <div className="sin-post-image">
                    <img src="img/blog1.jpg" alt="" />
                  </div>
                  <div className="blog-detail">
                    <h3 className="blog-heading">THE SAMPLE HEADING TITLE</h3>
                    <div className="blog-meta">
                      <span className="author-link">
                        By{" "}
                        <a rel="author" title="Posts by admin" href="#">
                          admin
                        </a>
                      </span>
                      <span className="published">
                        <i className="fa fa-clock-o" />
                        Apr 01, 2014
                      </span>
                      <span className="comment-count">
                        <i className="fa fa-comment-o" />
                        <a title="Comment on Gallery Post Type" href="#">
                          {" "}
                          4 comments
                        </a>
                      </span>
                    </div>
                    <div className="blog-content">
                      <p>
                        {" "}
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming id quod mazim placerat facer
                        possim assum. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                        amet. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Officia libero expedita
                        nulla, odit ratione minus sunt sequi perspiciatis illum
                        delectus doloremque adipisci aut ut illo error esse
                        corrupti accusantium modi.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Officia libero expedita
                        nulla, odit ratione minus sunt sequi perspiciatis illum
                        delectus doloremque adipisci aut ut illo error esse
                        corrupti accusantium modi.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Officia libero expedita
                        nulla, odit ratione minus sunt sequi perspiciatis illum
                        delectus doloremque adipisci aut ut illo error esse
                        corrupti accusantium modi.
                      </p>
                      <blockquote>
                        <p>
                          Quisque semper nunc vitae erat pellentesque, ac
                          placerat arcu consectetur. In venenatis elit ac
                          ultrices convallis. Duis est nisi, tincidunt ac urna
                          sed, cursus blandit lectus. In ullamcorper sit amet
                          ligula ut eleifend. Proin dictum tempor ligula, ac
                          feugiat metus. Sed finibus tortor eu scelerisque
                          scelerisque.
                        </p>
                      </blockquote>
                      <p>
                        Suspendisse turpis ipsum, tempus in nulla eu, posuere
                        pharetra nibh. In dignissim vitae lorem non mollis.
                        Praesent pretium tellus in tortor viverra condimentum.
                        Nullam dignissim facilisis nisl, accumsan placerat justo
                        ultricies vel. Vivamus finibus mi a neque pretium, ut
                        convallis dui lacinia. Morbi a rutrum velit. Curabitur
                        sagittis quam quis consectetur mattis. Aenean sit amet
                        quam vel turpis interdum sagittis et eget neque. Nunc
                        ante quam, luctus et neque a, interdum iaculis metus.
                        Aliquam vel ante mattis, placerat orci id, vehicula
                        quam. Suspendisse quis eros cursus, viverra urna sed,
                        commodo mauris. Cras diam arcu, fringilla a sem
                        condimentum, viverra facilisis nunc. Curabitur vitae
                        orci id nulla maximus maximus. Nunc pulvinar
                        sollicitudin molestie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="comments">
                <div className="comments-list">
                  <h4 className="heading">
                    <span>4 Comments</span>
                  </h4>
                  <div className="commentlists-div">
                    <ol className="commentlists">
                      <li className="sin-comment  depth-1">
                        <div className="the-comment">
                          <div className="avatar">
                            <img alt="" src="img/user-1.jpg" />
                          </div>
                          <div className="comment-box">
                            <div className="comment-author meta">
                              <p className="com-name">
                                <strong>Salim Rana</strong>
                              </p>
                              <p>
                                6 months ago{" "}
                                <a href="#" className="comment-reply-link">
                                  {" "}
                                  Reply{" "}
                                </a>
                              </p>
                            </div>
                            <div className="comment-text">
                              <p>
                                Donec ac libero nisl. Etiam ornare sollicitudin
                                ultricies. Mauris ac purus eros, ac lobortis
                                tortor. Maecenas sed interdum turpis!
                              </p>
                            </div>
                          </div>
                        </div>
                        <ul className="children-comment">
                          <li className="comment odd alt depth-2">
                            <div className="the-comment">
                              <div className="avatar">
                                <img alt="" src="img/user-2.jpg" />
                              </div>
                              <div className="comment-box">
                                <div className="comment-author meta">
                                  <p className="com-name">
                                    <strong>Nirob</strong>
                                  </p>
                                  <p>
                                    {" "}
                                    9 months ago
                                    <a href="#" className="comment-reply-link">
                                      {" "}
                                      Reply{" "}
                                    </a>
                                  </p>
                                </div>
                                <div className="comment-text">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec sed sollicitudin
                                    lectus. Nunc ut vulputate nisi. Donec nec
                                    tincidunt ligula, non porta mi. Etiam eu
                                    nunc eu nibh mattis ullamcorper nec et
                                    felis. Quisque venenatis eros eget neque
                                    iaculis, sed euismod dui elementum
                                    <br />
                                  </p>
                                </div>
                              </div>
                            </div>
                            <ul className="children-comment">
                              <li className="depth-3">
                                <div className="the-comment">
                                  <div className="avatar">
                                    <img alt="" src="img/user-1.jpg" />
                                  </div>
                                  <div className="comment-box">
                                    <div className="comment-author meta">
                                      <p className="com-name">
                                        <strong>Salim Rana</strong>
                                      </p>
                                      <p>
                                        6 months ago{" "}
                                        <a
                                          href="#"
                                          className="comment-reply-link"
                                        >
                                          {" "}
                                          Reply{" "}
                                        </a>
                                      </p>
                                    </div>
                                    <div className="comment-text">
                                      <p>
                                        Nullam vulputate purus quis maximus
                                        imperdiet. Nam sit amet egestas nulla,
                                        vitae rhoncus tortor. Duis tortor
                                        sapien, vestibulum ac lorem sit amet,
                                        posuere elementum justo. Suspendisse
                                        iaculis est et neque lobortis
                                        condimentum. Quisque rhoncus lectus a
                                        rhoncus tincidunt.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* #comment-## */}
                            </ul>
                            {/* .children */}
                          </li>
                          {/* #comment-## */}
                        </ul>
                        {/* .children */}
                      </li>
                      {/* #comment-## */}
                      <li className="sin-comment  depth-1">
                        <div className="the-comment">
                          <div className="avatar">
                            <img alt="" src="img/user-3.png" />
                          </div>
                          <div className="comment-box">
                            <div className="comment-author meta">
                              <p className="com-name">
                                <strong>Sajib Talukder</strong>
                              </p>
                              <p>
                                6 months ago
                                <a href="#" className="comment-reply-link">
                                  {" "}
                                  Reply
                                </a>
                              </p>
                            </div>
                            <div className="comment-text">
                              <p>
                                Vivamus in semper lorem, id feugiat mi. Ut eu
                                sem lorem. Aliquam vel libero mauris. Integer
                                pellentesque quis mauris eu scelerisque.
                                Vestibulum sodales, velit ut scelerisque mollis,
                                elit est facilisis purus, sed sodales velit enim
                                et nibh. Curabitur id dui id elit tempus
                                consequat sit amet sit amet sapien.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* #comment-## */}
                    </ol>
                  </div>
                </div>
                <div className="commentform">
                  <div className="comment-respond">
                    <div className="comment-reply-title">
                      <h4 className="heading">
                        <span>Leave a Comment</span>
                        <small>
                          <a
                            style={{ display: "none" }}
                            href="#"
                            id="cancel-comment-reply-link"
                            rel="nofollow"
                          >
                            Cancel reply
                          </a>
                        </small>
                      </h4>
                    </div>
                    <form
                      className="comment-form"
                      id="commentform"
                      method="post"
                      action="#"
                    >
                      <p className="h-info">
                        Your email address will not be published.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="author">Name:</label>
                            <input
                              type="text"
                              aria-required="true"
                              defaultValue=""
                              id="author"
                              className="form-control"
                              name="author"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                              type="text"
                              aria-required="true"
                              defaultValue=""
                              className="form-control"
                              name="email"
                              id="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="url">Website:</label>
                        <input
                          type="text"
                          defaultValue=""
                          className="form-control"
                          name="url"
                          id="url"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="comment" className="field-label">
                          Comment:
                        </label>
                        <textarea
                          aria-required="true"
                          name="comment"
                          className="form-control"
                          id="comment"
                          rows={8}
                          defaultValue={""}
                        />
                      </div>
                      <p className="form-submit">
                        <input
                          type="submit"
                          defaultValue="Post Comment"
                          className="btn btn-primary submit"
                          id="submit"
                          name="submit"
                        />
                        <input
                          type="hidden"
                          id="comment_post_ID"
                          defaultValue={326}
                          name="comment_post_ID"
                        />
                        <input
                          type="hidden"
                          defaultValue={0}
                          id="comment_parent"
                          name="comment_parent"
                        />
                      </p>
                      <p style={{ display: "none" }}>
                        <input
                          type="hidden"
                          defaultValue="28afd9e0d9"
                          name="akismet_comment_nonce"
                          id="akismet_comment_nonce"
                        />
                      </p>
                      <p style={{ display: "none" }}>
                        <input
                          type="hidden"
                          defaultValue={114}
                          name="ak_js"
                          id="ak_js"
                        />
                      </p>
                    </form>
                  </div>
                  {/* #respond */}
                </div>
                {/* end commentform */}
              </div>
            </div>
            <div className="col-md-3">
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
    </div>
  );
}

export default SingleBlog;
