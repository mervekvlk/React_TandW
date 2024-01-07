import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "/src/slices/blogSlice.jsx";

function BlogPage() {
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogs.blogs);
  const blogStatus = useSelector((state) => state.blogs.status);
  const error = useSelector((state) => state.blogs.error);

  useEffect(() => {
    if (blogStatus === "idle") {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  return (
    <div>
      <section className="blog-page-content">
        <div className="container">
          <div className="row">
            <div className="">
              <h3>Blog</h3>

              <div className="blog-wrapper">
                {/*SINGLE BLOG*/}

                {blogStatus === "loading" && <div>Loading...</div>}
                {blogStatus === "succeeded" &&
                  blogs.map((blog) => (
                    <div className="single-blog" key={blog.id}>
                      <div className="row">
                        <div className="col-lg-5">
                          <img src={blog.image} alt="" />
                        </div>
                        <div className="col-lg-7">
                          <div className="blog-detail">
                            <h3 className="blog-heading">
                              <a href="#">THE SAMPLE HEADING TITLE</a>
                            </h3>
                            <div className="blog-meta">
                              <span className="author-link">
                                By{" "}
                                <a rel="author" title="Posts by admin" href="#">
                                  {blog.author}
                                </a>
                              </span>
                              <span className="published">
                                <i className="fa fa-clock-o" />
                                {blog.post_date}
                              </span>
                              <span className="comment-count">
                                <i className="fa fa-comment-o" />
                                <a
                                  title="Comment on Gallery Post Type"
                                  href="#"
                                >
                                  {" "}
                                  4 comments
                                </a>
                              </span>
                            </div>
                            <div className="blog-content">
                              {blog.description}
                            </div>
                            <a className="read-more" href="#">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {blogStatus === "failed" && <div>Error: {error}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
