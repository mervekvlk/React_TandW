import React from "react";
import Filter from "./Filter";
import ShopList from "./ShopList";
import ShopGrid from "./ShopGrid";

function StyleTab() {
  return (
    
      <div className="shop-area-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 order-lg-last col-md-12 order-md-first">
              <div className="shop-product">
                <h2>Clothing </h2>
                <div className="shop-short-wrapper">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#grid"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <i className="fa fa-th" aria-hidden="true" />
                    </button>
                    <button
                      className="nav-link active"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#list"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <i className="fa fa-list" aria-hidden="true" />
                    </button>
                  </div>
                  
                  
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade"
                    id="grid"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row">
                      <div >
                        <ShopList/>
                      </div>
                      
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="list"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="single-list-product">
                      
                      
                      {/*SINGLE PRODUCT*/}
                      <div >
                        <ShopGrid/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-lg-3 order-lg-first  order-md-last">
              <Filter/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default StyleTab;
