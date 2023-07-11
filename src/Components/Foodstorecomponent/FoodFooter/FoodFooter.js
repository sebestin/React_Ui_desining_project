import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,AiOutlineArrowUp
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";

const FoodFooter = () => {
  return (
    <div className="bg-dark text-white">
      <div className="container text-white p-5">
     
        <Row>
          <Col lg={3}>
            <div className="d-flex align-items-center">
              <div className="img-div">
                <GoLocation />
              </div>
              <h5>Address</h5>
            </div>
            <p>
              {" "}
              A108 Adam Street <br /> New York, NY 535022 - US
              <br />
            </p>
          </Col>
          <Col lg={3}>
            <div className="d-flex align-items-center">
              <div className="img-div">
                <FiPhone />
              </div>
              <h5>Reservations</h5>
            </div>
            <p>
              {" "}
              <strong>Phone:</strong> +1 5589 55488 55
              <br /> <strong>Email:</strong> info@example.com
              <br />
            </p>
          </Col>
          <Col lg={3}>
            <div className="d-flex align-items-center">
              <div className="img-div">
                <MdOutlineWatchLater />
              </div>
              <h5>Opning Hours</h5>
            </div>
            <p>
              {" "}
              <strong>Mon-Sat: 11AM</strong> - 23PM
              <br /> Sunday: Closed
            </p>
          </Col>
          <Col lg={3}>
            <h5>Follow us</h5>

            <div className="social-links d-flex">
              <div className="social-links">
                <AiFillTwitterCircle />

                <AiFillInstagram />

                <BsFacebook />

                <AiFillLinkedin />
              </div>
            </div>
          </Col>
          <hr></hr>
          <div class="container text-center ">
            <div class="copyright">
              {" "}
              © Copyright{" "}
              <strong>
                <span>Yummy</span>
              </strong>
              . All Rights Reserved
            </div >
            <div className="arrow-div">
            <a href="#" className="scroll-top d-flex align-items-center justify-content-center active"><AiOutlineArrowUp/></a>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default FoodFooter;
