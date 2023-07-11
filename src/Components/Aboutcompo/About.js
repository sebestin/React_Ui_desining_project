import React from 'react'
import {Row,Col, Button} from "react-bootstrap"
import "./About.css"
const About = () => {
  return (
    <div className='container text-center mt-5'>
        <h2 className='aboutheadng mb-5'> About Us</h2>
        <Row>
            <Col lg={6}>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
                <li>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </li>
                <li>
                Duis aute irure dolor in reprehenderit in voluptate velit
                </li>
                <li>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </li>
            </ul>
            </Col>
            <Col lg={6}>
            <div>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <Button variant="outline-primary mt-2">Learn More </Button>
            </Col>
        </Row>
        
       </div>
  )
}

export default About;
