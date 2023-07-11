import React from 'react'
import {Row,Col} from "react-bootstrap"
import img1 from "../../Assets/Images/client-1.png"
import img2 from "../../Assets/Images/client-2.png"
import img3 from "../../Assets/Images/client-3.png"
import img4 from "../../Assets/Images/client-4.png"
import img5 from "../../Assets/Images/client-5.png"
import img6 from "../../Assets/Images/client-6.png"
import "./Cleintsection.css"
const Clientsection = () => {
  return (
    <div className='conatiner fluid bg-color'>
        
<Row>
    <Col lg={2} xs={12}>
    <div >
        <img className="img-fluid imgsize"src={img1}/>
    </div>
    </Col>
    <Col lg={2} xs={12}>
    <div>
    <img className="img-fluid imgsize"src={img2}/>
    </div>
    </Col>
    <Col lg={2} xs={12}>
    <div>
    <img className="img-fluid imgsize" src={img3}/>
    </div>
    </Col>
    <Col lg={2} xs={12}>
    <div>
    <img className="img-fluid imgsize"src={img4}/>
    </div>
    </Col>
    <Col lg={2} xs={12}>
    <div>
    <img className="img-fluid imgsize "src={img5}/>
    </div>
    </Col>
    <Col lg={2} xs={12}>
    <div>
    <img className="img-fluid imgsize "src={img6}/>
    </div>
    </Col>
</Row>

    </div>
  )
}

export default Clientsection;