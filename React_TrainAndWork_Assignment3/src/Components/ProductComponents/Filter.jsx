import React from "react";

function Filter() {
  return (
    <div>
      <div >
        <div className="filter-area">
          <div className="title-with-bg">
            <span>Filters product</span>
          </div>

          <div className="color-filter">
            <p className="sub-title">color</p>
            <div className="color-filter">
              <div className="sin-color">
                <span className="circle" />
                <span className="filter-name">Black(2)</span>
              </div>
              <div className="sin-color">
                <span className="circle" />
                <span className="filter-name">blue (2)</span>
              </div>
              <div className="sin-color">
                <span className="circle" />
                <span className="filter-name">brown (3)</span>
              </div>
              <div className="sin-color">
                <span className="circle" />
                <span className="filter-name">green (2)</span>
              </div>
              <div className="sin-color">
                <span className="circle" />
                <span className="filter-name">orange (2)</span>
              </div>
              <div className="sin-color">
                <span className="circle" />
                <span className="filter-name">pink (2)</span>
              </div>
              <div className="sin-color">
                <span className="circle" />
                <span className="filter-name">red (6)</span>
              </div>
              <div className="sin-color">
                <span className="circle" />
                <span className="filter-name">yellow (3)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
