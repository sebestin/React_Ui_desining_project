import React from "react";
import "./statusCounter.css"
const StatusCounter = () => {
  return (
    <div className="stats-counter">
      <div className="container">
        <div class="container aos-init aos-animate" data-aos="zoom-out">
          <div class="row gy-4">
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                {" "}
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="0"
                  class="purecounter"
                >
               468
                </span>
                <p>Clients</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                {" "}
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="0"
                  class="purecounter"
                >
                 780
                </span>
                <p>Projects</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                {" "}
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="0"
                  class="purecounter"
                >
                  1453
                </span>
                <p>Hours Of Support</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                {" "}
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="0"
                  class="purecounter"
                >
             2000
                </span>
                <p>Workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCounter;
