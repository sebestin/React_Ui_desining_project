import React from 'react'
import {Row,Col} from "react-bootstrap"
import "./portfolio.css"
import portfolio1 from "../../Assets/Images/portfolio-1.jpg"
import portfolio2 from "../../Assets/Images/portfolio-2.jpg"
import portfolio3 from "../../Assets/Images/portfolio-3.jpg"
import portfolio4 from "../../Assets/Images/portfolio-4.jpg"
import portfolio5 from "../../Assets/Images/portfolio-5.jpg"
import portfolio6 from "../../Assets/Images/portfolio-6.jpg"
import portfolio7 from "../../Assets/Images/portfolio-7.jpg"
import portfolio8 from "../../Assets/Images/portfolio-8.jpg"
import portfolio9 from "../../Assets/Images/portfolio-9.jpg"
const Portfolio = () => {
  return (
    <div className='m-5'>
       <div  className='container'>
        <Row>
            <Col lg={4} md={6}>
                <img className='img-fluid portfolioimg' src={portfolio1}/>
            </Col>
            <Col lg={4} md={6}>
            <img  className='img-fluid portfolioimg' src={portfolio2}/>
            </Col>
            <Col lg={4} md={6}>
            <img className='img-fluid portfolioimg' src={portfolio3}/>
            </Col>
            <Col lg={4} md={6}>
            <img className='img-fluid portfolioimg' src={portfolio4}/>
            </Col>
            <Col lg={4} md={6}>
            <img className='img-fluid portfolioimg' src={portfolio5}/>
            </Col>
            <Col lg={4} md={6}>
            <img className='img-fluid portfolioimg' src={portfolio6}/>
            </Col>
            <Col lg={4} md={6}>
            <img className='img-fluid portfolioimg' src={portfolio7}/>
            </Col>
            <Col lg={4} md={6}>
            <img className='img-fluid portfolioimg' src={portfolio8}/>
            </Col>
            <Col lg={4} md={6}>
            <img className='img-fluid portfolioimg' src={portfolio9}/>
            </Col>
        </Row>
        </div> 


    </div>
  )
}

export default Portfolio;