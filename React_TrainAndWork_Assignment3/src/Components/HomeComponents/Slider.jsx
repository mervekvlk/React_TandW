import React from "react";

function Slider() {
  return (
    <>
      <section className="slider-wrap">
        <div className="slider-area">
          <div className="bend niceties preview-2">
            <div id="ensign-nivoslider" className="slides">
              <img src="src/assets/img/slider1.jpg" alt="" title="#slider-direction-1" />
              <img src="src/assets/img/slider2.jpg" alt="" title="#slider-direction-2" />
            </div>
            {/* direction 1 */}
            <div id="slider-direction-1" className="t-cn slider-direction">
              <div className="slider-progress" />
              <div className="slider-content t-cn s-tb slider-1">
                <div className="title-container s-tb-c title-compress">
                  <h3 className="title1">
                    <span>AUTUMN/WINTER LOOKBOOK</span>
                  </h3>
                  <h2 className="title2">
                    <span>- 2016 COLLECTION -</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* direction 2 */}
            <div id="slider-direction-2" className="slider-direction">
              <div className="slider-progress" />
              <div className="slider-content t-cn s-tb slider-1">
                <div className="title-container s-tb-c title-compress">
                  <h3 className="title1">
                    <span>AUTUMN/WINTER LOOKBOOK</span>
                  </h3>
                  <h2 className="title2">
                    <span>- 2016 COLLECTION -</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
