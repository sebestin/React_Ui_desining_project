import React from 'react'
import Navbarcomp from '../../NavBar/Navbarcomp';
import Cheffs from '../Cheffs/Cheffs';

import FoodAbout from '../FoodAboutpage/FoodAbout';
import FoodCardcompo from '../FoodCarddiv/FoodCardcompo';
import FoodFooter from '../FoodFooter/FoodFooter';
import OurMenu from '../OurMenu/OurMenu';
import StatusCounter from '../statusCounter/StatusCounter';
import Welcomepage from '../Welcomefoodpage/Welcomepage';

const Foodstoremain = () => {
  return (
    <div>
        <Navbarcomp/>
        <Welcomepage/>
        <FoodAbout/>
        <FoodCardcompo/>
        <StatusCounter/>
        <OurMenu/>
        <Cheffs/>
        <FoodFooter/>
       

    </div>
  )
}

export default Foodstoremain;