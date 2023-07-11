import React from "react";
import { Row, Col } from "react-bootstrap";
import "./FoodAbout.css";
import aboutmainimg from "../../../Assets/Images/about.jpg";
import about2 from "../../../Assets/Images/about-2.jpg"
const FoodAbout = () => {
  return (
    <div className="mt-5">
      <div className="text-center container ">
        <h2>About Us</h2>
        <p className="learnmore mb-5">
          Learn More <span style={{ color: "red" }}>About Us</span>
        </p>
        <Row>
          <Col lg={7} xs={12}>
            <div className="Aboutbg">
            <div className="call-us"><h4>Book a Table</h4><p>+1 5589 55488 55</p></div>
            </div>
            {/* <img className="aboutmainimg img-fluid mt-5" src={aboutmainimg} /> */}
          </Col>
          <Col lg={5} xs={12}>
            <p className="fst-italic mt-5" >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
             
            </ul>
            <p>
              {" "}
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
            <img className="aboutmainimg2 img-fluid" src={about2} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FoodAbout;
