import React from 'react'
import pagenotfound from "../../Assets/Images/pagenotfound.webp"
import "../../App.css"
const PageNotFound = () => {
  return (
    <div className='conatiner text-center'>
        <img className="pagenotfound"src={pagenotfound}/>
    </div>
  )
}

export default PageNotFound;