import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./pricing.css";
const Pricing = () => {
  return (
    <div className="container">
      <div className="p-5">
        <h2 className="serviceheading pt-5 text-center "> Pricing</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. <br></br> Et nemo qui impedit suscipit alias ea.
          Quia fugiat sit in iste officiis commodi quidem hic suscipit alias ea.
          Quia fugiat sit in iste officiis commodi quidem hic quas quas.
        </p>
        <Row>
          <Col lg={4}>
            <div className="card-div ">
              <h3> Free Plan</h3>
              <h4>
                <sup>$</sup>0<h5 className="pt-2 permonth">per month</h5>
              </h4>
              <div className="li-div ">
                <li>
                  <AiOutlineCheck /> Quam adipiscing vitae proin
                </li>
                <li>
                  <AiOutlineCheck /> Nec feugiat nisl pretium
                </li>
                <li>
                  <AiOutlineCheck />
                  Nulla at volutpat diam uteera
                </li>
                <li>
                  {" "}
                  <AiOutlineClose />
                  <span>Pharetra massa massa ultricies</span>
                </li>
                <li>
                  <AiOutlineClose />{" "}
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </div>
              <Button variant="outline-primary mt-5 ">Get Started</Button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="card-div ">
              <h3> Buissnes Plan</h3>
              <h4>
                <sup>$</sup>250<h5 className="pt-2 permonth">per month</h5>
              </h4>
              <div className="li-div ">
                <li>
                  <AiOutlineCheck /> Quam adipiscing vitae proin
                </li>
                <li>
                  <AiOutlineCheck /> Nec feugiat nisl pretium
                </li>
                <li>
                  <AiOutlineCheck />
                  Nulla at volutpat diam uteera
                </li>
                <li>
                  {" "}
                  <AiOutlineCheck />
                  <span>Pharetra massa massa ultricies</span>
                </li>
                <li>
                  <AiOutlineCheck />{" "}
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </div>
              <Button variant="outline-primary mt-5">Get Started</Button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="card-div ">
              <h3> Developer Plan</h3>
              <h4>
                <sup>$</sup>100<h5 className="pt-2 permonth">per month</h5>
              </h4>
              <div className="li-div ">
                <li>
                  <AiOutlineClose /> Quam adipiscing vitae proin
                </li>
                <li>
                  <AiOutlineClose /> Nec feugiat nisl pretium
                </li>
                <li>
                  <AiOutlineCheck />
                  Nulla at volutpat diam uteera
                </li>
                <li>
                  {" "}
                  <AiOutlineClose />
                  <span>Pharetra massa massa ultricies</span>
                </li>
                <li>
                  <AiOutlineClose />{" "}
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </div>
              <Button variant="outline-primary mt-5">Get Started</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Pricing;
