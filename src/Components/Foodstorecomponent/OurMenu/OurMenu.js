import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Ourmenu.css";
import menuitme1 from "../../../Assets/Images/menu-item-1.png";
import menuitme2 from "../../../Assets/Images/menu-item-2.png";
import menuitme3 from "../../../Assets/Images/menu-item-3.png";
import menuitme4 from "../../../Assets/Images/menu-item-4.png";
import menuitme5 from "../../../Assets/Images/menu-item-5.png";
import menuitme6 from "../../../Assets/Images/menu-item-6.png";

const OurMenu = () => {
  return (
    <div>
      <div className="container text-center">
        <h2>Our Menu</h2>
        <p className="learnmore mb-5">
          Check Our <span style={{ color: "red" }}>Yummy Menu</span>
        </p>
        <div className=" text-center ">
          <Row>
            <Col lg={4}>Starter</Col>
            <Col lg={2}> Breakfast</Col>

            <Col lg={2}>Lunch</Col>
            <Col lg={2}>Dinner</Col>
          </Row>
          <h3 className="mt-5">Menu Dinner</h3>
          <Row>
            <Col lg={4}>
              {" "}
              <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                <img src={menuitme1} className="menu-img img-fluid" alt="" />
              </a>
              <h4>Magnam Tiste</h4>
              <p class="ingredients"> Lorem, deren, trataro, filede, nerada</p>
              <p class="price"> $5.95</p>
            </Col>
            <Col lg={4}>
              {" "}
              <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                <img src={menuitme2} className="menu-img img-fluid" alt="" />
              </a>
              <h4>Spring Rolls</h4>
              <p class="ingredients"> Lorem, deren, trataro, filede, nerada</p>
              <p class="price"> $50.95</p>
            </Col>
            <Col lg={4}>
              {" "}
              <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                <img src={menuitme3} className="menu-img img-fluid" alt="" />
              </a>
              <h4>Quick Noodles</h4>
              <p class="ingredients"> Lorem, deren, trataro, filede, nerada</p>
              <p class="price"> $35.5</p>
            </Col>
            <Col lg={4}>
              {" "}
              <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                <img src={menuitme4} className="menu-img img-fluid" alt="" />
              </a>
              <h4>Szechwan Chilli Chicken</h4>
              <p class="ingredients"> Lorem, deren, trataro, filede, nerada</p>
              <p className="price"> $80.2</p>
            </Col>
            <Col lg={4}>
              {" "}
              <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                <img src={menuitme5} className="menu-img img-fluid" alt="" />
              </a>
              <h4>Dim Sums</h4>
              <p class="ingredients"> Lorem, deren, trataro, filede, nerada</p>
              <p className="price"> $6.3</p>
            </Col>
            <Col lg={4}>
              {" "}
              <a href="assets/img/menu/menu-item-1.png" className="glightbox">
                <img src={menuitme6} className="menu-img img-fluid" alt="" />
              </a>
              <h4>Pepper Chicken</h4>
              <p class="ingredients"> Lorem, deren, trataro, filede, nerada</p>
              <p class="price"> $40.20</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
