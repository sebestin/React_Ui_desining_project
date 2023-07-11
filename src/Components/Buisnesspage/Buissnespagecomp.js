import React from 'react'
import "./Buissnes.css"
import {Row,Col, Button} from "react-bootstrap"
import hero from "../../Assets/Images/hero-img.png"
const Buissnespagecomp = () => {
  return (
    <div className='hero text-white '>
        <div className='container'>
<Row>

    <Col lg={6}>
    <div className='heading'>  
        <h1 className='ml-10'>
        Better Solutions For Your Business
        </h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>

        </div>
        <Button variant='primary'> Get started</Button>
        </Col>
    
        <Col lg={6}>
<div className='mt-5 img-div'>
    <img  className="img-fluid animateds"src={hero}/>
</div>
        </Col>
        </Row>
    </div>
    </div>
  )
}

export default Buissnespagecomp;