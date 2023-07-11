import React from 'react'
import {Row,Col, Button} from "react-bootstrap"
import "./welcome.css";
import { TbPlayerPlay } from 'react-icons/tb';
import welcomefood from "../../../Assets/Food Assets/hero-img.png"
const Welcomepage = () => {
  return (
    <div className='welcome-div'>
        <div className='container'>
<Row>
    <Col lg={5}>
    <h2 className="welcomeheading">Enjoy Your Healthy<br/>Delicious Food</h2>
    <p  className='ptag'>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
    <div className='d-flex '>
    <Button className=""variant='danger btnbook'> Book a Table</Button>
    <div className='watchlinkdiv mt-2'>
    <a  className='playerdiv ' href="https://www.youtube.com/watch?v=LXb3EKWsInQ" ><span>Watch Video</span></a>
    </div>
    </div>
    </Col>
    <Col lg={5}>
        <div className=''>
        <img  className="img-fluid welcomefoodimg "src={welcomefood}/>
        </div>
    </Col>
</Row>
        </div>
    </div>
  )
}

export default Welcomepage;