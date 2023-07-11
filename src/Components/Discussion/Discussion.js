import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import skill from "../../Assets/Images/skills.png"
import {Row,Col} from "react-bootstrap"
import "./Discussion.css"
const Discussion = () => {
    const first = 30;
    const second = 50;
    const third = 75;
    const four = 100;
  return (
    <div className='mt-5 container'>
        
        <Row>
            <Col lg={6} xs={12}>
            <div>
                <img  className="img-fluid skillimg"src={skill}/>
            </div>
            </Col>
            <Col lg={6} xs={12}>
            <div>

                <h3 className='skkilh3'>
                Voluptatem dignissimos provident quasi corporis voluptates
                </h3>
                <p className='skkilp'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
    <label>Node js</label>
   <ProgressBar first={first} label={`${first}%`} />
   <br></br>
   <label>MOngoDb</label>
   <ProgressBar now={second} label={`${second}%`} />
   <br></br>
   <label>JavaScript</label>
   <ProgressBar now={third} label={`${third}%`} />
   <br></br>
   <label>React js</label>
   <ProgressBar now={four} label={`${four}%`} />
   <br></br>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default Discussion;