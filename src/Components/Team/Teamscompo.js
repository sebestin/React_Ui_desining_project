import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Teams.css"
import sebestin from "../../Assets/Images/team-1.jpg"
import Jenni from "../../Assets/Images/team-2.jpg"
import Eoun_musk from "../../Assets/Images/team-3.jpg"
import Monica from "../../Assets/Images/team-4.jpg"

const Teamscompo = () => {
  return (
    <div className="teamsdiv">
    <div className="text-center container pb-5">
         <h2 className='contactheading pt-5'> Teams</h2>
         <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
            Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      <Row>
        <Col lg={6}>
          <Card style={{ width: "30rem" }}>
           
            <Card.Body>
              <Card.Title>Sebestin</Card.Title>
              <Card.Img  className="teamimg-div"src={sebestin}/>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
        <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>Eoun musk</Card.Title>
                <Card.Img  className="teamimg-div"src={Eoun_musk}/>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
      <br></br>
        </Col>
        <Col lg={6}>
        <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Jenni</Card.Title>
              <Card.Img  className="teamimg-div"src={Jenni}/>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
        <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Monica</Card.Title>
              <Card.Img  className="teamimg-div"src={Monica}/>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
                </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default Teamscompo;
