import React from 'react'
import { Button } from 'react-bootstrap';
import "./newsletter.css";
import{Row,Col} from "react-bootstrap"
const NewsLetter = () => {
  return (
    <div className='news-div'>
    <div className='text-center '>

    <h2 className='newslettereading pt-5'> Join Our Newsletter</h2>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
     
        <form className='form-bg container'>
            <input  className='input-div'/>
            <Button className='btn-div'>subscribe</Button>
        </form>
    
    </div>
    </div>
  )
}

export default NewsLetter;