import React from 'react'
import {Row,Col} from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import "./building.css"
import whyiam from "../../Assets/Images/why-us.png"
const Buildingcompo = () => {
  return (
    <div className='mt-5 text-center buildingdiv'>
        
        <Row>
            <Col lg={6} xs={12}>
 <h3 className='mt-5'>Eum ipsam laborum deleniti </h3><strong>velit pariatur architecto aut nihil</strong>
 <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                <br></br>Duis aute irure dolor in reprehenderit
              </p>
              <div className='container'>
              <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
              </div>
            </Col>
            <Col lg={6} xs={12}>
           <div>
            <img className='img-fluid whyimg' src={whyiam}/>
           </div>
            </Col>
        </Row>
    </div>
  )
}

export default Buildingcompo;