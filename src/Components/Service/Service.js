import React from "react";
import Data from "./Data";
import {Row,Col} from "react-bootstrap"
import ServiceCard from "./ServiceCard";
import "./service.css"
const Service = () => {
  return (
    <div className=" service-div text-center ">
       <h2 className='serviceheading pt-5'> Services</h2>
       <p className="w-50 text-center container">
       Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
        Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
       </p>
    <div className="container mt-5 service-div pt-5 pb-5">
                   <Row>
      {Data.map((e, key) => {
        return (
 
                <Col lg={3} md={3} xs={12}>
          <ServiceCard
            key={key}
            Name={e.Name}s
            rollNo={e.ROllNo}
            adress={e.adress}
          />
          <br></br>
          </Col>

        );
      })}
                  </Row>
    </div>
    </div>
  );

};

export default Service;
