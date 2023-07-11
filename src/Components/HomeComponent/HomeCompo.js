import React from 'react'
import About from '../Aboutcompo/About';
import Bottomcompo from '../bottom/Bottomcompo';
import Buildingcompo from '../Buildingcompo/Buildingcompo';
import Buissnespagecomp from '../Buisnesspage/Buissnespagecomp';
import Clientsection from '../ClientSection/Clientsection';
import Contact from '../Contact/Contact';
import Discussion from '../Discussion/Discussion';
import Footer from '../footer/Footer';
import Navbarcomp from '../NavBar/Navbarcomp';
import NewsLetter from '../newsLetter/NewsLetter';
import Portfolio from '../Portfolio/Portfolio';
import Pricing from '../pricing/Pricing';
import Service from '../Service/Service';
import Teamscompo from '../Team/Teamscompo';

const HomeCompo = () => {
  return (
    <div><Navbarcomp/>
    <Buissnespagecomp/>
    <Clientsection/>
    <About/>
    <Buildingcompo/>
    <Discussion/>
    {/* <Teamscompo/> */}
    <Pricing/>

    <Service/>
    <Portfolio/>
    <Contact/>
    <NewsLetter/>
    <Footer/>
    <Bottomcompo/>
    </div>

  )
}

export default HomeCompo;