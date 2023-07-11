import React from 'react'
import {Row,Col,Card,Button,Form} from "react-bootstrap"
import developer from "../../Assets/Images/developer.jpg"
import "./Contact.css"
const Contact = () => {
  return (
    <div className='container text-center p-5'>
              <h2 className='contactheading pt-5'> Contact</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
                Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <h2> </h2>
        <Row>
            <Col lg={6} xs={12}>
         <div>
            <img className='img-fluid developerimg' src={developer}/>
         </div>
            </Col>
            <Col lg={6} xs={12}>
            <div className='card-div '>

            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='lable'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='lable'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 mr-2" controlId="formBasicCheckbox">
        <Form.Check className='lable ml-2' type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='lable' variant="primary" type="submit">
        Submit
      </Button>
    </Form>

            </div>
            </Col>
        </Row>
    </div>
  )
}

export default Contact;