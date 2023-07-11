import React from "react";
import { Row, Col } from "react-bootstrap";
import cheff1 from "../../../Assets/Images/chefs-1.jpg"
import cheff2 from "../../../Assets/Images/chefs-2.jpg"
import cheff3 from "../../../Assets/Images/chefs-3.jpg"
import "./Cheffs.css";
const Cheffs = () => {
  return (
    <div className="cheffsdiv">
      <div className="text-center container">
        <h3> Cheffs</h3>
        <p className="learnmore mb-5">
          Our Professinal <span style={{ color: "red" }}>Cheffs</span>
          <Row>
            <Col lg={4}>
              <div className="chef-member ">
                <div className="member-img">
                  {" "}
                  <img
                    src={cheff1}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    {" "}
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>{" "}
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>{" "}
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>{" "}
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4> <span>Master Chef</span>
                  <p>
                    Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                    tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                    corporis et voluptate.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>

            <div className="chef-member">
                <div className="member-img">
                  {" "}
                  <img
                    src={cheff2}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    {" "}
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>{" "}
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>{" "}
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>{" "}
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Jenni pinto</h4> <span>Master Chef</span>
                  <p>
                    Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                    tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                    corporis et voluptate.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
            <div className="chef-member">
                <div className="member-img">
                  {" "}
                  <img
                    src={cheff3}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    {" "}
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>{" "}
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>{" "}
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>{" "}
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Jhonson Dais </h4> <span>Master Chef</span>
                  <p>
                    Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                    tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                    corporis et voluptate.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </p>
      </div>
    </div>
  );
};

export default Cheffs;
