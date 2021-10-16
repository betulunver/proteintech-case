import React from 'react'
import { connect } from 'react-redux';
import { start } from '../../actions';
import "../styles.css"

const Button = (props) => {
    console.log("button",props)
    return (
        <div>
            <button onClick={()=> props.start("Shaking")}>{props.buttonText}</button>
        </div>
    )
}
const mapStateToProps = state => {
    return state;
  }
  
const mapActionsToProps = {start};
export default connect(mapStateToProps, mapActionsToProps) (Button)
