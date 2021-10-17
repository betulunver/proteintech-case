import React from 'react'
import apple from '../../assets/apple-svgrepo-com.svg';

const Apple = (props) => {
    return (
        <div {...props}>
             <img src={apple} alt="apple" />
        </div>
    )
}

export default Apple
