import React from 'react'
import {Row,Col} from "react-bootstrap"
import "./footer.css"
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='container-fluid'>
        <Row>
            <Col lg={3} md={3}>
          <h3>Sab</h3>
          <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br></br>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
            </Col>
            <Col lg={3} md={3}>
            <h3>Useful links</h3>
          
         
            <div className='li-div '>
              <li >   <AiOutlineDoubleRight /> <a href="#">Home</a></li>
              <li >   <AiOutlineDoubleRight />  <a href="#">About us</a></li>
              <li >   <AiOutlineDoubleRight /> <a href="#">Services</a></li>
              <li >   <AiOutlineDoubleRight /> <a href="#">Terms of service</a></li>
              <li >   <AiOutlineDoubleRight />  <a href="#">Privacy policy</a></li>
              </div>
     
     
            </Col>
            <Col lg={3} md={3}>
            <div className='li-div'>
            <h3>Our services</h3>
         
            <li >   <AiOutlineDoubleRight />  <a href="#">Web Design</a></li>
            <li >   <AiOutlineDoubleRight />  <a href="#">Web Development</a></li>
            <li >   <AiOutlineDoubleRight />  <a href="#">Product Management</a></li>
            <li >   <AiOutlineDoubleRight /> <a href="#">Marketing</a></li>
            <li >   <AiOutlineDoubleRight />  <a href="#">Graphic Design</a></li>
       </div>
            </Col>
            <Col lg={3} md={3}>
            <h3>OurSocial Networks</h3>
            <div class="social-links mt-3">
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div className='icon-div'>
            <AiFillTwitterCircle/>
            <BsFacebook/>
            <AiFillInstagram/>
            <AiFillLinkedin/>
            </div>
            </div>
            </Col>
        
        </Row>
    </div>
  )
}

export default Footer;