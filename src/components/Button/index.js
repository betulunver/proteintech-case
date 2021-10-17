import React from 'react'
import { connect } from 'react-redux';
import {
    changeButtonText,
    changeTreeClass,
    changeApple1Class,
    changeApple2Class,
    changeApple3Class
} from '../../actions';

const Button = (props) => {
console.log("button",props)
    
    return (
        <div className="text-area">
            <span id="start-button" onClick={props.start}>
                {props.buttonText}
            </span>
        </div>
    )
}
const mapStateToProps = state => {
    return state;
}

const mapActionsToProps = {
    changeButtonText,
    changeTreeClass,
    changeApple1Class,
    changeApple2Class,
    changeApple3Class
};

export default connect(mapStateToProps, mapActionsToProps)(Button)
