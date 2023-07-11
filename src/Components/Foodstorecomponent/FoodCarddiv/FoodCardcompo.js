import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./FoodCardcompo.css";
const FoodCardcompo = () => {
  return (
    <div className="carddivbg mt-4">
      <div className="container">
        <Row>
          <Col lg={4}>
            <div className="why-box">
              <h3>Why Choose Yummy?</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <div className="text-center">
                {" "}
                <Button variant="light">Learn More</Button>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={4}>
                <div  className="card1">
            
             
                    <h4>Corporis voluptates officia eiusmod</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
       
                </div>
              </Col>
              <Col lg={4}>
              <div  className="card1">
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                    </div>
                 
              </Col>
              <Col lg={4}>
              <div  className="card1">
                    <h4>Labore consequatur incidid dolore</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                    </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FoodCardcompo;
