import React from "react";
import { useSelector } from "react-redux";

function Total() {

    const totalPrice = useSelector(state => state.cart.totalPrice);


  return (
    <div>
      <div className="cart-bottom-total">
        <div className="table-total  col-md-4 offset-md-8 no-padding">
          <table className=" table table-bordered">
            <tbody>
              
              <tr>
                <td className="text-right">
                  <strong>Total:</strong>
                </td>
                <td className="text-right">${totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="form-submit">
          <input
            type="submit"
            className="btn btn-primary submit pull-right"
            defaultValue="Checkout"
            placeholder="Buy"
          />
        </p>
      </div>
    </div>
  );
}

export default Total;
