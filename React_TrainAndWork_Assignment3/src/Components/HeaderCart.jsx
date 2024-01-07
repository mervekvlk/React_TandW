import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

function HeaderCart() {
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const items = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div>
      <div className=" cart-area">
        <button className="btn dropdown-toggle" type="button">
          <span id="cart-total">
            {" "}
            <span>
              <Link to="/Cart">
                {" "}
                <i className="fa fa-shopping-cart" />
                My Cart{" "}
              </Link>
            </span>
            ${totalPrice}
          </span>
        </button>
        <div className="cart-drop">
          {items.map((item) => (
            <div className="single-cart" key={item.id}>
              <div className="cart-img">
                <img alt="" src="assets/img/product/cart-1.jpg" />
              </div>

              <div className="cart-title">
                <p>
                  <a href="#">{item.name}</a>
                </p>
              </div>
              <div className="cart-price">
                <p>
                  {item.quantity} x $<span>{item.price}</span>
                </p>
              </div>
              <a onClick={() => handleRemoveFromCart(item.id)}>
                <i className="fa fa-times" />
              </a>
            </div>
          ))}
          <div className="cart-bottom">
            <div className="cart-sub-total">
              <p>
                Total <span>${totalPrice}</span>
              </p>
            </div>
            <div className="cart-checkout">
              <a href="">
                <i className="fa fa-shopping-cart" />
                <Link to="/Cart">View Cart</Link>
              </a>
            </div>
            <div className="cart-share">
              <a href="">
                <i className="fa fa-share" />
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCart;
