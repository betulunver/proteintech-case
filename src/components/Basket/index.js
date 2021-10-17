import React from 'react'
import basket from '../../assets/basket-svgrepo-com.svg';

const Basket = (props) => {
    console.log("basket",props)
    return (
        
           <img src={basket} alt="basket" />
     
    )
}

export default Basket
