import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchClients } from "../../slices/clientSlice";

function Client() {
  const dispatch = useDispatch();

  const clients = useSelector((state) => state.clients.clients);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <div class="client">
      <div class="container">
        <div class="row">
          <div class="client-carousel owl-carousel">
            {clients.map((client) => (
            <div class="col-md-12" key={client.id}>
              <div class="single-client">
                <a>
                  <img src={client.image} alt="" />
                </a>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
