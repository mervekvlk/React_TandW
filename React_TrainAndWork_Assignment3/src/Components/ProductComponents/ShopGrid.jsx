import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from '../../slices/cartSlice';

function ShopGrid() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {products.map((product) => (
        <div className="row mb-30px" key={product.id}>
          <div className="col-xs-12 col-md-4">
            <div className="product-top">
              <div className="pro-img">
                <a href="#">
                  <img src={product.photos[0]} alt={product.name} />
                </a>
              </div>
              <div className="label_new">
                <span>new</span>
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
            </div>
          </div>
          <div className="col-xs-12 col-md-8">
            <div className="list-detail">
              <div className="name">
                <a href="#">{product.name}</a>
              </div>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </div>
              <div className="price">
                <span className="price-new">${product.price}</span>
              </div>
              <p className="description">
                {product.description}
              </p>
              <div className="pro-bottom">
                <button onClick={() => handleAddToCart(product)} type="button" className="btn-add-card">
                  <i className="fa fa-shopping-cart" /> <span>Add to Cart</span>
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
        </div>
      ))}
    </div>
  );
}

export default ShopGrid;
