import React from 'react'
import basket from '../../assets/basket-svgrepo-com.svg';

const Basket = (props) => {
    console.log("basket", props)
    return (
        <div className={"basket-area"}>
            <img src={basket} alt="basket" />
        </div>

    )
}

export default Basket
