import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/cartSlice";
import Total from "./Total";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      
      {/*SINGLE PRODUCT AREA START*/}
      <section className="cart-page-content">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="cart-wrapper">
                <h3>Shopping Cart </h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td>Image</td>
                        <td>Product Name</td>
                        <td>Model</td>
                        <td>Quantity</td>
                        <td>Unit Price</td>
                        <td>Total</td>
                      </tr>
                    </thead>

                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td className="cart-page-img">
                            <a href="#">
                              <img src={item.photos[0]} alt={item.name} />
                            </a>
                          </td>
                          <td>
                            <a href="#" className="cart-pro-name">
                              {item.name}
                            </a>
                          </td>
                          <td>{item.category}</td>
                          <td>
                            <div className="input-group btn-block">
                              <input
                                type="text"
                                className="form-control"
                                size={1}
                                defaultValue={item.quantity}
                                name={`quantity[${item.id}]`}
                              />
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-primary"
                                  title=""
                                  data-bs-toggle="tooltip"
                                  type="submit"
                                  data-original-title="Update"
                                >
                                  <i className="fa fa-refresh" />
                                </button>
                                <button
                                  onClick={() => handleRemoveFromCart(item.id)}
                                  className="btn btn-danger"
                                  title=""
                                  data-bs-toggle="tooltip"
                                  type="button"
                                  data-original-title="Remove"
                                >
                                  <i className="fa fa-times-circle" />
                                </button>
                              </span>
                            </div>
                          </td>
                          <td className="cart-price">${item.price}</td>
                          <td className="cart-price">
                            ${item.price * item.quantity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Total />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
